
var minutes_html = document.getElementById("minutes");
var seconds_html = document.getElementById("seconds");
var miliseconds_html = document.getElementById("miliseconds");
var start_btn = document.getElementById("start_btn");

var min = 0;
var sec = 0;
var ms = 0;

var watch_interval;

function start() {
    watch_interval = setInterval(function() {
        ms++
        if (ms >= 99) {
            sec++
            ms = 0
        }
        if (sec >= 59) {
            min++
            sec = 0
        }

        miliseconds_html.innerText = ms
        minutes_html.innerText = min.toString().padStart(2,'0')
        seconds_html.innerText = sec.toString().padStart(2,'0')
        start_btn.disabled = true

    }, 10);
}


function stop() {
    clearInterval(watch_interval)
    start_btn.disabled = false
}


function reset() {
    clearInterval(watch_interval)
    min = 0
    sec = 0
    ms = 0
    minutes_html.innerText = 0
    seconds_html.innerText = 0
    miliseconds_html.innerText = 0
    start_btn.disabled = false
}