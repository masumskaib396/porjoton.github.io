(function($)
{
    "use strict";
    jQuery(document).ready(function($)
    {
        //adding mesonry
        $('.protfolio-list').masonry(
        {});
        //adding hover effict
        $(".single-protfolio-item").hover(function()
        {
            $(".single-protfolio-item .protfolio-hover h3 ").removeClass("animated slideInUp");
            $(this).find(".protfolio-hover h3").addClass("animated slideInUp");
            $(".single-protfolio-item .protfolio-hover p ").removeClass("animated slideInUp");
            $(this).find(".protfolio-hover p").addClass("animated slideInUp");
        });


        //offcanvas-menu js active
        $('.menu-tigger').on('click', function()
        {
            $('.offcanvas-menu').addClass('active');
            $('.off-canvas-menu-shed').addClass('active');
        });

        $('.menu-close,.off-canvas-menu-shed').on('click', function()
        {
            $('.offcanvas-menu').removeClass('active');
            $('.off-canvas-menu-shed').removeClass('active');
        });

        /*headroom js active*/
        $(".header-area").headroom();
    });
    jQuery(window).load(function() {});
}(jQuery));