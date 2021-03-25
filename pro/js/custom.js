$(document).ready(function() {
    $('.menu-toggle').click(function(){
        $('.navleft').toggleClass('vis');
        $('body').toggleClass('oh');
        $(this).toggleClass('close');
    });
    $('#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
    /*toastr options*/
    toastr.options = {
        closeButton: true,
        "positionClass": "toast-bottom-right",
        "timeOut": "300000"/*too long timeout for test*/
    };
    /*end toastr options*/
})




