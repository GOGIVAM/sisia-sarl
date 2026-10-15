<?php
/* Copyright by MKO-LIDIA
 * Genere le PDF d un document au moment de la demande, l envoie au navigateur puis supprime le fichier temporaire.
 * Aucune ecriture en base ni dans les documents.
 * Usage : /custom/sisiaondemand/pdf.php?element=propal|commande|shipping|fichinter&id=N */

require '../../main.inc.php';

$element = GETPOST('element', 'aZ09');
$id = GETPOSTINT('id');
if (empty($user->id) || !empty($user->socid) || $id <= 0) {
	accessforbidden();
}

// element => [fichier de classe, classe, dossier des modeles, cle de conf, module de droits, droit, constante du modele par defaut]
$defs = array(
	'propal'    => array('/comm/propal/class/propal.class.php', 'Propal', 'propale', 'propal', 'propal', 'lire', 'PROPALE_ADDON_PDF'),
	'commande'  => array('/commande/class/commande.class.php', 'Commande', 'commande', 'commande', 'commande', 'lire', 'COMMANDE_ADDON_PDF'),
	'shipping'  => array('/expedition/class/expedition.class.php', 'Expedition', 'expedition', 'expedition', 'expedition', 'lire', 'EXPEDITION_ADDON_PDF'),
	'fichinter' => array('/fichinter/class/fichinter.class.php', 'Fichinter', 'fichinter', 'ficheinter', 'ficheinter', 'lire', 'FICHEINTER_ADDON_PDF'),
);
if (!isset($defs[$element])) {
	accessforbidden();
}
list($classfile, $classname, $modeldir, $confkey, $rightmod, $rightname, $defaultconst) = $defs[$element];
if (!$user->hasRight($rightmod, $rightname)) {
	accessforbidden();
}

require_once DOL_DOCUMENT_ROOT.$classfile;
$object = new $classname($db);
if ($object->fetch($id) <= 0) {
	accessforbidden();
}
$object->fetch_thirdparty();
if (empty($conf->$confkey)) {
	accessforbidden();
}

// modele du document, sinon modele par defaut ; uniquement des modeles standard (nom sans caractere special)
$model = !empty($object->model_pdf) ? $object->model_pdf : getDolGlobalString($defaultconst);
$model = preg_replace('/[^a-zA-Z0-9_]/', '', (string) $model);
$modelfile = DOL_DOCUMENT_ROOT.'/core/modules/'.$modeldir.'/doc/pdf_'.$model.'.modules.php';
if ($model === '' || !is_readable($modelfile)) {
	$model = preg_replace('/[^a-zA-Z0-9_]/', '', getDolGlobalString($defaultconst));
	$modelfile = DOL_DOCUMENT_ROOT.'/core/modules/'.$modeldir.'/doc/pdf_'.$model.'.modules.php';
	if ($model === '' || !is_readable($modelfile)) {
		http_response_code(500);
		print 'Modele PDF introuvable';
		exit;
	}
}
require_once $modelfile;

// langue : celle du tiers si definie, sinon le francais (activite au Cameroun)
$lang = (!empty($object->thirdparty->default_lang) ? $object->thirdparty->default_lang : 'fr_FR');
$outputlangs = new Translate('', $conf);
$outputlangs->setDefaultLang($lang);
$outputlangs->loadLangs(array('main', 'bills', 'orders', 'propal', 'companies', 'deliveries', 'sendings', 'products', 'dict', 'interventions', 'compta'));

// dossier temporaire : le modele y ecrit a la place de /var/documents
$tmp = sys_get_temp_dir().'/sisiaondemand_'.bin2hex(random_bytes(8));
mkdir($tmp, 0700, true);
$conf->$confkey->dir_output = $tmp;
$conf->$confkey->multidir_output[$object->entity] = $tmp;

$classmodel = 'pdf_'.$model;
$writer = new $classmodel($db);
$res = $writer->write_file($object, $outputlangs);
$file = (!empty($writer->result['fullpath']) ? $writer->result['fullpath'] : '');

$cleanup = function ($dir) use (&$cleanup) {
	foreach (glob($dir.'/{,.}*', GLOB_BRACE) ?: array() as $f) {
		if (in_array(basename($f), array('.', '..'))) {
			continue;
		}
		is_dir($f) ? $cleanup($f) : @unlink($f);
	}
	@rmdir($dir);
};

if ($res <= 0 || $file === '' || !is_readable($file) || strpos((string) realpath($file), (string) realpath($tmp)) !== 0) {
	$cleanup($tmp);
	http_response_code(500);
	print 'Generation du PDF impossible';
	exit;
}

$name = dol_sanitizeFileName($object->ref).'.pdf';
header('Content-Type: application/pdf');
header('Content-Disposition: inline; filename="'.$name.'"');
header('Content-Length: '.filesize($file));
header('Cache-Control: private, no-store');
readfile($file);
$cleanup($tmp);
exit;
