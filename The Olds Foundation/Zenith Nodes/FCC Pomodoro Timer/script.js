/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

// tutorial credit for getting me on the right track
//forum.codecall.net/topic/51639-how-to-create-a-countdown-timer-in-javascript/

var initial,
    timer,
    totalSec,
    work = document.getElementById('work'),
    breakT = document.getElementById('breakT');

function reset(){
  clearInterval(createTimer);
  //timer.innerHTML = '25:00';
  createTimer(25*60);
}

// customize countdown
function workCountdown(){
  createTimer(work.value*60);
}
function breakCountdown(){
  createTimer(breakT.value*60);
}

//set up timer
function createTimer(time){
  timer = document.getElementById('timer');
  totalSec = time;
  updateTimer();
  window.setTimeout(tick, 1000);
}

// timer countdown
var tick = setInterval(function (){
  if(totalSec <= 0){
    window.clearInterval(tick);
    // sound alarm
  }
  totalSec--;
  updateTimer();
  window.setInterval(tick);
}, 1000);

function updateTimer(){
  var sec = totalSec;
  var min = Math.floor(sec / 60);
  sec -= min * 60;
  // displaying countdown
  var timeStr = leadingZero(min) + ":" + leadingZero(sec);
  timer.innerHTML = timeStr;
}

function leadingZero(time){
  return (time < 10) ? "0" + time : time;
}





// animate

// play sound