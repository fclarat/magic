/*
 * SimpleModal Basic Modal Dialog
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2010 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: basic.js 254 2010-07-23 05:14:44Z emartin24 $
 */

function exiliar(){
	alert("La carta fue enviada al exilio");
}


function volverAMano(){
	
	$('<img src="' + $('#'+ idCartaSeleccionada).attr('src') + '" class="cartaMano carta" id="'+ idCartaSeleccionada +'" />').appendTo('#mano');
	mano.push(idCartaSeleccionada);
	$('#'+ idCartaSeleccionada).remove();	
	
}
function enviarCementerio(){
	cementerio.push($('#'+ idCartaSeleccionada).attr('src'));
	$('#imagenCementerio').attr('src', cementerio[cementerio.length -1]);
	$('#'+ idCartaSeleccionada).remove();	
	
	var j = 0;	
	while (j < mano.length) {	
	
		if (mano[j] == idCartaSeleccionada) {
			mano.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}

	
}

function bajar(){
	$('#'+ idCartaSeleccionada).removeClass('cartaMano');
	$('#'+ idCartaSeleccionada).addClass('cartaMesa');
	$('#'+ idCartaSeleccionada).addClass('drag');
	$('#'+ idCartaSeleccionada ).css({
		top : 300, left : 10
	});
	$("#mesa").append($('#'+ idCartaSeleccionada));
	
	var j = 0;	
	while (j < mano.length) {	
	
		if (mano[j] == idCartaSeleccionada) {
			mano.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}
	
	
}

function ponerEncima(){
	mazo.splice(0,0,$('#'+ idCartaSeleccionada).attr('src'));
	$('#'+ idCartaSeleccionada).remove();
	
	var j = 0;	
	while (j < mano.length) {	
	
		if (mano[j] == idCartaSeleccionada) {
			mano.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}

}

function ponerEnFondo(){
	mazo.push($('#'+ idCartaSeleccionada).attr('src'));
	$('#'+ idCartaSeleccionada).remove();
	
	var j = 0;	
	while (j < mano.length) {	
	
		if (mano[j] == idCartaSeleccionada) {
			mano.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}

}

function mezclarManoEnBiblioteca(){
	
	while (0 < mano.length) {	
		mazo.push( $('#'+ mano[0]).attr('src'));
		$('#'+ mano[0]).remove();
		mano.splice(0, 1);
	}
	
}



/* INICIO cementerio */
function bajarCementerio(){

	var itemABorrar = $('#'+ idCartaSeleccionada).attr('src');	
	$('<img src="' + $('#'+ idCartaSeleccionada).attr('src') + '" class="cartaMesa drag carta" id="'+ nextId +'" />').appendTo('#mesa');
	$('#'+ idCartaSeleccionada).remove();
	nextId++;
	
	var j = 0;
	
	while (j < cementerio.length) {	
	
		if (cementerio[j] == itemABorrar) {
			cementerio.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}
	if(cementerio.length > 0){
		$('#imagenCementerio').attr('src', cementerio[cementerio.length -1]);
	}else{
		$('#imagenCementerio').attr('src', "");
	}
	
}

function volverManoCementerio(){

	var itemABorrar = $('#'+ idCartaSeleccionada).attr('src');	
	$('<img src="' + $('#'+ idCartaSeleccionada).attr('src') + '" class="cartaMano carta" id="'+ nextId +'" />').appendTo('#mano');
	$('#'+ idCartaSeleccionada).remove();
	mano.push(nextId);
	nextId++;
	
	var j = 0;
	
	while (j < cementerio.length) {	
	
		if (cementerio[j] == itemABorrar) {
			cementerio.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}
	if(cementerio.length > 0){
		$('#imagenCementerio').attr('src', cementerio[cementerio.length -1]);
	}else{
		$('#imagenCementerio').attr('src', "");
	}
	
}

function ponerEncimaCementerio(){
	var itemABorrar = $('#'+ idCartaSeleccionada).attr('src');	
	mazo.splice(0,0,$('#'+ idCartaSeleccionada).attr('src'));
	$('#'+ idCartaSeleccionada).remove();
	
	var j = 0;
	
	while (j < cementerio.length) {	
	
		if (cementerio[j] == itemABorrar) {
			cementerio.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}
	if(cementerio.length > 0){
		$('#imagenCementerio').attr('src', cementerio[cementerio.length -1]);
	}else{
		$('#imagenCementerio').attr('src', "");
	}
	
}

function ponerEnFondoCementerio(){
	var itemABorrar = $('#'+ idCartaSeleccionada).attr('src');
	mazo.push($('#'+ idCartaSeleccionada).attr('src'));
	$('#'+ idCartaSeleccionada).remove();
	
	var j = 0;
	
	while (j < cementerio.length) {	
	
		if (cementerio[j] == itemABorrar) {
			cementerio.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}
	if(cementerio.length > 0){
		$('#imagenCementerio').attr('src', cementerio[cementerio.length -1]);
	}else{
		$('#imagenCementerio').attr('src', "");
	}
	
}

function mezclarCementerioEnBiblioteca(){
		
	while (0 < cementerio.length) {	
		mazo.push(cementerio[0]);
		cementerio.splice(0, 1);
	}
	$('#imagenCementerio').attr('src', "");
}

function verCementerio(){
	$('#basic-modal-content').html('');
	$.each(cementerio, function(itemNo, carta) {
		$('#basic-modal-content').append('<img src="' + carta + '" class="carta cartaCementerioChica" id="cem' + nextCementerioId + '" />');	
		nextCementerioId++;
	});
	nextCementerioId = 1;
	;
	// agrego el menu contextual
	$('#basic-modal-content').append('<UL style="DISPLAY: none; " class="vmenu"><LI class=disabled>Exiliar</LI>	<LI onclick="volverManoCementerio()">Volver a la mano</LI><LI onclick="bajarCementerio()">Bajar</LI><LI onclick="ponerEncimaCementerio()">Poner encima de la biblioteca</LI><LI onclick="ponerEnFondoCementerio()">Poner al fondo de la biblioteca</LI></UL>');
					

	
	$('#basic-modal-content').modal();

	return false;
}

/* FIN cementerio */
	


/* Inicio funciones mazo */


function verMazo(){
	$('#basic-modal-content').html('');
	$.each(mazo, function(itemNo, carta) {
		$('#basic-modal-content').append('<img src="' + carta + '" class="carta cartaCementerioChica" id="mazo' + nextCementerioId + '" />');	
		nextCementerioId++;
	});
	nextCementerioId = 1;
	;
	// agrego el menu contextual
	$('#basic-modal-content').append('<UL style="DISPLAY: none; " class="vmenu"><LI class=disabled>Exiliar</LI>	<LI onclick="enviarAManoMazo()">Mandar a la mano</LI><LI onclick="bajarMazo()">Bajar</LI><LI onclick="enviarCementerioMazo()">Enviar al cementerio</LI></UL>');
					

	
	$('#basic-modal-content').modal();

	return false;
}	

function verPrimeras(cantidad){
	$('#basic-modal-content').html('');
	var contador = 1;
	$.each(mazo, function(itemNo, carta) {
		$('#basic-modal-content').append('<img src="' + carta + '" class="carta cartaCementerioChica" id="mazo' + nextCementerioId + '" />');	
		nextCementerioId++;
		if(cantidad == contador){
			return false;
		}
		contador++;
	});
	nextCementerioId = 1;
	;
	// agrego el menu contextual
	var menuContextual = '<UL style="DISPLAY: none; " class="vmenu"><LI class=disabled>Exiliar</LI>	<LI onclick="enviarAManoMazo()">Mandar a la mano</LI><LI onclick="bajarMazo()">Bajar</LI><LI onclick="enviarCementerioMazo()">Enviar al cementerio</LI>';
	
	if(cantidad > 1){
		menuContextual += '<LI onclick="ponerPosicion(0)">Poner primera</LI>';
		menuContextual += '<LI onclick="ponerPosicion(1)">Poner segunda</LI>';
	}
	
	if (cantidad == 3){	
		menuContextual += '<LI onclick="ponerPosicion(2)">Poner tercera</LI>';
	}
	
	
	
	menuContextual += '</UL>';
	
	$('#basic-modal-content').append(menuContextual);
					

	
	$('#basic-modal-content').modal();

	return false;
}	

function verPrimerasRival(cantidad){
	$('#basic-modal-content').html('');
	var contador = 1;
	$.each(mazoRival, function(itemNo, carta) {
		$('#basic-modal-content').append('<img src="' + carta + '" class="carta cartaCementerioChica" id="mazoRival' + nextCementerioId + '" />');	
		nextCementerioId++;
		if(cantidad == contador){
			return false;
		}
		contador++;
	});
	nextCementerioId = 1;
	;
	// agrego el menu contextual
	var menuContextual = '<UL style="DISPLAY: none; " class="vmenu"><LI onclick="marcarCarta()">Marcar carta</LI>';
	
	if(cantidad > 1){
		menuContextual += '<LI onclick="ponerPosicionRival(0)">Poner primera</LI>';
		menuContextual += '<LI onclick="ponerPosicionRival(1)">Poner segunda</LI>';
	}
	
	if (cantidad == 3){	
		menuContextual += '<LI onclick="ponerPosicionRival(2)">Poner tercera</LI>';
	}
	
	
	
	menuContextual += '</UL>';
	
	$('#basic-modal-content').append(menuContextual);
					

	
	$('#basic-modal-content').modal();

	return false;
}

function enviarAManoMazo(){

	var itemABorrar = $('#'+ idCartaSeleccionada).attr('src');	
	$('<img src="' + $('#'+ idCartaSeleccionada).attr('src') + '" class="cartaMano carta" id="'+ nextId +'" />').appendTo('#mano');
	$('#'+ idCartaSeleccionada).remove();
	mano.push(nextId);
	nextId++;
	
	var j = 0;
	
	while (j < mazo.length) {	
	
		if (mazo[j] == itemABorrar) {
			mazo.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}
	if(mazo.length < 0){
		$('#imagenMazo').attr('src', "");
	}
	
}

function bajarMazo(){

	var itemABorrar = $('#'+ idCartaSeleccionada).attr('src');	
	$('<img src="' + $('#'+ idCartaSeleccionada).attr('src') + '" class="cartaMesa drag carta" id="'+ nextId +'" />').appendTo('#mesa');
	$('#'+ idCartaSeleccionada).remove();
	nextId++;
	
	var j = 0;
	
	while (j < mazo.length) {	
	
		if (mazo[j] == itemABorrar) {
			mazo.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}
	if(mazo.length < 0){
		$('#imagenMazo').attr('src', "");
	}
	
}


function sacarCarta(){
	nuevaCarta = mazo[0];	
	mazo.splice(0, 1);
	$('<img src="' + nuevaCarta + '" class="cartaMano carta" id="' + nextId + '" />').appendTo('#mano');
	mano.push(nextId);
	nextId++;
	
}	

function enviarCementerioMazo(){
	cementerio.push($('#'+ idCartaSeleccionada).attr('src'));
	$('#imagenCementerio').attr('src', cementerio[cementerio.length -1]);
	
	var itemABorrar = $('#'+ idCartaSeleccionada).attr('src');	
	$('#'+ idCartaSeleccionada).remove();	
	
	var j = 0;
	
	while (j < mazo.length) {	
	
		if (mazo[j] == itemABorrar) {
			mazo.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}
	if(mazo.length < 0){
		$('#imagenMazo').attr('src', "");
	}
	
	
}
function ponerPosicion(posicionNueva){
	//Primero la borro de su posicion original
	var itemABorrar = $('#'+ idCartaSeleccionada).attr('src');	
	var j = 0;
	
	while (j < mazo.length) {	
	
		if (mazo[j] == itemABorrar) {
			mazo.splice(j, 1);
			break;
		} else {
			 j++;
	 	}
	
	}
	//La agrego en la posicion solicitada, siendo 0 la primera
	mazo.splice(posicionNueva, 0, itemABorrar);
	
}

function agregarMas1Mas1(){	
	var contenedor = $('#contenedorContadores'+ idCartaSeleccionada);
	if(contenedor.length <1){		
		var nuevaImagen = $('<div class="contenedorContadores" style="display:none;" id="contenedorContadores' + idCartaSeleccionada + '"><p id="titcontmas11' +idCartaSeleccionada + '" class="titcont">1</p><img id="contmas11' + idCartaSeleccionada + '" src="images/mas1mas1.png"  class="contador" mas11="1"/></div>'); 
		
	$('#mesa').append(nuevaImagen);
	}else{
		var imgDetalle = $('#contmas11'+ idCartaSeleccionada);
		var contadores = imgDetalle.attr('mas11');
		contadores++;
		imgDetalle.attr('mas11', contadores);		
		$('#titcontmas11' + idCartaSeleccionada).html(contadores);
	}
}
function agregarContador(nombre){	
	var contenedor = $('#contenedorContadores'+ idCartaSeleccionada);
	if(contenedor.length <1){		
		var nuevaImagen = $('<div class="contenedorContadores" style="display:none;" id="contenedorContadores' + idCartaSeleccionada + '"><div class="contenedorContadoresInterno"><p id="titcont' + nombre + idCartaSeleccionada + '" class="titcont">1</p><img id="cont' + nombre + idCartaSeleccionada + '" src="images/' + nombre + '.png"  class="contador" '+nombre+'="1"/></div></div>'); 
		
	$('#mesa').append(nuevaImagen);
	}else{
		var imgDetalle = $('#cont'+ nombre + idCartaSeleccionada);
		var contadores ;
		if(imgDetalle.length < 1){			
			contenedor.append($('<div class="contenedorContadoresInterno"><p id="titcont' + nombre + idCartaSeleccionada + '" class="titcont">1</p><img id="cont' + nombre + idCartaSeleccionada + '" src="images/' + nombre + '.png"  class="contador" '+nombre+'="1"/></div>'));
			imgDetalle = $('#cont'+ nombre + idCartaSeleccionada);
			contadores = 0;
		}else{
			contadores = imgDetalle.attr(nombre);
		}		
		contadores++;
		imgDetalle.attr(nombre, contadores);		
		$('#titcont'+ nombre + idCartaSeleccionada).html(contadores);
	}
}


/* Efectos sobre cartas rivales*/

function marcarCarta(){
	alert("Marcar carta");	
}

function ponerPosicionRival(posicion){
	alert("ponerPosicionRival");
}

function verCementerioRival(){
	alert("verCementerioRival");
}

function cargarManoRival(){
	$('#manoRival').html('');
	$.each(manoRival, function(itemNo, carta) {
		$('#manoRival').append('<img src="' + carta + '" class="carta cartaManoRival" id="manoRival' + nextRivalId + '" />');	
		nextRivalId++;
	});
	nextRivalId = 1;
	$('#manoRival').append('<UL style="DISPLAY: none; " class="vmenu"><LI onclick="marcarCarta()">Marcar</LI></UL>');
}

/* Efectos sobre cartas rivales*/


function sumarVida(){
	vidaPropia++;
	$("#vidasPropias").html(vidaPropia);
}
function restarVida(){
	vidaPropia--;
	$("#vidasPropias").html(vidaPropia);
}
/* Funcion para hacer un shuffle de un array*/

Array.prototype.shuffle = function() {
    for ( var i = this.length-1; i > 0; i-- ) {
        var j = Math.floor( i * Math.random() );
        var tmp = this[ j ];
        this[ j ] = this[ i ];
        this[ i ] = tmp;
    }
    return this;
}
/* fin del shuffle */

/* VARIABLES GLOBALES*/

var idCartaSeleccionada;
var nuevaCarta = 'images/112.jpg';
var mazo = [];
var mazoRival = ['images/114.jpg','images/11.jpg','images/113.jpg','images/116.jpg','images/112.jpg','images/12.jpg','images/11.jpg','images/113.jpg','images/112.jpg','images/114.jpg','images/115.jpg','images/116.jpg','images/111.jpg','images/13.jpg','images/12.jpg',];
var cementerio = [];
var cementerioRival = ['images/114.jpg','images/11.jpg','images/113.jpg','images/116.jpg'];
var mano = [];
var manoRival = ['images/reverso.jpg','images/reverso.jpg','images/reverso.jpg','images/reverso.jpg','images/reverso.jpg','images/reverso.jpg','images/reverso.jpg'];
var nextId = 1;
var nextRivalId = 1;
var nextCementerioId = 1;
var vidaPropia = 20;



/* VARIABLES GLOBALES*/


/*  FUNCIONES DE JQuery */


/* SETeo DE VARIABLES INICIALES DEL SERVER (mazo, usuaruio) */

$.ajax({
	type: "POST",
	url: "php/pedirmazo.php",
	data:"mazo="+mazojugador+"&partida="+partida,
	success: function(msg){
		var splitArray = msg.split(",");
		mazo=splitArray;
		mazo = mazo.shuffle();
	
	}

});

$.ajax({
	type: "POST",
	url: "php/usuario.php",
	data:"partida="+partida,
	success: function(msg){
		usuario=msg;
	}

});

/* fin SETeo DE VARIABLES INICIALES DEL SERVER*/

/* ACTUALIZAR TABLERO */

setTimeout('Actualizar()',5000);
function Actualizar() 
{

	function pedirposicion()
	{
		var pos = $(this).css('top');
		if (pos != "auto")
		{
			pos = pos.substring(0, (pos.length)-2);
		}
		return pos - 250;
	}
	
	$.ajax({
			type: "POST",
			url: "actualizartablero.php",
			data: "tiene="+document.getElementById('mesa').innerHTML+"&usuario="+usuario+"&partida="+partida,
			success: function(msg){
						/*cantidadImg = msg.split("<img");
						for(j=0;j<cantidadImg.length-1;j++)
						{
							msg = msg.replace('\\','');
							msg = msg.replace('\\','');
							msg = msg.replace('\\','');
							msg = msg.replace('\\','');
							msg = msg.replace('\\','');
							msg = msg.replace('\\','');
                       }*/
				msg = msg.replace(/\\/gi, "")
						
			document.getElementById('mesa-contrario').innerHTML = msg;
			$("#mesa-contrario > *").css('top',pedirposicion);

			}
	});
	
	setTimeout('Actualizar()',900);
}

/* FIN ACTUALIZAR TABLERO */

jQuery(function ($) {

	
	
	$('.carta').live('mouseover mouseout', function(event) {  //Pongo en el div cartaZoom la imagen por donde el mouse pase, para que la vea en grande...
		if (event.type == 'mouseover') {
			/*
			$('#cartaZoom').css('backgroundImage','url(' + $(this).attr('src') +')');
			$('#cartaZoom').css('backgroundRepeat','no-repeat');
			$('#cartaZoom').css('backgroundPosition','top center');
			*/
			$('#cartaZoomImg').attr("src",$(this).attr('src'));
			$('#contenedorContadores').html($('#contenedorContadores'+ $(this).attr('id')).html());
			$('#contenedorContadores').css({display: 'block'});
		} else {
			/*
			$('#cartaZoom').css('backgroundImage','url( )');
			*/
			$('#cartaZoomImg').attr("src","images/reverso.jpg");
			$('#contenedorContadores').css({display: 'none'});
		}
	});
	
	$(".cartaMesa").live('dblclick', function() { //Girar
		var id = $(this).attr('id');
		var offset =  $(this).offset();		
		var src = $(this).attr('src');
		$(this).removeClass('cartaMesa');
		$(this).addClass('cartaMesaGirada');
		$(this).rotateAnimation(90);
		$('#' + id).css({
			top : offset.top, 
			left : offset.left
		});
		$('#' + id).attr('src',src);
		
	});
	$(".cartaMano").live('dblclick', function() { //Bajar
		var offset = $("#mesa").offset();
			$(this).removeClass('cartaMano');
			$(this).addClass('cartaMesa');
			$(this).addClass('drag');
			$(this).css({				
				top : 300,
				left :  10
			});
			$("#mesa").append($(this));
			var j = 0;	
			while (j < mano.length) {	
			
				if ( mano[j] == $(this).attr('id')) {
					mano.splice(j, 1);
					break;
				} else {
					 j++;
			 	}
			
			}
		});
	$(".cartaMesaGirada").live('dblclick', function() {	//Enderezar
		$(this).removeClass('cartaMesaGirada');
		$(this).addClass('cartaMesa');
		$(this).rotateAnimation(0);
	});
$("#proxTurno").click(function()
{		
		$(".cartaMesaGirada").rotateAnimation(0);
	   	$(".cartaMesaGirada").addClass('cartaMesa');
		$(".cartaMesaGirada").removeClass('cartaMesaGirada');
		sacarCarta();
});
$("#robarCarta").click(function()
{
	sacarCarta();
});
	$(".cartaManoMazo").live('dblclick', function() {	//Sacar Carta
		sacarCarta();
		});
	
	
	var $div = $('#mesa');//para limitar la movilidad de las cartas
	
	$('.drag').live("drag",	function(ev, dd) {//Drag and drop
				dd.limit = $div.offset();
				dd.limit.bottom = dd.limit.top + $div.outerHeight()
						- $(this).outerHeight();
				dd.limit.right = dd.limit.left + $div.outerWidth()
						- $(this).outerWidth();
			}).live("drag",
			function(ev, dd) {
				$(this ).css({
							top : Math.min(dd.limit.bottom, Math.max(
									dd.limit.top, dd.offsetY)),
							left : Math.min(dd.limit.right, Math.max(
									dd.limit.left, dd.offsetX))
						});
			});
	
	$(".tab_content").hide();
	$("ul.tabs li:first").addClass("active").show();
	$(".tab_content:first").show();

	$("ul.tabs li").click(function()
       {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();

		var activeTab = $(this).find("a").attr("href");
		
		if(activeTab == '#rival'){
			cargarManoRival();
		}
		
		
		$(activeTab).fadeIn();
		return false;
	});
	
	
	
});


/* FIN funciones mazo */

