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
       			 
		//document.write(msg);


	}
});

var myOptions = {
    val1 : 'text1',
    val2 : 'text2'
};


	