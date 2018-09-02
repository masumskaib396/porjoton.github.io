(function ($) {
    'use strict';

        /*=============================
        SLIDER OWL-CAROUSEL
        ==============================*/
        var slider = $('.home-slide');
        slider.owlCarousel({
            items: 1,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            loop: true,
            nav: true,
            dots:true,
            autoplay:false,
            navText: ["<i class='ion ion-ios-arrow-round-back'></i>", "<i class='ion ion-ios-arrow-round-forward'></i>"]
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
        VIDEO BACKGROUND JS
        ==============================*/
        $('.video-bg').YTPlayer({
            fitToBackground: true,
            videoId: 'LSmgKRx5pBo'
        });
       /*=============================
        mobile-menu-active
        ==============================*/
        $('#mobile-menu-active').meanmenu({
          meanScreenWidth: "767",
          meanMenuContainer: '.mobile-menu'
        });

        var windowWidth = $(window).width(),
            isMobile = windowWidth < 768;
        $(window).resize(function () {
            windowWidth = $(window).width();
            isMobile = windowWidth < 768;
            mean_logo();
        });

        //mean menu logo
         function mean_logo(){
            var extraMeanLogo = $('.extraMeanLogo');
            if(extraMeanLogo.length == 0){
                isMobile ? $('.mean-bar').prepend('<a href="index.html" class="extraMeanLogo"><img src="img/logo.png" alt=""></a>') : 'none';
            }
         }
         mean_logo();
        
        /*=============================
        nice select active
        ==============================*/
        $(".booking-form select").niceSelect();
        
        /*=============================
        counterup
        ==============================*/
         $('.count').counterUp({
            delay: 10,
            time: 2000
        });

        /*=============================
        related post carousel
        ==============================*/
        $('.portfolio-carousel').owlCarousel({
                lazyLoad:true,
                loop:true,
                autoplay:false,
                autoplayTimeout:3000,
                dots:false,
                nav:false,
                margin:30,
                autoplayHoverPause:true,
                responsive:{
                0:{
                    items:1,
                    nav:false,
                    margin:0
                },
                768:{
                    items:2,
                    nav:false
                },
                992:{
                    items:3,
                    nav:false
                },
                1200:{
                    items:3
                }
            }
        });

        /*=============================
        testimonial carousel
        ==============================*/
        $('.testimonial-carousel').owlCarousel({
                lazyLoad:true,
                loop:true,
                autoplay:true,
                autoplayTimeout:2000,
                margin:40,
                dots:false,
                nav:false,
                autoplayHoverPause:true,
                responsive:{
                0:{
                    items:1,
                    nav:false,
                },
                768:{
                    items:2,
                    nav:false
                },
                992:{
                    items:3,
                    nav:false
                },
                1200:{
                    items:3
                }
            }
        });

        /*=============================
          isotop filtaring js
         ==============================*/
        $(".portfolio-menu li").on("click",function(){
            $(".portfolio-menu li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr("data-filter");
            $(".portfolio-wrap").isotope({
                filter : selector
            });            
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


        // map script js
        var googleMapSelector=$("#googleMap"),
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
                       "color": "#E4E4E4"
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
                        "color": "#E5E5E5"
                    }, {
                        "visibility": "on"
                    }]
                }]
            };
            //google-map-style-end
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

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
        /* ======= preloder ======= */
        $('#loading').fadeOut();
    });

})(jQuery);