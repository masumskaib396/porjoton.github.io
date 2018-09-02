(function ($) {
  "use strict";

    jQuery(document).ready(function($){
        //homapage-slides-carousel-active
        $(".homepage-slides").owlCarousel({
          items:1,
          loop:true,
          nav:true,
          navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

        }); 
       //homepage-carousel-animaticon
        $(".homepage-slides").on(" translate.owl.carousel", function() {
            $(".homepage-slides h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".homepage-slides  .slide-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $(".homepage-slides").on(" translated.owl.carousel", function() {
            $(".homepage-slides h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".homepage-slides  .slide-btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        
        //testimonial-carousel-active
       $(".testimonial-carousel").owlCarousel({
          items:1,
          loop:true,
          nav:true,
          navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

        });  

        //company-logo-carosel-active
        $('.company-logo-carousel').owlCarousel({
            items:6,
            margin:30,
            loop:true,
            nav:false,
            dots:false,
            autoplay:true,
            autoplayTimeout:'2000',
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:4,
                    nav:false
                },
                1000:{
                    items:6,
                    nav:false,
                    loop:true
                }
            }
        })


      


        $(".portfolio-wrap").masonry()




          $(".portfolio-list li").on("click", function() {
         /*filter-active*/
          var selector = $(this).attr("data-filter");
            $(".portfolio-wrap").isotope({
                filter: selector
          });
      
        /*color-activ*/
        $('.portfolio-list li').removeClass('active');
          $(this).addClass('active'); 
        });

        /*light-box*/
        $(".galley-lightbox").magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
        });

        //video-popup-active
       $(".servic-video-icon").magnificPopup({
        type: 'video'
       });
        
        //Responsive-menu
          $("ul#navegations").slicknav({
            prependTo:".responsive-menu-wrap",  


          });
        


    });


    jQuery(window).load(function() {
         jQuery(".preloder-active").fadeOut(5000);
    });


}(jQuery)); 
