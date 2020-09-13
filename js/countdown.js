var countDate = new Date('Sep 19, 2020 12:45:00').getTime()

var count = setInterval(
    function countDown() {
        var now = new Date().getTime();
        gap = countDate - now;

        var sec = 1000;
        var min = sec * 60;
        var hrs = min * 60;
        var day = hrs * 24;

        var days = Math.floor(gap / (day));
        var hours = Math.floor((gap % (day)) / (hrs));
        var minutes = Math.floor((gap % (hrs)) / (min));
        var seconds = Math.floor((gap % (min)) / (sec));

        if (gap < 0) {
            clearInterval(count);
            document.getElementById('expired').innerText = "Competition has already Ended";
            document.getElementById('day').innerText = "-";
            document.getElementById('hour').innerText = "-";
            document.getElementById('minute').innerText = "-";
            document.getElementById('second').innerText = "-";

        } else {
            document.getElementById('day').innerText = days;
            document.getElementById('hour').innerText = hours;
            document.getElementById('minute').innerText = minutes;
            document.getElementById('second').innerText = seconds;

        }

    }, 1000);
