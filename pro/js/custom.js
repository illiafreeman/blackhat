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
            ['data1 chart', 70],
            ['data2 chart long', 120],
            ['data3', 200],
            ['data4', 550],
        ],
        type : 'donut'
    },
    donut: {
        title: "100,700 PHC Available"
    },
    color: {
        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    },
    legend: {
        padding: 15,
        inset: {
            anchor: 'top-left',
            x: 10,
            y: 0,
            step: undefined
        }
    }
});
$(function() {
    $(".dial").knob({
        'readOnly': true,
        'format': function (value) {
            return value + '%';
        },
        'fgColor': '#28d094'
    });
});
