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
})

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Mar 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {


                clearInterval(x);
            }
            //seconds
        }, 0)
}());


