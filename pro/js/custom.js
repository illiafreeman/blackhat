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
})



