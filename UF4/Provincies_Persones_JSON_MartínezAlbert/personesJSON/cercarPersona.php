<?php
// header('Content-Type: text/txt; charset=ISO-8859-1');
$nom='';
$cognom='';
$adreca='';
if ($_REQUEST['dni']=='1')
{
  $nom='Pepe';
  $cognom='Garcia';
  $adreca='Moreres 14';
}
if ($_REQUEST['dni']=='2')
{
  $nom='Anna';
  $cognom='Blancafort';
  $adreca='Lluis Companys 34';
}
if ($_REQUEST['dni']=='3')
{
  $nom='Rosa';
  $cognom='Perez';
  $adreca='Barcelona 12';
}
// echo '{"nom":"$nom","cognom":"$cognom","direccion":"$adreca"}'
//echo '{"nom":"'. $nom . '","cognom":"'. $cognom . '","adreca":"' . $adreca. '"}';
echo "{\"nom\":\"$nom\", \"cognom\":\"$cognom\",\"adreca\":\"$adreca\"}"

?>
