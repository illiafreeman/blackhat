$(document).ready(function() {
    $('.loginform .dropdown-item').click(function(){
        var flag = $(this).find('i').attr('class');
        $('.loginform .dropdown-toggle.nav-link i').removeClass().addClass(flag);
    });
    $('.dropdown-language .dropdown-item').click(function(){
        var flag = $(this).find('i').attr('class');
        $('.dropdown-language .dropdown-toggle.nav-link i').removeClass().addClass(flag);
    });
    $('.clear-list').click(function(e){
        (e).stopPropagation();
        $('.media-list a').slideUp();
        $('.helper').slideDown();
        $('.dropdown-notification .nav-link-label .badge').fadeOut();
        $('.dropdown-notification .clear-list').fadeOut();
    });

});

<!--switcher init-->
(function (window, document, $) {
    'use strict';

    // var switchery = new Switchery('.switchery', { size: 'small' });
    var $html = $('html');

    // Switchery
    var i = 0;
    if (Array.prototype.forEach) {

        var elems = $('.switchery');
        $.each(elems, function (key, value) {
            var $size = "", $color = "", $sizeClass = "", $colorCode = "";
            $size = $(this).data('size');
            var $sizes = {
                'lg': "large",
                'sm': "small",
                'xs': "xsmall"
            };
            if ($(this).data('size') !== undefined) {
                $sizeClass = "switchery switchery-" + $sizes[$size];
            }
            else {
                $sizeClass = "switchery";
            }

            $color = $(this).data('color');
            var $colors = {
                'primary': "#967ADC",
                'success': "#37BC9B",
                'danger': "#DA4453",
                'warning': "#F6BB42",
                'info': "#3BAFDA"
            };
            if ($color !== undefined) {
                $colorCode = $colors[$color];
            }
            else {
                $colorCode = "#37BC9B";
            }

            var switchery = new Switchery($(this)[0], {className: $sizeClass, color: $colorCode});
        });
    } else {
        var elems1 = document.querySelectorAll('.switchery');

        for (i = 0; i < elems1.length; i++) {
            var $size = elems1[i].data('size');
            var $color = elems1[i].data('color');
            var switchery = new Switchery(elems1[i], {color: '#37BC9B'});
        }
    }
    /*  Toggle Ends   */

})(window, document, jQuery);
<!--end switcher init-->

$('.node-action__wrap').click(function (e) {

    if($(this).hasClass('vis')){
        $('.node-action__wrap').removeClass('vis');
        $(this).removeClass('vis');
    }else {
        $('.node-action__wrap').removeClass('vis');
        $(this).addClass('vis');
        //console.log('add')
    }
    //(e).stopPropagation();
    //(e).preventDefault();
});
/*$('body').click(function () {
    if($('.node-action__wrap').hasClass('vis')){
        $('.node-action__wrap').removeClass('vis');
    }
});*/

$('.content-header-title').click(function (e) {
    $('.preload').toggleClass('vis');
    $('body').toggleClass('oh');
});






