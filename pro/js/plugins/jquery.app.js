/* Theme Name: Aeshio - Responsive bootsrap 4 Cryptocurrency Landing Page Template
   Author: Zoyothemes
   Version: 1.0.0
   Created: January 2019
   File Description: Main Js file of the template
*/

//initializing
(function($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
        
    });

    function remove_hash_from_url() {
        var uri = window.location.toString();

        if (uri.indexOf("#") > 0) {
            var clean_uri = uri.substring(0,
                uri.indexOf("#"));

            window.history.replaceState({},
                document.title, clean_uri);
        }
    }

    // Smooth Link
    $('.nav-item a, .mouse-down a, .menu').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        //remove_hash_from_url();
    });







            
})(jQuery);