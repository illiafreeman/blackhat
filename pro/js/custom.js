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
    }, 1000);
});



const $menu = $('.menu_parent');

$(document).mouseup(e => {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
        && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $menu.removeClass('open');
    }
});
var u = 768,
    h = $(window).width() > u ? "right" : "bottom",
    l = $(window).width() > u,
    t = $(window).width() > u ? "3909 BLKC Available" : ''
    wi = $(window).width() < u ? 260 : '',
    he = $(window).width() < u ? 500 : '',
    pb = $(window).width() < u ? 0 : 40
var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['PIVX-Dev-Fuzz-Q321 (5000.0 BLKC)   ', 270],
            ['WebServers2021_Q3-Q4 (330.0 BLKC)', 320],
            ['Core-Dev-Jul2021 (22500.0 BLKC)', 200],
            ['Doc-Support-Website (1421.0 BLKC)', 550],
            ['WebDevDes-2021-Q3 (5000.0 BLKC)', 550],
            ['4th-MBD-MayOct2021 (1450.0 BLKC)', 550],
            ['LB-MBD-JunNov2021 (600.0 BLKC)', 550],
            ['PIVX-MF-JulDec2021 (2990.0 BLKC)', 550],
            ['Available (3909 BLKC))', 550]
        ],
        type : 'donut',
        color: function (color) {
            return d3.rgb(color).darker(2);
        }
    },
    donut: {
        title: t,
        //width: 300,
        label: {
            show: l
        }
    },
    size: {
        height: he,
        width: wi
    },

    legend: {
        padding: 20,
        inset: {
            anchor: 'top-left',
            x: 10,
            y: 0,
            step: undefined
        },
        position: h
    },
    padding: {
        bottom: pb
    }
});
$(window).resize((function (e) {
    var u = 768,
        h = $(window).width() > u ? "right" : "bottom",
        l = $(window).width() > u;
        t = $(window).width() > u ? "3909 BLKC Available" : '',
        wi = $(window).width() < u ? 260 : '',
        he = $(window).width() < u ? 500 : ''
        pb = $(window).width() < u ? 0 : 40
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ['PIVX-Dev-Fuzz-Q321 (5000.0 BLKC)', 270],
                ['WebServers2021_Q3-Q4 (330.0 BLKC)   ', 320],
                ['Core-Dev-Jul2021 (22500.0 BLKC)', 200],
                ['Doc-Support-Website (1421.0 BLKC)', 550],
                ['WebDevDes-2021-Q3 (5000.0 BLKC)', 550],
                ['4th-MBD-MayOct2021 (1450.0 BLKC)', 550],
                ['LB-MBD-JunNov2021 (600.0 BLKC)', 550],
                ['PIVX-MF-JulDec2021 (2990.0 BLKC)', 550],
                ['Available (3909 BLKC))', 550]
            ],
            type : 'donut',
            color: function (color) {
                return d3.rgb(color).darker(2);
            }
        },
        size: {
            height: he,
            width: wi
        },
        donut: {
            title: t,
            label: {
                show: l
            }
        },
        legend: {
            padding: 20,
            inset: {
                anchor: 'top-left',
                x: 10,
                y: 0,
                step: undefined
            },
            position: h
        },
        padding: {
            bottom: pb
        }
    });
}))
/*$( window ).on("resize", function() {
    console.log('zxc');
    chart.transform('pie');
    chart.load({
        legend: {
            position: 'bottom'
        }
    });
});*/




