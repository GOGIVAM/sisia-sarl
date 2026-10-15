-- Conversion des anciens titres / sous-totaux du module ATM "subtotal" (special_code 104777) vers le module natif
-- de Dolibarr 24 (special_code 81). Idempotent : ne touche que les lignes encore a l'ancien format.
--   titre         : qty 1..9    -> meme niveau ; options d'affichage = prix et totaux visibles (comme avant)
--   sous-total    : qty 91..99  -> qty = -(100 - qty) (99 -> -1, 98 -> -2) ; montant du sous-total visible
--   texte libre   : qty 50      -> ligne libre sans quantite (special_code 0, type 0, qty 0)
-- Les montants ne changent pas : toutes ces lignes ont un prix nul.
START TRANSACTION;

UPDATE llx_commandedet SET
  extraparams = CASE WHEN qty BETWEEN 1 AND 9 THEN '{"subtotal":{"titleshowuponpdf":1,"titleshowtotalexludingvatonpdf":1}}'
                     WHEN qty BETWEEN 91 AND 99 THEN '{"subtotal":{"subtotalshowtotalexludingvatonpdf":1}}' END,
  qty = CASE WHEN qty BETWEEN 91 AND 99 THEN qty - 100 ELSE qty END,
  special_code = 81
WHERE special_code = 104777 AND (qty BETWEEN 1 AND 9 OR qty BETWEEN 91 AND 99);

UPDATE llx_facturedet SET
  extraparams = CASE WHEN qty BETWEEN 1 AND 9 THEN '{"subtotal":{"titleshowuponpdf":1,"titleshowtotalexludingvatonpdf":1}}'
                     WHEN qty BETWEEN 91 AND 99 THEN '{"subtotal":{"subtotalshowtotalexludingvatonpdf":1}}' END,
  qty = CASE WHEN qty BETWEEN 91 AND 99 THEN qty - 100 ELSE qty END,
  special_code = 81
WHERE special_code = 104777 AND (qty BETWEEN 1 AND 9 OR qty BETWEEN 91 AND 99);

UPDATE llx_propaldet SET
  extraparams = CASE WHEN qty BETWEEN 1 AND 9 THEN '{"subtotal":{"titleshowuponpdf":1,"titleshowtotalexludingvatonpdf":1}}'
                     WHEN qty BETWEEN 91 AND 99 THEN '{"subtotal":{"subtotalshowtotalexludingvatonpdf":1}}' END,
  qty = CASE WHEN qty BETWEEN 91 AND 99 THEN qty - 100 ELSE qty END,
  special_code = 81
WHERE special_code = 104777 AND (qty BETWEEN 1 AND 9 OR qty BETWEEN 91 AND 99);

-- textes libres (qty 50)
UPDATE llx_commandedet SET special_code = 0, product_type = 0, qty = 0 WHERE special_code = 104777 AND qty = 50;
UPDATE llx_facturedet SET special_code = 0, product_type = 0, qty = 0 WHERE special_code = 104777 AND qty = 50;
UPDATE llx_propaldet SET special_code = 0, product_type = 0, qty = 0 WHERE special_code = 104777 AND qty = 50;
UPDATE llx_commande_fournisseurdet SET special_code = 0, product_type = 0, qty = 0 WHERE special_code = 104777 AND qty = 50;

-- modeles PDF des anciens documents : les modeles ATM n'existent plus, on pointe vers leur base standard
UPDATE llx_commande SET model_pdf = 'eratosthene' WHERE model_pdf = 'atmeratosthene';
UPDATE llx_facture  SET model_pdf = 'sponge'      WHERE model_pdf = 'atmsponge';
UPDATE llx_propal   SET model_pdf = 'cyan'        WHERE model_pdf = 'atmcyan';
DELETE FROM llx_document_model WHERE nom IN ('atmeratosthene','atmsponge','atmcyan','crabe_btp');

-- texte des titres : l'ancien module le stockait dans `label`, le natif le lit dans `description`
UPDATE llx_commandedet SET description = label WHERE special_code = 81 AND qty > 0 AND (description IS NULL OR description = '') AND label IS NOT NULL AND label <> '';
UPDATE llx_facturedet SET description = label WHERE special_code = 81 AND qty > 0 AND (description IS NULL OR description = '') AND label IS NOT NULL AND label <> '';
UPDATE llx_propaldet SET description = label WHERE special_code = 81 AND qty > 0 AND (description IS NULL OR description = '') AND label IS NOT NULL AND label <> '';

-- libelle des sous-totaux : l'ancien module n'en stockait pas, le natif affiche "Sous-total de : <titre>" -> on recopie le titre correspondant
UPDATE llx_commandedet s SET s.description = (SELECT t.description FROM (SELECT fk_commande, qty, rang, description FROM llx_commandedet WHERE special_code = 81 AND qty > 0) t WHERE t.fk_commande = s.fk_commande AND t.qty = -s.qty AND t.rang < s.rang ORDER BY t.rang DESC LIMIT 1) WHERE s.special_code = 81 AND s.qty < 0 AND (s.description IS NULL OR s.description = '');
UPDATE llx_facturedet s SET s.description = (SELECT t.description FROM (SELECT fk_facture, qty, rang, description FROM llx_facturedet WHERE special_code = 81 AND qty > 0) t WHERE t.fk_facture = s.fk_facture AND t.qty = -s.qty AND t.rang < s.rang ORDER BY t.rang DESC LIMIT 1) WHERE s.special_code = 81 AND s.qty < 0 AND (s.description IS NULL OR s.description = '');
UPDATE llx_propaldet s SET s.description = (SELECT t.description FROM (SELECT fk_propal, qty, rang, description FROM llx_propaldet WHERE special_code = 81 AND qty > 0) t WHERE t.fk_propal = s.fk_propal AND t.qty = -s.qty AND t.rang < s.rang ORDER BY t.rang DESC LIMIT 1) WHERE s.special_code = 81 AND s.qty < 0 AND (s.description IS NULL OR s.description = '');

COMMIT;
select 'restant ancien format' k, (select count(*) from llx_commandedet where special_code=104777)+(select count(*) from llx_facturedet where special_code=104777)+(select count(*) from llx_propaldet where special_code=104777)+(select count(*) from llx_commande_fournisseurdet where special_code=104777) n;
select 'lignes natives (81)' k, (select count(*) from llx_commandedet where special_code=81) cmd,(select count(*) from llx_facturedet where special_code=81) fact,(select count(*) from llx_propaldet where special_code=81) prop;
select 'anciens modeles restants' k, (select count(*) from llx_commande where model_pdf like 'atm%')+(select count(*) from llx_facture where model_pdf like 'atm%')+(select count(*) from llx_propal where model_pdf like 'atm%') n;
