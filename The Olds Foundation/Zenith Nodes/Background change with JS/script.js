/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

var file, 
    render;

document.getElementById("upload_button").addEventListener("click", function(){
  document.getElementById("background_input").click();
}, false);

document.body.addEventListener("drop", function(ev){
  file = ev.dataTransfer.files[0];
  if(!file.type.match("image.*")) {
    alert("This file isn't image or it's unsupported format");
    return;
  }
  reader = new FileReader();
  reader.addEventListener("load", (function(theFile) {
    return function(e) {
      document.body.style.backgroundImage = "url('" + e.target.result + "')";
		};
	})(file), false);
  reader.readAsDataURL(file);
}, false);

document.getElementById("background_input").addEventListener("change", function(ev){
  file = ev.target.files[0];
  if(!file.type.match("image.*")) {
    alert("This file isn't image or it's unsupported format");
    return;
  }
  reader = new FileReader();
  reader.addEventListener("load", (function(theFile) {
    return function(e) {
      document.body.style.backgroundImage = "url('" + e.target.result + "')";
		};
	})(file), false);
  reader.readAsDataURL(file);
}, false);