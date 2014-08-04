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
<<<<<<< HEAD
	
=======

>>>>>>> origin/master
	$('#contact-form').submit(function(event){
		$.post('srv.php',$('#contact-form').serialize(),function(data){
			if(data.result == 1){
				alert("Tu mensaje fue enviado con éxito!");
			}else{
				alert("Oops! Ocurrió un error al enviar");
			}

		});
		event.preventDefault();
	});
	
});

