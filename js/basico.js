	var nuevaCarta = 'images/mago.jpg';
	var usuario = -1; // Guarda el usuario.
	var partida ="<?php echo $_GET['partida'] ?>";

	//pido el mazo (y le paso cual quiero...-Falta- )

	$.ajax({
			type: "POST",
			url: "pedirmazo.php",
			data:"partida="+partida,
			success: function(msg){
				usuario=msg; //guardo el user
			}
		});

		

	$('.carta').live('mouseover mouseout', function(event) {  //Pongo en el div cartaZoom la imagen por donde el mouse pase, para que la vea en grande...

		if (event.type == 'mouseover') {

			$('#cartaZoom').css('backgroundImage','url(' + $(this).attr('src') +')');

			$('#cartaZoom').css('backgroundRepeat','no-repeat');

			$('#cartaZoom').css('backgroundPosition','top center');

		} else {

			$('#cartaZoom').css('backgroundImage','url( )');

		}

	});

	

	

	$(".cartaMesa").live('dblclick', function() {

		$(this).removeClass('cartaMesa');

		$(this).addClass('cartaMesaGirada');

		$(this).rotateAnimation(90);

	});

	$(".cartaMano").live('dblclick', function() {

		//alert("bajar");

			$(this).removeClass('cartaMano');

			$(this).addClass('cartaMesa');

			$(this).addClass('drag');

			$("#mesa").append($(this));

		});

	$(".cartaMesaGirada").live('dblclick', function() {

		$(this).removeClass('cartaMesaGirada');

		$(this).addClass('cartaMesa');

		$(this).rotateAnimation(0);

	});

	$(".cartaManoMazo").live('dblclick', function() {		

		$.ajax({

			type: "POST",

			url: "pedircarta.php",

			data:"usuario="+usuario+"&partida="+partida,

			success: function(msg){

			nuevaCarta = msg;

			$('<img src="' + nuevaCarta + '" class="cartaMano carta" />').appendTo('#mano');

			}

		});

			

			

		});

	

	var $div = $('#mesa');

	$('.drag').live("drag",

			function(ev, dd) {

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



setTimeout('Actualizar()',10000);


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
						cantidadImg = msg.split("<img");
						for(j=0;j<cantidadImg.length-1;j++)
						{
							msg = msg.replace('\\','');
							msg = msg.replace('\\','');
							msg = msg.replace('\\','');
							msg = msg.replace('\\','');
							msg = msg.replace('\\','');
							msg = msg.replace('\\','');
                       }
					   alert(msg);
			document.getElementById('mesa-contrario').innerHTML = msg;
			$("#mesa-contrario > *").css('top',pedirposicion);
			//alert(usuario);
			}
	});
	//alert([0]);

	setTimeout('Actualizar()',5000);
}

