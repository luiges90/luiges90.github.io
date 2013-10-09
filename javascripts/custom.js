$(function(){
	$('.more-btn').click(function(){
		$(this).parent().next().slideToggle();
		$(this).parent().slideUp();
		return false;
	});
	
	$('.changelog-btn').click(function(){
		$(this).parent().next('.changelog-content').fadeIn();
		$('body').one('click', function(){
			$('.changelog-content').fadeOut();
		});
		return false;
	});

	$.get('header.html', '', function(data){
		$('#header').html(data);
	}, 'html');
	
	( function() {
		if (window.CHITIKA === undefined) {
		  window.CHITIKA = { 'units' : [] };
		};
		var unit = {
		  'publisher' : "luiges90",
		  'width' : 550,
		  'height' : 90,
		  'type' : "mpu",
		  'sid' : "Left",
		  'color_site_link' : "FFCC00",
		  'color_title' : "FFCC00",
		  'color_border' : "252525",
		  'color_text' : "B6B6B6",
		  'color_bg' : "252525"
		};
		var placement_id = window.CHITIKA.units.length;
		window.CHITIKA.units.push(unit);
		
		$('#ad-unit').html('<div id="chitikaAdBlock-' + placement_id + '" class="ad-banner"></div>');
		
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = 'http://scripts.chitika.net/getads.js';
		try {
		  document.getElementsByTagName('head')[0].appendChild(s);
		} catch(e) {
		  $('#ad-unit').html(s.outerHTML);
		}
	})();
	
	(function(){
		var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
		$.getScript(gaJsHost + 'google-analytics.com/ga.js', function(a, b, c){
			var pageTracker = _gat._getTracker("UA-44491635-1");
			pageTracker._trackPageview();
		});
	})();
});

