
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var am_pm = document.getElementById("am/pm")

setInterval(function(){
    var curentDate = new Date();
    var curentHour = curentDate.getHours();
// console.log(curentDate);
// console.log(curentHour);
    hours.innerText = curentDate.getHours().toString().padStart(2, "0");
    minutes.innerText = curentDate.getMinutes().toString().padStart(2, "0");
    seconds.innerText = curentDate.getSeconds().toString().padStart(2, "0");

    if (hours.innerText < 12) {
        am_pm.innerText = "AM"
    } else {
        am_pm.innerText = "PM"
    }
}, 1000);

var date = document.getElementById("date")
var day = document.getElementById("day")
var weekDay = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]

setInterval(function(){
    var now = new Date()
 day.innerText = weekDay[now.getDay()]
},1000)

setInterval(function() {
 var nowNew = new Date()
 date.innerText = nowNew.getDate() + "/" + nowNew.getMonth() + "/" + nowNew.getFullYear()
    
},1000)