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

/*$('.content-header-title').click(function (e) {
    $('.preload').toggleClass('vis');
    $('body').toggleClass('oh');
});*/
/*toastr options*/
toastr.options = {
    closeButton: true,
    "positionClass": "toast-bottom-right",
    "timeOut": "3000"/*too long timeout for test*/
};
/*end toastr options*/





