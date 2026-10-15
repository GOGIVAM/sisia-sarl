<?php
/* Copyright by MKO-LIDIA - bouton "PDF a la demande" sur les fiches de documents */

class ActionsSisiaondemand
{
	public $db;
	public $error = '';
	public $errors = array();
	public $results = array();
	public $resprints;

	public function __construct($db)
	{
		$this->db = $db;
	}

	/**
	 * Hook addMoreActionsButtons : ajoute le bouton dans la barre d actions de la fiche.
	 */
	public function addMoreActionsButtons($parameters, &$object, &$action, $hookmanager)
	{
		global $user;

		$map = array('propal' => 'propal', 'commande' => 'commande', 'shipping' => 'shipping', 'fichinter' => 'fichinter');
		if (empty($object->id) || empty($object->element) || !isset($map[$object->element]) || !empty($user->socid)) {
			return 0;
		}
		$url = dol_buildpath('/sisiaondemand/pdf.php', 1).'?element='.urlencode($map[$object->element]).'&id='.((int) $object->id);
		print '<a class="butAction" target="_blank" rel="noopener" href="'.dol_escape_htmltag($url).'" title="Genere le PDF a l instant (aucun fichier conserve)">PDF</a>';
		return 0;
	}
}
