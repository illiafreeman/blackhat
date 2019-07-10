$(document).ready(function() {
    $('.loginform .dropdown-item').click(function(){
        var flag = $(this).find('i').attr('class');
        $('.loginform .dropdown-toggle.nav-link i').removeClass().addClass(flag);
    });
});










