
var sectionArray = ['intro', 'features', 'roadmap', 'specs', 'wallet', 'exchanges', 'services'];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 380;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.nav li a').removeClass('active');
             $('.nav li a:link').addClass('inactive');
             $('.nav li a').eq(index).addClass('active');
             $('.nav li a:link').eq(index).removeClass('inactive');
         }
         
     });

    $('.btn_wallet').click(function(e){
        var offsetClick = $('#section_5').offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick - 20
        }, 500)
    });
    $('#section_7_link').click(function(e){
        $('.navleft').removeClass('vis');
        var offsetClick = $('#section_7').offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick - 20
        }, 500)
    });
    
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

$(document).ready(function(){
    $('.nav li a:link').addClass('inactive');
    if ( $(document).scrollTop() <= 100 ){
        $('.topnav li a').eq(0).addClass('active');
    }

    $('.nav li a:link').eq(0).removeClass('inactive');
    remove_hash_from_url();
});
