$.ajax({
	type: "POST",
	url: "php/todosMazos.php",
	success: function(msg){
		
				msg = jQuery.parseJSON(msg);
				
		$.each(msg, function(key, val) {
   			 $('#selectLista').append(
       			 $('<option></option>').val(val.id).html(val.name)
       	     );
		});
	}
});

$("#nuevaPartida").click(function(){
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 5;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	    
	var mazo = $("#selectLista").val();
	window.open ("basico.php?mazo="+mazo+"&partida="+randomstring,"");

});

$("#entrarPartida").click(function(){
	var partida = $("#partidanumero").val();
	var mazo = $("#selectLista").val();
	window.open ("basico.php?mazo="+mazo+"&partida="+partida,"");

});