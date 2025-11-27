// for http://signature.io
var cloud = $('.cloud');
var process = $(".cloud-processing");

process.addClass("process");


// to restart the animation click and hold on the cloud
cloud.on("mousedown", function(){
  process.addClass("process");
});

cloud.on("mouseup", function(){
  process.removeClass("process");
});

// TODO
//- settup mobile friendly version

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar