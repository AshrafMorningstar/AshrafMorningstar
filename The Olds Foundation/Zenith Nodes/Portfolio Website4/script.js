/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

//smooth scrolling
jQuery(document).ready(function($){
$('a').click(function(){	
var hashindex = $(this).attr("href").indexOf('#');
var hreflen = $(this).attr("href").length;
var anchortag = $(this).attr("href").substr(hashindex, hreflen);
$('html, body').animate({
scrollTop: $( anchortag ).offset().top -100
}, 700);
return false;
});
});