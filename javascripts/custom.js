$(function(){
	$('.more-btn').click(function(){
		$(this).parent().next().slideToggle();
		$(this).parent().slideUp();
		return false;
	});
});