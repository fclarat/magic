// Installs live event to show the first vmenu inside a block having
// class=contextmenuarea when block is right clicked.
// http://x.sr.unh.edu/css-menus

(function($) {
	var $m, hideMenu = function(e) {
		if (!$m)
			return true;
		$(document).unbind('mouseup', hideMenu);
		$m.hide();
		$m = null;
	}, installHideMenu = function() {
		$(document).mouseup(hideMenu);
	};
	$(document).bind(
			'contextmenu',
			function(e) {
				if ($m)
					hideMenu();
				var $cma = $(e.target).parents('.contextmenuarea');
				if (e.target.id != "") {
					idCartaSeleccionada = e.target.id;
				} else {
					idCartaSeleccionada = e.target.parentNode.id;
				}
				
				
				$m = ($cma.next().hasClass('vmenu')) ? $cma.next() : $cma
						.find('>.vmenu:first');
				if ($m.length == 0)
					return true;
				var $p = $m.parent(), o = $p.offset();	
				if(e.target.classList.contains('cartaCementerioChica')){
					o.top = e.target.offsetTop + (e.target.height / 2);
					o.left = e.target.offsetLeft + (e.target.width / 2);
				}else{
				o.top = e.pageY ;				
				o.left = e.pageX;
				var dh = $(this).height() - o.top - $m.outerHeight();
				if (dh < 0)
					o.top += dh;
				}
				$m.css(o).show();
				window.setTimeout(installHideMenu, 200);
				return false;
			});
})(jQuery);
