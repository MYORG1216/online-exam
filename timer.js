var timer = 60;
var min=0;
var sec=0;
document.getElementById("time");
function startTimer() {
  debugger;
  min=parseInt(timer/60);
  sec=parseInt(timer%60);
  if(timer < 1) {
    window.location="timeover.html";
  }
  document.getElementById("time").innerHTML = "<b>Time left: </b>"+min.toString()+":"+sec.toString();
  timer--;
  setTimeout(function() {
    startTimer();
  }, 1000);
}
