/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

function timer(){
	var StartTime= new Date();
				function DisplayTime(){
					var CurrentTime= new Date();
					var TimeDiff=CurrentTime.getTime()-StartTime.getTime();
					TimeDiff=Math.floor(TimeDiff/1000);
			        var ShowTime=(TimeDiff<10)?'0:0':'0:';
				    document.getElementById('timerwatch').innerHTML=ShowTime+TimeDiff;
				}
				var StopTime=setInterval(DisplayTime, 1000);
				function StopUpdatingTime(){
					clearInterval(StopTime);
					document.getElementById("inputbox").disabled = true;
				}
				setTimeout(StopUpdatingTime, 60000);
}
function speedCal(){
		function Speed(){
		var inputText=document.getElementById("inputbox").value;
		inputText = inputText.replace(/\s\s+/g, ' ');
		inputText=inputText.trim();
		var arr=inputText.split(" ");
		document.getElementById('timerwatch').innerHTML="Your Speed is "+arr.length+" Words/S.";
		}
    	setTimeout(Speed, 61000);
}