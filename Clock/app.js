
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

setInterval(function(){
    var curentDate = new Date();
    var curentHour = curentDate.getHours();
// console.log(curentDate);
// console.log(curentHour);
    hours.innerText = curentDate.getHours();
    minutes.innerText = curentDate.getMinutes();
    seconds.innerText = curentDate.getSeconds();
}, 1000);

var date = document.getElementById("date")
var day = document.getElementById("day")
var weekDay = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Friday" , "Saturday"]

setInterval(function(){
    var now = new Date()
 day.innerText = weekDay[now.getDay()]
},1000)

setInterval(function() {
 var nowNew = new Date()
 date.innerText = nowNew.getDate() + "/" + nowNew.getMonth() + "/" + nowNew.getFullYear()
    
},1000)