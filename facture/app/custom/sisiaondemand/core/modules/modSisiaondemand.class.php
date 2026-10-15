<?php
/* PDF generes a la demande (SISIA) - Copyright by MKO-LIDIA
 * Ajoute un bouton "PDF" sur les fiches proposition, commande, expedition et intervention : le document est
 * genere au moment du clic puis supprime, aucun fichier n est conserve. Les factures ne sont pas concernees. */
include_once DOL_DOCUMENT_ROOT.'/core/modules/DolibarrModules.class.php';

class modSisiaondemand extends DolibarrModules
{
	public function __construct($db)
	{
		$this->db = $db;
		$this->numero = 104778;
		$this->rights_class = 'sisiaondemand';
		$this->family = 'technic';
		$this->module_position = '90';
		$this->name = preg_replace('/^mod/i', '', get_class($this));
		$this->description = "PDF generes a la demande (propositions, commandes, expeditions, interventions)";
		$this->version = '1.0.0';
		$this->const_name = 'MAIN_MODULE_'.strtoupper($this->name);
		$this->picto = 'pdf';
		$this->module_parts = array('hooks' => array('propalcard', 'ordercard', 'expeditioncard', 'fichintercard'));
		$this->dirs = array();
		$this->config_page_url = array();
		$this->depends = array();
		$this->requiredby = array();
		$this->phpmin = array(7, 4);
		$this->need_dolibarr_version = array(20, 0);
		$this->langfiles = array();
		$this->const = array();
		$this->boxes = array();
		$this->cronjobs = array();
		$this->rights = array();
		$this->menu = array();
	}

	public function init($options = '')
	{
		return $this->_init(array(), $options);
	}

	public function remove($options = '')
	{
		return $this->_remove(array(), $options);
	}
}
