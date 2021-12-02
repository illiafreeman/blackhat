$(document).ready(function() {
    $('.card_error').click(function (e) {
        $('.preload').toggleClass('vis');
        $('body').toggleClass('oh');
    });

    $('.hambu').click(function(){
        $('.navleft').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#nav-icon4').toggleClass('open');
    });
    /*toastr options*/
    toastr.options = {
        closeButton: true,
        "positionClass": "toast-bottom-right",
        "timeOut": "300000"/*too long timeout for test*/
    };
    /*end toastr options*/
    $('#agree').click(function(){
        if($(this).prop("checked") == true){
            $('.login').removeClass('login_dis')
        }
        else if($(this).prop("checked") == false){
            $('.login').addClass('login_dis')
        }
    });
    $('.product__like').click(function(){

        if($(this).hasClass('add')){
            $(this).removeClass('add');
            toastr.success('Removed from cart');
        }
        else {
            $(this).addClass('add');
            toastr.success('Added to cart');
        }
    });
})

$('#terms_link').click(function () {
    $.scrollTo($('#terms'), 1000, {axis:'y', offset:-140});


});
$('[data-toggle="tooltip"]').tooltip({
    //delay: { "show": 500, "hide": 100000 },
    placement: 'top'
});
$( window ).on("load", function() {
    setTimeout(function () {
        $('body').removeClass('oh');
        $('.preload').removeClass('vis');
    }, 10);
});
