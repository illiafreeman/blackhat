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
        "showMethod": 'slideDown',
        "hideMethod": 'slideUp',
        "timeOut": "300000",
        "extendedTimeOut": "300000"
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
})

$('#terms_link').click(function () {
    $.scrollTo($('#terms'), 1000, {axis:'y', offset:-140});


});
$('[data-toggle="tooltip"]').tooltip({
    //delay: { "show": 500, "hide": 100000 },
    placement: 'left'
});
$( window ).on("load", function() {
    setTimeout(function () {
        $('body').removeClass('oh');
        $('.preload').removeClass('vis');
    }, 20);
});
