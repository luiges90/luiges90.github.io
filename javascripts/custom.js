$(function(){
	
	$.get('/header.html', '', function(data){
		$('#header').html(data);
	}, 'html');
	
	$.get('/footer.html', '', function(data){
		$('#footer').html(data);
	}, 'html');
	
	$.get('/share.html', '', function(data){
		$('#share').html(data);
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
		$.getScript(gaJsHost + 'google-analytics.com/ga.js', function(script, status, jqxhr){
			try {
				var pageTracker = _gat._getTracker("UA-44491635-1");
				pageTracker._trackPageview();
			} catch (e) {
				eval(script);
				var pageTracker = _gat._getTracker("UA-44491635-1");
				pageTracker._trackPageview();
			}
		});
	})();
	
	(function(){
		/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
		var disqus_shortname = 'luiges90'; // required: replace example with your forum shortname
		var disqus_identifier = $('h1').text().replace(/\W/gi, '-') || 'id';
		var disqus_title = $('h1').text() || '';

		/* * * DON'T EDIT BELOW THIS LINE * * */
		(function() {
			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
	})();

});

