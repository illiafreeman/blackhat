$(document).ready(function() {

    $('.hambu').click(function(){
        $('.navleft').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#nav-icon4').toggleClass('open');
    });
    $("body").scrollspy({target: "#navigation", offset:130});
    $('.menu').click(function () {
        $.scrollTo($('#scroll_' + $(this).attr('id')), 1000, {axis:'y', offset:-100});
    });


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
})



