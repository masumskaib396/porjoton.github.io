(function ($) {
	"use strict";

    jQuery(document).ready(function($){  
      
   //mobile menu active
    $('#mobile-menu-active').meanmenu({
          meanScreenWidth: "810",
          meanMenuContainer: '.mobile-menu'


           });
     //Company logo carousel
     $(".company-logo-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        dots:false,
        nav: true,
        navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
        margin: 30,
        responsive: {
          0: {
            items: 1
          },
          280: {
            items: 1
          },
          320: {
            items: 2
          },
          640: {
            items: 3
          },
          960: {
            items: 4
          },
          1200: {
            items: 4
          }
        }
    });


     //search bar

     $(".search-bar").on('click', function(){
       $(".search-bar-wraper").addClass('active');
     });


     $(".search-close").on('click', function(){
       $(".search-bar-wraper").removeClass('active');
     });
      

      //wow js animactins
       new WOW().init();




    });


    jQuery(window).load(function(){
         jQuery(".preloder-active").fadeOut(3000);
    });


}(jQuery));