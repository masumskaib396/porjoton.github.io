
(function ($) {
    "use strict";
    
    // document ready function
    // ============================================
    jQuery(document).ready(function ($) {
    
    /*=============================
      MOBILE-MENU-ACTIVE
    ==============================*/
    $('#mobile-menu-active').meanmenu({
          meanScreenWidth: "991",
          meanMenuContainer: '.mobile-menu',

       });

    /*=============================
      SLIDER OWL-CAROUSEL
    ==============================*/
    var slider = $('.home-slider');

    slider.owlCarousel({
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });

    //SLIDER ANIMATONS
    slider.on('translate.owl.carousel', function(){
        var layer = $("[data-animation]");
        layer.each(function() {
            var anim_name = $(this).data('animation');
            $(this).removeClass('animated ' + anim_name).css('opacity', '0');
        });
    });


    $("[data-delay]").each(function () {
        var anim_del = $(this).data('delay');
        $(this).css('animation-delay', anim_del);
    });

    $("[data-duration]").each(function () {
        var anim_dur = $(this).data('duration');
        $(this).css('animation-duration', anim_dur);
    });

    slider.on('translated.owl.carousel', function () {
        var layer = slider.find('.owl-item.active').find("[data-animation]");
        layer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).addClass('animated ' + anim_name).css('opacity', '1');
        });
    });

        $('.count').counterUp({
            delay: 10,
            time: 2000
        });



        $(".testimonial-wrap").owlCarousel({
            items: 2,
            loop: true, 
            autoplay: true,
            margin:60,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,

                },
                600:{
                    items:1,
                    nav:false
                },
                991:{
                    items:2,
                    nav:false,
                    loop:false
                }
            }
        });


       $(".service-carousel").owlCarousel({
            items: 1,
            loop: true, 
            autoplay: true,
            responsiveClass:true,
        });


       

        $(".filter-list li").on("click", function() {
         /*filter-active*/
          var selector = $(this).attr("data-filter");
            $(".c-s").isotope({
                filter: selector
          });
      
        /*color-activ*/
        $('.filter-list li').removeClass('active');
          $(this).addClass('active'); 
        });

          //search bar js active
        $(".search-bar").on('click', function(){
            $(".search-bar-wraper").addClass("active");
        }); 
        
        $(".search-close").on('click', function(){
            $(".search-bar-wraper").removeClass("active");
        });



    jQuery(window).load(function(){
       // jQuery(".preloder-active").fadeOut(5000);
        
    });


        
    });

}(jQuery));
