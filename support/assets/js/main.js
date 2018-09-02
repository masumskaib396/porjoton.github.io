(function ($) {
    'use strict';
    // hero slide owl-carousel 
    var slider = $('.hero-slide');

    slider.owlCarousel({
        items: 1,
        loop: true, 
        autoplay: false,
        dots: true,
        nav: true,
        navText: ["<i class='icofont icofont-thin-double-left'></i>", "<i class='icofont icofont-thin-double-right'></i>"]
    });
    // hero slide owl-carousel animations
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

    /*=============================
            Skillbar js
    ==============================*/

         $('#bar1').barfiller({
           barColor:'#2ecc71'
        });
         
        $('#bar2').barfiller({
           barColor:'#2ecc71'
         });

        $('#bar3').barfiller({
           barColor:'#2ecc71'
           });
    

     /*=============================
           Search bar js active
    ==============================*/
        $(".search-bar").on('click', function(){
            $(".search-bar-wraper").addClass("active");
        }); 
        
        $(".search-close").on('click', function(){
            $(".search-bar-wraper").removeClass("active");
        });


    /*=============================
           Smoothscroll js
    ==============================*/
    $(function() {
      $('a.smoth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1000);
        event.preventDefault();
      });
    }); 

    /*=============================
         Sticky menu 
    ==============================*/
       $(window).on('scroll', function () {
             var scroll = $(window).scrollTop();
             if (scroll < 800) {
                 $(".main-header").removeClass("scroll-header");
             } else {
                 $(".main-header").addClass("scroll-header");
             }
      });

     /*======================================
       color-activ
     ========================================*/
       $(".mainmenu li").on("click", function() {
          $('.mainmenu li').removeClass('active');
            $(this).addClass('active'); 
      });
      
      /*======================================
       color-activ
      ========================================*/
            $('.header-top-bar-icon').on('click', function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });




    jQuery(window).load(function(){

        jQuery(".preloder-active").fadeOut(2000);
    });

})(jQuery);