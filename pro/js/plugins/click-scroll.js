
var sectionArray = [1, 2, 3, 4, 5, 6];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 150;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.topnav li a').removeClass('active');
             $('.topnav li a:link').addClass('inactive');
             $('.topnav li a').eq(index).addClass('active');
             $('.topnav li a:link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.topnav li a').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 0)
    });
    $('.btn_wallet').click(function(e){
        var offsetClick = $('#section_5').offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick - 150
        }, 500)
    });
 
    
});

$(document).ready(function(){
    $('.topnav li a:link').addClass('inactive');
    $('.topnav li a').eq(0).addClass('active');
    $('.topnav li a:link').eq(0).removeClass('inactive');
});
