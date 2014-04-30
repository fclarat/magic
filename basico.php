<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>TESTEANDO</title>
<link rel="stylesheet" href="css/estilos.css" type="text/css"
	media="screen" />
	<link type='text/css' href='css/demo.css' rel='stylesheet' media='screen' />
	<link type='text/css' href='css/tabs.css' rel='stylesheet' media='screen' />
	<LINK rel=StyleSheet type=text/css href="css/style.css" media=screen>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jQueryRotate.1.7.js"></script>
<link href="style-chat.css" media="screen" rel="stylesheet" type="text/css" />
<script src="chat.js" type="text/javascript"></script>

<script
	src="js/drag.js"></script>
<script
	src="js/drop.js"></script>

<SCRIPT type=text/javascript src="js/behaviour.js"></SCRIPT>
<script type='text/javascript' src='js/jquery.simplemodal.js'></script>

</head>
<body>

<script type=text/javascript>
var partida ="<?php echo $_GET['partida'] ?>";
var mazojugador ="<?php echo $_GET['mazo'] ?>";
</script>
<SCRIPT type=text/javascript src="js/basic.js"></SCRIPT>



<div id="sectorSuperior">
	<div id="mesa-contrario">

	</div>
<!--<div id="mesa" class="contextmenuarea">-->
<!---->
<!---->
<!--<UL style="DISPLAY: none; TOP: 59px; LEFT: 166px" class="vmenu"	>-->
<!--		<!-- this menu item is disabled so its subitems will not be shown -->
<!--	<LI class=disabled>Exiliar</LI>-->
<!--	<LI onclick="enviarCementerio()">Enviar al Cementerio</LI>	-->
<!--	<LI onclick="volverAMano()">Regresar a la mano</LI>-->
<!--	<LI onclick="ponerEncima()">Poner encima de la biblioteca</LI>-->
<!--	<LI onclick="ponerEnFondo()">Poner al fondo de la biblioteca</LI>-->
<!--	<LI>Agregar 1 Contador-->
<!--	<UL>-->
<!--		<LI onclick="agregarContador('mas11')">Contador +1/+1</LI>-->
<!--		<LI onclick="agregarContador('mas10')">Contador +1/+0</LI>-->
<!--		<LI onclick="agregarContador('mas01')">Contador +0/+1</LI>-->
<!--		<LI onclick="agregarContador('menos11')">Contador -1/-1</LI>-->
<!--		<LI onclick="agregarContador('menos10')">Contador -1/-0</LI>-->
<!--		<LI onclick="agregarContador('menos01')">Contador -0/-1</LI>		-->
<!--		<LI>Contador de veneno</LI>-->
<!--	</UL>-->
<!--	</LI>	-->
<!--</UL>-->
<!---->
<!--</div>-->
    <div id="mesa" class="contextmenuarea">
    </div>

    <div id="cartaZoom">
<img id="cartaZoomImg" height="480" width="350" src="images/reverso.jpg" />
<div id="contenedorContadores" class="contenedorContadores"></div>

		
	</div>
</div>
<div id="sectorInferior">

        <div id="chat">
        </div>
        <form action="chat.php" method="GET">
            <input id="name"  name="name" size="10" value="jugador"  type="hidden">
            <input id="message" name="message" size="10" type="text" class="message">
            <input name="commit" value="Enviar" type="submit">
        </form>

<ul class="tabs">  
    <li><a href="#tab1">Mano Propia</a></li>  
     <li><a href="#rival">Mano Rival</a></li>
     <div class="contadorVidas">	 	
     	<img src="images/flechaArriba.png" id="flechaArriba" class="flechaVida" onclick="sumarVida()"/>
    	 <img src="images/flechaAbajo.png" id="flechaAbajo" class="flechaVida" onclick="restarVida()"/>
    	 <div type="text" id="vidasPropias" class="cantidadVidas">20</div>
	</div>
	<div class="botonesMenu">
		 <input id="proxTurno" type="button" value="Proximo turno" />
		<input id="robarCarta" type="button" value="robar carta" />
		
	</div >
</ul>


   
 <div class="tab_container">  
     <div id="tab1" class="tab_content">  
         
<div id="mano" class="contextmenuarea">

<UL style="DISPLAY: none; " class="vmenu">	
	<LI class=disabled>Exiliar</LI>
	<LI onclick="enviarCementerio()">Enviar al Cementerio</LI>
	<LI onclick="bajar()">Bajar</LI>
	<LI onclick="ponerEncima()">Poner encima de la biblioteca</LI>
	<LI onclick="ponerEnFondo()">Poner al fondo de la biblioteca</LI>
	<LI onclick="mezclarManoEnBiblioteca()">Mezclar mano en la biblioteca</LI>								
</UL>

</div>
	<div id="sectorInferiorIzq">	

	<div id="mazo" class="contextmenuarea">
	
	<UL style="DISPLAY: none; " class="vmenu">	
	<LI onclick="verMazo()">Ver mazo</LI>
	<LI onclick="sacarCarta()">Sacar Carta</LI>
	<LI onclick="verPrimeras(1)">Ver primera</LI>
	<LI onclick="verPrimeras(2)">Ver primeras 2</LI>	
	<LI onclick="verPrimeras(3)">Ver primeras 3</LI>						
</UL>
	
		<img id="imagenMazo" src="images/reverso.jpg" alt="reverso"	class="cartaManoMazo carta" />
	</div>
	
	<div id="cementerio" class="contextmenuarea">
	<UL style="DISPLAY: none; " class="vmenu">
		<LI onclick="verCementerio()">Ver Cementerio</LI>		
		<LI onclick="mezclarCementerioEnBiblioteca()">Mezclar en la biblioteca</LI>		
		
	</UL>
		<img id="imagenCementerio" alt="(vacio)" src="" class="cartaCementerio carta" >
	</div>
	
	

</div>
     </div>  
     <div id="rival" class="tab_content">  
       <div id="manoRival" class="contextmenuarea" >



</div>
	<div id="sectorInferiorIzqRival">	

	<div id="mazoRival" class="contextmenuarea">
	
	<UL style="DISPLAY: none; " class="vmenu">	
	<LI onclick="verMazoRival()">Ver mazo Rival</LI>	
	<LI onclick="verPrimerasRival(1)">Ver primera del mazo rival</LI>
	<LI onclick="verPrimerasRival(2)">Ver primeras 2 del mazo rival</LI>	
	<LI onclick="verPrimerasRival(3)">Ver primeras 3 del mazo rival</LI>						
</UL>
	
		<img id="imagenMazoRival" src="images/reverso.jpg" alt="reverso"	class="cartaManoMazoRival carta" />
	</div>
	
	<div id="cementerioRival" class="contextmenuarea">
	<UL style="DISPLAY: none; " class="vmenu">
		<LI onclick="verCementerioRival()">Ver Cementerio Rival</LI>
	</UL>
		<img id="imagenCementerioRival" alt="(vacio)" src="" class="cartaCementerio carta" >
	</div>
	
	

</div>
 </div>  
 </div> 




</div>
<div id="basic-modal-content" class="contextmenuarea" >				
		
</div>

<!-- preload the images -->
<div style='display:none'>
	<img src='images/x.png' alt='' />
</div>

</body>

</html>