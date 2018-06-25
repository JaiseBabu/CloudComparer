 $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();  
	
	$('#up').on('click', function(e){
		
		 console.log(" up called ");
    e.preventDefault();
    var target= $(this).get(0).id == 'up' ? $('#down') : $('#up');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1800);
	/*$('#down').css({ 'margin-top': '10px' });*/
}); 
/*	$(".click_btn").animate({ 'zoom': 1.5}, 1500);
	
	$(".click_btn").click(function(){
        
		$(".banner").slideUp();
    });*/
});

$(document).ready(function(){ 
	/*
	$('.panel-collapse').on('show.bs.collapse hidden.bs.collapse', function(e) {	
	        console.log(" panel called ");
			var $panel = $(this).closest('.panel');
			console.log($panel);
			$(this).prev().find('.fa').toggleClass('fa-plus fa-minus');
			$('html,body').animate({
			scrollTop: $panel.offset().top -60
		  }, 100);
		});*/
		
		$('#accordion').on('shown.bs.collapse', function () {
  
  var panel = $(this).find('.in');
  
  $('html, body').animate({
        scrollTop: panel.offset().top -60
  }, 500);
  
  
});
		
	/*	$('#accordion').on('shown.bs.collapse', function (e) {
        var offset = $('.panel.panel-default > .panel-collapse.in').offset();
        if(offset) {
            $('html,body').animate({
                scrollTop: $('.panel-title a').offset().top -60
            }, 500); 
        }
    }); */
	
		
});
/*$(window).on("scroll", function() {
    if($(window).scrollTop() > 60) {
        $(".header").css({"background":"rgba(0,0,0,0.6)"});
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").css({"background":"rgba(0,0,0,0.8)"});
    }
});*/


