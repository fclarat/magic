<?php
include("../config.php");

if(isset($_POST['set']))
{
	$set = $_POST['set'];
}
else
{
	$set = "%";
}

$sql = "
SELECT
	id,
	name
FROM
	`cartas` 
WHERE
	`set` LIKE '".$set."' 
ORDER BY   
		`cartas`.`name` ASC " 
			 
			 ;
	//SELECT `id`,`name` FROM `cartas`
	
$link = mysql_connect($serverBD,$usuarioBD,$passwordBD);
mysql_select_db($nombreBD, $link);	
$res = mysql_query($sql, $link);
mysql_close($link);

$i=0;
while ($registro = mysql_fetch_array($res)) { 
	$cartas[$i]['name']=$registro['name'];
	$cartas[$i]['id']=$registro['id'];
	$i++;
} 

echo json_encode($cartas);
?>