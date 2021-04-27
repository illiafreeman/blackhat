$(document).ready(function() {

    $('.hambu').click(function(){
        $('.navleft').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#nav-icon4').toggleClass('open');
    });
    $('.menu').click(function () {
        $('.navleft').removeClass('vis');
        $('body').removeClass('oh');
        $('#nav-icon4').removeClass('open');
    });

/*    $('.menu').click(function () {
        $.scrollTo($('#scroll_' + $(this).attr('id')), 1000, {axis:'y', offset:-100});
    });*/

/*    $(".menu").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();
            var elAttr = $(this).attr('href'),
                offset = ($(this).data('offset') ? $(this).data('offset') : 530);
            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(elAttr).offset().top - offset
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

    });*/


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                infinite: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
  /*  window.location.hash = '';//remove hash text
    window.location.href.replace('#', '');//remove hash
    history.replaceState(null, null, window.location.href);*/

    if ($(window).width() < 1040) {
        $('.menu_parent').click(function(){
            $(this).toggleClass('open');
        });
    }

  /*  $(window).on('resize orientationchange', function() {
        if ($(window).width() < 1000) {
            $('.menu_parent').click(function(){
                $(this).toggleClass('open');
            });
        }
    });*/
    //$("body").scrollspy({target: "#navigation", offset:150});
})



$( window ).on("load", function() {
    setTimeout(function () {
        $('body').removeClass('oh');
        $('.preload').removeClass('vis');
    }, 2000);
});
