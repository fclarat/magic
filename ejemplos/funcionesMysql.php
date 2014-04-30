<?php
require('configuracion.php');
/*
$link = mysql_connect($serverBD,$usuarioBD,$passwordBD);
mysql_select_db($nombreBD, $link);

$fecha =date("Y-m-d H:i:s");
$usuario =255;
$puntaje=2;
$denuncias=0;
$url="aca url";
$categoria=2;


$sql ="INSERT INTO fotos values(null,'$fecha',$usuario,$puntaje,$denuncias,'$url',$categoria)";
$res = mysql_query($sql, $link);
mysql_close($link);
*/

function MYSQLinsertarFoto($target_path)
{	
	require('configuracion.php');
	$link = mysql_connect($serverBD,$usuarioBD,$passwordBD);
	mysql_select_db($nombreBD, $link);
	$tabla= "fotos";
	$fecha =date("Y-m-d H:i:s");
	$usuario =255;
	$puntaje=0;
	$denuncias=0;
	$url=$target_path;
	$categoria=2;
	
	$sql ="INSERT INTO $tabla values(null,'$fecha',$usuario,$puntaje,$denuncias,'$url',$categoria)";
	$res = mysql_query($sql, $link);
	mysql_close($link);
}

function MYSQmostrarFoto()
{

}


?>
