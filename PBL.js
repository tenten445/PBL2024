var date = new Date();
var dayOfWeek = date.getDay();
var dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];

document.getElementById('dayOfWeek').innerText = dayOfWeekStr;


var sunClasses = JSON.parse(localStorage.getItem('sunClasses')) || ["", "", ""];
var monClasses = JSON.parse(localStorage.getItem('monClasses')) || ["", "", ""];
var tueClasses = JSON.parse(localStorage.getItem('tueClasses')) || ["", "", ""];
var wedClasses = JSON.parse(localStorage.getItem('wedClasses')) || ["", "", ""];
var thuClasses = JSON.parse(localStorage.getItem('thuClasses')) || ["", "", ""];
var friClasses = JSON.parse(localStorage.getItem('friClasses')) || ["", "", ""];
var satClasses = JSON.parse(localStorage.getItem('satClasses')) || ["", "", ""];

function loadClasses(){
document.getElementById('class1').innerText = '1限目: ' + sunClasses[dayOfWeek];
document.getElementById('class2').innerText = '2限目: ' + monClasses[dayOfWeek];
document.getElementById('class3').innerText = '3限目: ' + tueClasses[dayOfWeek];
document.getElementById('class4').innerText = '4限目: ' + wedClasses[dayOfWeek];
document.getElementById('class8').innerText = (dayOfWeek == 0 || dayOfWeek == 6) ? ' ' : '昼休み';
document.getElementById('class5').innerText = '5限目: ' + thuClasses[dayOfWeek];
document.getElementById('class6').innerText = '6限目: ' + friClasses[dayOfWeek];
document.getElementById('class7').innerText = '7限目: ' + satClasses[dayOfWeek];
}
loadClasses();


function next_day() {
   dayOfWeek += 1;

   dayOfWeek = dayOfWeek % 7;
   dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
   document.getElementById('dayOfWeek').innerText = dayOfWeekStr;

   loadClasses()
}

function today(){
   dayOfWeek =date.getDay();

   dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
   document.getElementById('dayOfWeek').innerText = dayOfWeekStr;
   loadClasses()
}