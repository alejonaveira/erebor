$('#jumbo').css('opacity', '0');

jQuery(document).ready(function($) {

	$('.btn-scroll').on('click', function(e) {
		e.preventDefault();
		var to = $(this).attr('href');
		$.scrollTo($(to), {
			axis : 'y',
			duration : 500
		});
		return false;
	});
	
	$(window).stellar();
	
	$('.jumbotron').css('opacity', '1').hide().fadeIn(600);	
	$(document).scroll( function(){
		if($(document).scrollTop() < $(window).height() *0.7) $('#navbar').css('top', '-100px');
		else $('#navbar').css('top', '0');
	});
	
});