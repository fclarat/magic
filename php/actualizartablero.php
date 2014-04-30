<?php
session_id($_POST['partida']);
session_start();

if($_SESSION["usuario1"]["id"]==$_POST['usuario'])
{
	$_SESSION["usuario1"]["mimesa"] = $_POST['tiene'];
	$pasar = $_SESSION["usuario2"]["mimesa"];

}
else
{
	if($_SESSION["usuario2"]["id"]==$_POST['usuario'])
	{
		$_SESSION["usuario2"]["mimesa"] = $_POST['tiene'];
		$pasar = $_SESSION["usuario1"]["mimesa"];

	}

}
echo json_encode($pasar);

?>