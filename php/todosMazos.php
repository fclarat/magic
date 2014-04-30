<?php
include("../config.php");

$sql = "
SELECT
	id,
	nombre
FROM
	`mazos`" ;
	//SELECT `id`,`name` FROM `cartas`
	
$link = mysql_connect($serverBD,$usuarioBD,$passwordBD);
mysql_select_db($nombreBD, $link);	
$res = mysql_query($sql, $link);
mysql_close($link);

$i=0;
while ($registro = mysql_fetch_array($res)) { 
	$cartas[$i]['name']=$registro['nombre'];
	$cartas[$i]['id']=$registro['id'];
	$i++;
} 

echo json_encode($cartas);
?>