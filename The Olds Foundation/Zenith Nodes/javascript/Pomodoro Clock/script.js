// Default value for work session and break length.
var workTime = 25 * 60;
var breakTime = 5 * 60;
var t = 0;
var timing = 0;
var buttonClick1 = new Audio("http://soundbible.com/mp3/Click%20On-SoundBible.com-1697535117.mp3");
var buttonClick2 = new Audio("http://soundbible.com/mp3/Button%20Click%20Off-SoundBible.com-1730098776.mp3");
var buttonClick3 = new Audio("http://soundbible.com/mp3/Button%20Click-SoundBible.com-1931397433.mp3");
var tickTock = new Audio("http://soundbible.com/mp3/Tick%20Tock-SoundBible.com-1165545065.mp3");

// for quick test
// var workTime = 10;
// var breakTime = 10;

// flag for changing app styling
var workCompleted = false;

// ********************* Below Time Slider Module *******************
function setWorkTime(workVal){
  workVal = checkTime(workVal);
  workTime = workVal * 60;
  // work time always come first with timing
  timing = workTime;
  // change both the number beside slider and the number in the clock
  $("#workTimeLabel").text(workVal);
  $("#timer").html(workVal + ":00");
}

function setBreakTime(breakVal){
  breakVal = checkTime(breakVal);
  breakTime = breakVal * 60;
  $("#breakTimeLabel").text(breakVal);
}

// ********************* Below Timer Controller Module *******************
$(document).ready(function(){
  $('#pause').toggle();
  // work time always come first with timing
  timing = workTime;
  $("#play").on("click",function(){
    buttonClick1.play();
    // for Display
    workModeEntered();
    // Timing function called
    timer(timing);
  });
  $("#pause").on("click",function(){
    buttonClick2.play();
    // once clicked, disable pause buttong and show play button
    $('#play').toggle();
    $('#pause').toggle();
    // Stop timing
    clearTimeout(t);
  });
  $("#reset").on("click",function(){
    buttonClick3.play();
    // Stop Timing and reset all to initial status
    clearTimeout(t);
    reset();
  });
});

// ********************* Below Timer Function *******************
function timer(time){
  //
  t = setTimeout(timer,1000,time-1);
  var minutes = Math.floor(time/60);
  var seconds = time%60;
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  $("#timer").html(minutes + ":" + seconds);
  timing = timing - 1;

  if (timing === 4){
    tickTock.play();
  }

  if (timing === -1 && workCompleted === false) {
    // work period done, break time started
    clearTimeout(t);
    console.log("It's break time!");
    workCompleted = true;
    // change the app styling
    breakModeEntered();
    // start break time timing right now
    timing = breakTime;
    timer(breakTime);
  } else if (timing === -1 && workCompleted) {
    // one Pomodoro cycle finished, stop timing and reset all the settings.
    console.log("Should be cleared!");
    clearTimeout(t);
    reset();
  }
}

// ********************* Below For App Styling Change *******************
// For work mode styling
function workModeEntered(){
  console.log("work Mode Entered!");
  document.getElementById('workTime').disabled = true;
  document.getElementById('breakTime').disabled = true;
  // once clicked, disable play button and show pause button
  $('#pause').toggle();
  $('#play').toggle();
}

// For break mode styling
function breakModeEntered(){
  $("#background-image").addClass("break-mode-img");
  $("#pomodoro-clock-body").addClass("break-mode-clock-body");
}

// For reset mode
function reset() {
  document.getElementById('workTime').disabled = false;
  document.getElementById('breakTime').disabled = false;

  workTime = Number($("#workTimeLabel").html()) * 60;
  breakTime = Number($("#breakTimeLabel").html()) * 60;
  var initialMinutes = Math.floor(workTime/60);
  var initialSeconds = workTime%60;
  initialMinutes = checkTime(initialMinutes);
  initialSeconds = checkTime(initialSeconds);
  $("#timer").html(initialMinutes + ":" + initialSeconds);

  timing = workTime;
  workCompleted = false;
  // delay the resetVal setting a little bit, make sure clear the setTimeout in timer function.
  setTimeout(function () {
    resetVal = false;
  }, 1000);
  $('#pause').hide();
  $('#play').show();

  $("#background-image").removeClass("break-mode-img");
  $("#pomodoro-clock-body").removeClass("break-mode-clock-body");
}

// ********************* Below For Time Value Check *******************
// Make sure every number on page is two-digits
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar