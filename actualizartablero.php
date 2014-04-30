<?php
session_id($_POST['partida']);
session_start();

$pasar = '';
if($_SESSION["usuario1"]["id"]==$_POST['usuario'])
{
	$_SESSION["usuario1"]["mimesa"] = $_POST['tiene'];
	if(isset($_SESSION["usuario2"]))
        $pasar = $_SESSION["usuario2"]["mimesa"];

}
else
{
	if($_SESSION["usuario2"]["id"]==$_POST['usuario'])
	{
		$_SESSION["usuario2"]["mimesa"] = $_POST['tiene'];
        if(isset($_SESSION["usuario1"]))
		    $pasar = $_SESSION["usuario1"]["mimesa"];

	}

}
echo $pasar;

?>