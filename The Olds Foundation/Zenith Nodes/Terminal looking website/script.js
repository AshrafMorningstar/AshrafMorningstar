/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

/*MY FIRST JAVASCRIPT PROJECT not changing it if it works it works right :D*/
var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}
$(function () {

  showText("#msg", "Terminal", 0, 100);
  showText("#msg1", "My portfolio, type help", 0, 100);
});
 $(document).ready(function () {
            setTimeout("$('#fname').focus();", 500);
});

/*var answered = document.getElementById('fname').value;
alert("ÿou answered" + answered);
var answer = function () {
    switch(answered){
        case "help":
          alert("typed help!");
        break;
        default:
          alert("urhm");
    }
}*/

function checkforblank(){
  if (document.getElementById('fname').value == "help") {
    
    showText("#msg2", 'commands:', 0, 100);
    showText("#msg3", '#1 MAIN, back to MAIN menu', 0, 100);
    showText("#msg4", '#2 PORT, nav to PORT page', 0, 100);
    showText("#msg5", '#3 ABOUT, nav to ABOUT page', 0, 100);
    showText("#msg6", '#4 CONT, nav to CONTACT page', 0, 100);
    showText("#msg7", '#5 STOP, stop all', 0, 100);
    return false; 
  }
  else{
    alert('error: "help", dont have space at the end');
    return false;
  }

}

var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:0; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
$(function() {
    $('textarea').on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
});
setTimeout(function(){
   $("textarea").text("LOADING TERMINAL");
},500); // 3 second delay

setTimeout(function(){
   $("textarea").text("STAND BY");
},2500); // 3 second delay


setTimeout(function(){
   $("textarea").text("SUCCESSFUL");
},5000); // 3 second delay


setTimeout(function(){
   $("textarea").text("");
},7000); // 3 second delay