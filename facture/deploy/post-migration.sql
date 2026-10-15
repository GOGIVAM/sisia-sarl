-- Reglages SISIA a (re)appliquer apres une migration ou un remplacement de la base (entity 1 = SISIA).
-- Rejouable sans risque : chaque ligne supprime puis recree la constante.
DELETE FROM llx_const WHERE entity=1 AND name IN
 ('MAIN_DOCUMENTS_LOGO_HEIGHT','MAIN_ADD_PDF_BACKGROUND','MAIN_USE_BACKGROUND_ON_PDF','MAIN_USE_BACKGROUND_ON_PDF_X','MAIN_USE_BACKGROUND_ON_PDF_Y','FACTURE_ADDON_PDF','PROPALE_ADDON_PDF','MAIN_FAVICON_URL','MAIN_HTML_HEADER','MAIN_HTML_FOOTER');
INSERT INTO llx_const (name,value,type,visible,note,entity) VALUES
 ('MAIN_DOCUMENTS_LOGO_HEIGHT','27','chaine',0,'Hauteur du logo en tete des documents (mm), max avant de toucher le bloc Emetteur',1),
 ('MAIN_USE_BACKGROUND_ON_PDF','watermark.png','chaine',0,'Filigrane SISIA transparent (mycompany/logos)',1),
 ('MAIN_USE_BACKGROUND_ON_PDF_X','0','chaine',0,'',1),
 ('MAIN_USE_BACKGROUND_ON_PDF_Y','0','chaine',0,'',1),
 ('FACTURE_ADDON_PDF','sponge','chaine',0,'Modele facture (remplace atmsponge, module ATM absent)',1),
 ('PROPALE_ADDON_PDF','cyan','chaine',0,'Modele proposition (remplace atmcyan, module ATM absent)',1),
 ('MAIN_FAVICON_URL','/custom/favicon.ico','chaine',0,'Favicon SISIA',1),
 ('MAIN_HTML_HEADER','<link rel="icon" type="image/png" sizes="32x32" href="/custom/favicon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="/custom/favicon-16.png"><link rel="apple-touch-icon" href="/custom/apple-touch-icon.png">','chaine',0,'Icones SISIA',1),
 ('MAIN_HTML_FOOTER','<div style="text-align:center;font-size:12px;opacity:.75;padding:8px 0">Copyright by MKO-LIDIA</div>','chaine',0,'Mention de copyright',1);
