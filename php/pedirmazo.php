<?php
session_id($_POST['partida']);
session_start();
include("../config.php");

$mazo=$_POST['mazo'];  // Aca recibo el mazo...


$sql = "
SELECT
	url_path
FROM
	`cartas_mazo`
	JOIN `cartas` ON `cartas_mazo`.id_carta = cartas.id 
WHERE
	id_mazo = $mazo";
	
$link = mysql_connect($serverBD,$usuarioBD,$passwordBD);
mysql_select_db($nombreBD, $link);	
$res = mysql_query($sql, $link);
mysql_close($link);

	

$registro = mysql_fetch_assoc($res);
$mazo2 = $registro['url_path'];
while ($registro = mysql_fetch_assoc($res)) 
{
		$mazo2 = $mazo2.",".$registro['url_path'];
}


echo ($mazo2) ;
?>