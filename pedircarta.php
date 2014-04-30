<?php
session_id($_POST['partida']);
session_start();
if($_SESSION["usuario1"]["id"]==$_POST['usuario'])
{
	$cartarobar = array_shift($_SESSION["usuario1"]["mazo"]);
}
else
{
	if($_SESSION["usuario2"]["id"]==$_POST['usuario'])
	{
		$cartarobar = array_shift($_SESSION["usuario2"]["mazo"]);
	}

}
echo $cartarobar["url"];

?>