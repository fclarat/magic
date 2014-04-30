<?php
session_id($_POST['partida']);
session_start();
include("config.php");

$mazo=$_POST['mazo'];  // Aca recibo el mazo...


$sql = "
SELECT
	id_carta,
	url_path,
	cartas.name,
	cantidad
FROM
	`cartas_mazo`
	JOIN `cartas` ON `cartas_mazo`.id_carta = cartas.id 
WHERE
	id_mazo = $mazo";

	
	
$link = mysql_connect($serverBD,$usuarioBD,$passwordBD);
mysql_select_db($nombreBD, $link);	
$res = mysql_query($sql, $link);
mysql_close($link);

$mazo = array();
$i=0;
while ($registro = mysql_fetch_assoc($res)) 
{
	for($k=0;$k<$registro['cantidad'];$k++)
	{
		$mazo[$i]["url"] = $registro['url_path'];
		$mazo[$i]["nombre"] = $registro['name'];
		$mazo[$i]["id_carta"] = $registro['id_carta'];
		$i++;
	}
}


// Genero el user
function crearusuario() { 

    $chars = "abcdefghijkmnopqrstuvwxyz023456789"; 
    srand((double)microtime()*1000000); 
    $i = 0; 
    $user = '' ; 

    while ($i <= 15) { 
        $num = rand() % 33; 
        $tmp = substr($chars, $num, 1); 
        $user = $user . $tmp; 
        $i++; 
    } 
    return $user; 
} 

// Usuario 
$usuario = crearusuario(); 
shuffle($mazo);
if(isset($_SESSION["usuario1"]["id"]))
{
	$_SESSION["usuario2"]["id"]=$usuario;
	$_SESSION["usuario2"]["mazo"]=$mazo;
	echo $usuario; 	
}
else
{
	$_SESSION["usuario1"]["id"]=$usuario;
	$_SESSION["usuario1"]["mazo"]=$mazo;
	echo $usuario;
}

?>