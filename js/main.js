(function ($) {
    'use strict';
        var slider = $('.hero-area');

      /*=============================
       mobile-menu-active
      ==============================*/
       $('#mobile-menu-active').meanmenu({
          meanScreenWidth: "767",
          meanMenuContainer: '.mobile-menu'


       });
        /*=============================
          SLIDER OWL-CAROUSEL
        ==============================*/
        var slider = $('.home-2-carousel');
        slider.owlCarousel({
            items: 1,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            loop: true,
            nav: true,
            dots:true,
            navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"]
        });
        //SLIDER ANIMATONS
        slider.on('translate.owl.carousel', function() {
            var layer = $("[data-animation]");
            layer.each(function() {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });
        $("[data-delay]").each(function() {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });
        $("[data-duration]").each(function() {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });
        slider.on('translated.owl.carousel', function() {
            var layer = slider.find('.owl-item.active').find("[data-animation]");
            layer.each(function() {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        
        /*=============================
          hero slide owl-carousel
        ==============================*/

        var homeslide = $('.homepage-slide');
            homeslide.owlCarousel({
            items: 1,
            loop: true, 
            autoplay: false,
            dots: true,
            smartSpeed:500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }

        });

        $('i.next').on('click', function() {
            homeslide.trigger('next.owl.carousel');
        })
        
        $('i.previous').on('click', function() {
            homeslide.trigger('prev.owl.carousel', [300]);
        })
        /*=============================
          client logo carousel
        ==============================*/
        $('.all-client-logo').owlCarousel({
                lazyLoad:true,
                loop:true,
                autoplay:true,
                autoplayTimeout:2000,
                margin:90,
                dots:false,
                nav:false,
                autoplayHoverPause:true,
                responsive:{
                0:{
                    items:2,
                    nav:false,
                    margin:30
                },
               575:{
                    items:3,
                    nav:false
                },
                911:{
                    items:4,
                    nav:false
                },
                1200:{
                    items:6
                }
            }
            });

        /*=============================
          tab owl-carousel
        ==============================*/
        $('.tab-carousel').owlCarousel({
            items: 1,
            loop: true, 
            autoplay: false,
            dots: false,
            nav: true,
            navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]
        });
        
        /*=============================
          video section owl-carousel
        ==============================*/
        $('.populer-video-wrap').owlCarousel({
            items: 1,
            loop: true, 
            autoplay: false,
            dots: false,
            nav: true,
            navText: ["<i class='ion-arrow-left-c'></i>", "<i class='ion-arrow-right-c'></i>"]
        });

        /*=============================
          tour list carousel
        ==============================*/
        $('.tour-list-carousel').owlCarousel({
            items: 1,
            loop: true, 
            autoplay: false,
            dots: true,
            nav: false
        });
        /*=============================
          video paly magnofiPopup js
        ==============================*/
        $(".video-btn").magnificPopup({
            type: 'video',

           });
      
          $(".gallery-light-box").magnificPopup({
                type: 'image',
                gallery:{
                    enabled:true
                }
           });

        /*=============================
          isotop filtaring js
         ==============================*/
        $(".photo-gallery-menu li").on("click",function(){
            
            $(".photo-gallery-menu li").removeClass("active");
            $(this).addClass("active");
            
            var selector = $(this).attr("data-filter");
            $(".photo-galler-wrap, .gradent-gallery-wrap, .photo-gallery-3-wrap").isotope({
                filter : selector
            });
            
        });
        $(".photo-galler-wrap, .gradent-gallery-wrap").isotope();
        /*=============================
          tab active class
         ==============================*/
        $(".booking-form-menu li").on("click",function(){
            $(".booking-form-menu li").removeClass("active");
            $(this).addClass("active"); 
        });

        $(".pricing-list li").on("click", function(){
            $(".pricing-list li").removeClass("active");
            $(this).addClass("active")
        })
        /*=============================
          testimonial owl-carousel
        ==============================*/
        $('.testimonial-wrap').owlCarousel({
            loop: true, 
            autoplay: false,
            dots: true,
            nav: false,
            margin: 30,
            autoPlay: true,
            lazyLoad : true,
            autoHeight : true,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                600:{
                    items:2
                },
                1200:{
                    items:4
                }
            }
        });
        /*=============================
          testimonial owl-carousel
        ==============================*/
        $('.about-testimonial').owlCarousel({
            loop: true, 
            autoplay: false,
            dots: true,
            nav: true,
            autoPlay: true,
            autoHeight : true,
            navText: ["<i class='ion-ios-arrow-left'></i>", "<i class='ion-ios-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                768:{
                    items:1,
                    nav:false
                },
                1200:{
                    items:1
                }
            }
        });

        /*=============================
        scrolltop js active
        ==============================*/
        $('.scrollToTop').on('click', function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
        
       /*=============================
         barfiller js active
        ==============================*/
        $('.barfiller').each(function(){
        var $this = $(this);
        $this.waypoint(function(){

            $this.barfiller({
                    barColor:'#0FACEE'
            });
    
        }, { offset: 'bottom-in-view' });
        });

         /*=============================
            datepicker js active
         ==============================*/
  
        $('[data-toggle="datepicker"]').datepicker({
          format: 'dd-mm-yyyy'
        });

        /*=============================
            Convert Image to SVG
         ==============================*/
        $('img.svg').each(function () {
            var $img = $(this),
                imgID = $img.attr('id'),
                imgClass = $img.attr('class'),
                imgURL = $img.attr('src');
            $.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass);
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);
            }, 'xml');
        });

        /* ======= preloder ======= */
            $('#loading').fadeOut();

        // map script js
        var googleMapSelector=$("#googleMap-2"),
            myCenter = new google.maps.LatLng(40.782865,-73.965355);
        function initialize() {
            var mapProp = {
                center: myCenter,
                scrollwheel: false,
                zoom: 11,
                zoomControl: false,
                mapTypeControl: true,
                streetViewControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                
            
                //google-map-style
                styles: [{
                    "featureType": "landscape",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 65
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 40
                    }, {
                        "visibility": "simplified"
                    },{
                       "color": "#FFDA9F"
                    }]
                }, {
                    "featureType": "road.highway",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#ddd"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 30
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "road.local",
                    "stylers": [{
                        "color": "#f4f4f4"
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "administrative.province",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "on"
                    }, 
                    {
                        "color": "#29ABE2"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#A3CDFF"
                    }, {
                        "visibility": "on"
                    }]
                }]
            };
            //google-map-style-end
            var map = new google.maps.Map(document.getElementById("googleMap-2"), mapProp);

            var marker = new google.maps.Marker({
                position: myCenter,
                icon: 'img/maf-icon.png',//goole-map-icon
                 animation: google.maps.Animation.BOUNCE,
            });
            marker.setMap(map);
        }
        if (googleMapSelector.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        } 

    jQuery(window).load(function(){
         
    });

})(jQuery);