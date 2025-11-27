/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

$(document).ready(function() {
  
  $('body').addClass('js');
  
  var $menu = $('#side-menu'),
    $menulink = $('.side-menu-link'),
    $wrap = $('#wrap');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $wrap.toggleClass('active');
    return false;
  });
});