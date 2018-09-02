(function ($) {
	"use strict";

    jQuery(document).ready(function($){     
  
      /*=============================
          magnificPopup-js
        ==============================*/

        
        $(".vide-btn").magnificPopup({
    			type:'video'
    		});
		
       

        $(".scrool-bar-actives").perfectScrollbar({

        }); 

        $(".scrool-blog").perfectScrollbar({

        }); 

        $(".single-event-scroll-bar").perfectScrollbar({

        }); 
        $(".single-event-scroll-bars").perfectScrollbar({

        }); 
    
       
    });
    
    jQuery(window).load(function() {
         jQuery(".preloder-active").fadeOut(5000);
    });




}(jQuery));