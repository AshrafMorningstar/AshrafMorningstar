$(document).ready(function() {
  var counter;
  var startBreak;
  var workTime = parseInt($("#time25").html());
  var breakTime = parseInt($("#time5").html());
  var countdown = parseInt($("#countTime").html());
  var countdownBrake = parseInt($("#countTime").html());
  
    
  //click the START button to initiate the countdown with chosen values
  $("#startBtn").click(function() {
    $("#startBtn").hide();
    $("#resetBtn").html("Stop <i class='fas fa-stop'></i>");
    
        
    counter = setInterval(timer, 1000);
    countdown = workTime*= 60;

    function timer() { //start the countdown function
      countdown -= 1;
      if (countdown === 0) {
        //if session time is up, start the break time
        clearInterval(counter);
        startBreak = setInterval(breakTimer, 1000);
        countdownBrake = breakTime *= 60;
      }
      if (countdown % 60 >= 10) {
        $("#countTime").html(Math.floor(countdown / 60) + ":" + countdown % 60);
      } else {
        $("#countTime").html(Math.floor(countdown / 60) + ":0" + countdown % 60);
      }

      function breakTimer() { //start the break time when session time is over
        $("#sessionTime").html("Break Time:");        
        countdownBrake -= 1;
        if (countdownBrake === 0) { //if break time is over, show the end message
          clearInterval(startBreak);
          $("#sessionTime").html("Time is up!</br>Start new session");
          $("#resetBtn").html("Reset <i class='fas fa-stopwatch'></i>");
        }
        if (countdownBrake % 60 >= 10) {
          $("#countTime").html(Math.floor(countdownBrake / 60) + ":" + countdownBrake % 60);
        } else {
          $("#countTime").html(Math.floor(countdownBrake / 60) + ":0" + countdownBrake % 60);
        }
      } //end of break timer
    } //end of timer 
  }); //end of click START function
  
  

  $("#work25minus").click(function() {
    //click MINUS WORK clock - down to one minute
    if (workTime > 1) {
      workTime -= 1;
      $("#time25").html(workTime);
      $("#countTime").html(workTime);
    }
  });

  $("#work25plus").click(function() {
    //click PLUS WORK clock - up to 60 minutes
    if (workTime < 60) {
      workTime += 1;
      $("#time25").html(workTime);
      $("#countTime").html(workTime);
    }
  });

  $("#break5minus").click(function() {
    //click MINUS BREAK clock - down to one minute
    if (breakTime > 1) {
      breakTime -= 1;
      $("#time5").html(breakTime);
    }
  });

  $("#break5plus").click(function() {
    //click PLUS BREAK clock - up to 15 minutes
    if (breakTime < 15) {
      breakTime += 1;
      $("#time5").html(breakTime);
    }
  });

  
  //reset button works as STOP AND RESET for all timers
  $("#resetBtn").click(function() {    
    workTime = 25;
    breakTime = 5;
    clearInterval(counter);
    clearInterval(startBreak);
    $("#time5").html(breakTime);
    $("#countTime").html(workTime);
    $("#time25").html(workTime);
    $("#startBtn").show();
    $("#resetBtn").html("Reset <i class='fas fa-stopwatch'></i>");
    $("#sessionTime").html("Session Time:");    
  });
  
  
}); //end of document

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar