var time=document.getElementsByClassName("timer")
 
 var timings=30;
 var i=0;
     var myInterval = setInterval(Timeout, 1000);
    function Timeout(){
      if((timings*60-i)%60>=10){
        time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":"+`${(timings*60-i)%60}`;
      }
      else{
        time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":0"+`${(timings*60-i)%60}`;
      }
      
     
      
i++;
    }

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar