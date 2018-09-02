jQuery(document).ready(function($) {
	$(".main-slider").owlCarousel({
		loop: true,
		autoplay: true,
		dots:true,
		nav: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:true,
				loop:false
			}
		}
	});
	
	
	// slick nav menu plugin active here
	$("#menu").slicknav({
		prependTo: '.mobile-menu',
		allowParrentLinks:true
		
	});
	
	
	/*
	// slicknav menu custom sub menu ul add class function
	$(".slicknav_icon").on('click', function () {
		$(".slicknav_parent ul").addClass("sub-menu-bg");
		
	});
	
	*/
	
	
	
	$(".author").owlCarousel({
		loop: true,
		autoplay: true,
		dots:true,
		nav: false,
		margin: 30,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:3,
			},
			1000:{
				items:3,
			}
		}
	});
	
	$(".team-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		dots:true,
		nav: false,
		margin: 30,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:3,
			},
			1000:{
				items:3,
			}
		}
	});
	
	$(".company-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		dots:false,
		nav: false,
		margin: 30,
		responsive:{
			0:{
				items:2,
			},
			600:{
				items:3,
			},
			1000:{
				items:5,
			}
		}
	});
	
	
	
	$("#web-design").circleProgress({
		
		value: 0.9,
		size: 270,
		thickness: 2,
		fill: '#0BBBC1'
		
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.counter').html(Math.round(90 * progress) + '<i>%</i>');
  });
  
  	$("#graphic-design").circleProgress({
		
		value: 0.95,
		size: 270,
		thickness: 2,
		fill: '#0BBBC1'
		
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.counter').html(Math.round(95 * progress) + '<i>%</i>');
  });
	
	  	$("#digital-design").circleProgress({
		
		value: 0.84,
		size: 270,
		thickness: 2,
		fill: '#0BBBC1'
		
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.counter').html(Math.round(84 * progress) + '<i>%</i>');
  });
  
  
  $(".portfolio-list-menu li").on('click', function (){
	  
	  $(".portfolio-list-menu li").removeClass("active-2");
	  $(this).addClass("active-2");
	  
	  var filtervalue = $(this).attr("data-filter");
	  $(".portfolio-mesonry-area").isotope({
		  
		  filter: filtervalue,
		   layoutMood: 'masonry',
			masonry: {
		  columnWidth: '.col-md-3'
			}
	  });
	  
  });
  
  
  
  $(".portfolio-mesonry-area").isotope({
	  layoutMood: 'masonry',
	  masonry: {
		  columnWidth: '.col-md-3'
	  }
  });
  
  
  
	  jQuery(window).load(function() {
	         jQuery(".preloder-active").fadeOut(5000);
	    });

	
});