$.ajax({
	type: "POST",
	url: "php/todasCartas.php",
	success: function(msg){
		
				msg = jQuery.parseJSON(msg);
				
		$.each(msg, function(key, val) {
   			 $('#selectLista').append(
       			 $('<option></option>').val(val.id).html(val.name)
       	     );
		});
	}
});

$.ajax({
	type: "POST",
	url: "php/todosSets.php",
	success: function(msg){
		
				msg = jQuery.parseJSON(msg);
				
		$.each(msg, function(key, val) {
   			 $('#selectSet').append(
       			 $('<option></option>').val(val.id).html(val.name)
       	     );
		});
	}
});

function addCarta(){
	 $('#selectDeck').append(
		 $('<option></option>').val( $('#selectLista').val()).html($('#selectLista option:selected').html())
     );
}

$("#addOne").click(function() {
	addCarta();
});
$("#addFour").click(function() {
	addCarta();
	addCarta();
	addCarta();
	addCarta();
});
	
$("#remove").click(function () {
      $('#selectDeck option:selected').remove();
 });
 
 $("#guardarDeck").click(function(){
	var mazo = new Array();
	$('#selectDeck option').each(function(){
		mazo.push($(this).val()); 
	});
	
	$("#haciendo").html("Guardando datos...")
	var nombre = $("#nombre").val();
	//alert($("#nombre").val());
	
	$.ajax({
		type: "POST",
		url: "php/guardarmazo.php",
		data:"mazo="+mazo+"&nombre="+nombre,
		success: function(msg){
			$("#haciendo").html("El mazo se guardo correctamente. Por favor vuevla a la pagina principal") 
		}
	});

 });
 
$("selectLista").change(function () {
	var sets = $("#selectSet").val();
    $.ajax({
	type: "POST",
	url: "php/todasCartas.php",
	data: "set="+sets,
	success: function(msg){
		msg = jQuery.parseJSON(msg);
		$('#selectLista option').remove();
		$.each(msg, function(key, val) {
   			 $('#selectLista').append(
       			 $('<option></option>').val(val.id).html(val.name)
	       	     );
			});
		}
	});
}).change();
 /*
 $.ajax({
	type: "POST",
	url: "php/todasCartas.php",
	data: "set=2",
	success: function(msg){
		
				msg = jQuery.parseJSON(msg);
				
		$.each(msg, function(key, val) {
   			 $('#selectLista').append(
       			 $('<option></option>').val(val.id).html(val.name)
       	     );
		});
	}
});
 
 
 */