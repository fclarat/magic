<?php


$link = mysql_connect('mysql10.000webhost.com','a9547394_magic','2qwerty');
$selectDB = mysql_select_db('a9547394_magic', $link);


function MYSQLinsertarCarta($nombre,$cost,$cmc,$color,$type,$subtype,$rarity,$multiverseId,$path,$set, $link)
{	
	$tabla= "cartas";
	if ($multiverseId=="")
	{
		$multiverseId=0; 
	}
	$sql ="INSERT INTO $tabla values(null,'$nombre','$cost','$cmc','$color','$type','$subtype','$rarity',$multiverseId,'$path','$set')";
	$res = mysql_query($sql, $link);
}

$xmlstr = file_get_contents('../sets/Mirrodin_Besieged.xml');
$xml = simplexml_load_string($xmlstr);
$json = json_encode($xml);
$array = json_decode($json,TRUE);



$set = $array['@attributes']['name'];
$setImage =  str_replace(" ","_",$set);
$i=0;
foreach ( $array['cards']['card'] as $key ) {
	$i++;
	if($i < 10 )
	{
		$path = "images/cards/".$setImage."/00"  . $i . ".jpg";
	}	
	else if ($i < 100)
	{
		$path = "images/cards/".$setImage."/0"  . $i . ".jpg";
	}
	else 
	{
		$path =  "images/cards/".$setImage."/" . $i . ".jpg";
	}
	
    MYSQLinsertarCarta($key['@attributes']['name'],$key['property'][0]['@attributes']['value'],$key['property'][1]['@attributes']['value'],$key['property'][2]['@attributes']['value'],$key['property'][3]['@attributes']['value'],$key['property'][4]['@attributes']['value'],$key['property'][5]['@attributes']['value'],$key['property'][12]['@attributes']['value'],$path,$set,$link);
}


/*
echo $array['cards']['card'][1]['@attributes']['name'];
echo $array['cards']['card'][1]['property'][0]['@attributes']['value']; //cost
echo $array['cards']['card'][1]['property'][1]['@attributes']['value']; //conver mana cost
echo $array['cards']['card'][1]['property'][2]['@attributes']['value']; //Color
echo $array['cards']['card'][1]['property'][3]['@attributes']['value']; //type
echo $array['cards']['card'][1]['property'][4]['@attributes']['value']; //subtype
echo $array['cards']['card'][1]['property'][5]['@attributes']['value']; //rarity
echo $array['cards']['card'][1]['property'][11]['@attributes']['value']; //MultiverseId
//URL_PATH
//SET
*/





mysql_close($link);

?>