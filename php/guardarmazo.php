<?php


$link = mysql_connect('mysql10.000webhost.com','a9547394_magic','2qwerty');
$selectDB = mysql_select_db('a9547394_magic', $link);


$cartas = explode(",", $_POST['mazo']);
$nombre = $_POST['nombre'];

$sql ="INSERT INTO mazos values(null,0,'$nombre')";
$res = mysql_query($sql, $link);


$mazo =  mysql_insert_id ();

foreach ($cartas as $value) {
    $sql ="INSERT INTO cartas_mazo values(null,$value,$mazo,1)";
	$res = mysql_query($sql, $link);
}


mysql_close($link);


?>