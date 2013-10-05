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
});