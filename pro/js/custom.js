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
    $('.menu_parent').click(function(){
        $(this).toggleClass('open');
    });
})

$('#terms_link').click(function () {
    $.scrollTo($('#terms'), 1000, {axis:'y', offset:-140});


});

$( window ).on("load", function() {
    setTimeout(function () {
        $('body').removeClass('oh');
        $('.preload').removeClass('vis');
    }, 1);
});



const $menu = $('.menu_parent');

$(document).mouseup(e => {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
        && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $menu.removeClass('open');
    }
});
var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['PRE_ENABLED ', 270],
            ['ENABLED', 320],
            ['REMOVE', 200],
            ['EXPIRED', 550],
            ['VIN_SPENT', 550]
        ],
        type : 'donut'
    },
    donut: {
        title: "100% ENABLED"
    },
    color: {
        pattern: [
            'rgb(121, 115, 62)',
            'rgb(69, 91, 58)',
            'rgb(125, 68, 40)',
            'rgb(102, 33, 33)',
            '#404040']
    },
    legend: {
        padding: 20,
        inset: {
            anchor: 'top-left',
            x: 10,
            y: 0,
            step: undefined
        }
    },
    padding: {
        bottom: 40
    }
});
$(function() {
    $(".dial").knob({
        'readOnly': true,
        'format': function (value) {
            return value + '%';
        },
        'fgColor': '#3a9172'
    });
});
