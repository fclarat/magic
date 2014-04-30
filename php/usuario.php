<?php
session_id($_POST['partida']);
session_start();

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
if(isset($_SESSION["usuario1"]["id"]))
{
	$_SESSION["usuario2"]["id"]=$usuario;
	echo $usuario; 	
}
else
{
	$_SESSION["usuario1"]["id"]=$usuario;
	echo $usuario;
}



?>