/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

$(document).ready( function() {
  $('.sub > a').click( function() {
    $('.sub').find('.current').removeClass('current');
    $(this).addClass('current');    
  });
  $('aside > a').click( function() {
    $('aside').find('.current').removeClass('current');
    $(this).addClass('current');    
  });
  $('.ntfy i').click( function() {
    $(this).parent().toggleClass('gt').toggleClass('active');
  });
  
  var x = $('aside').width();
  var margin = '50px 0 0 '+ x +'px';
  var width = $(window).width() - x;
  $('#main').css({
    margin: margin,
    width: width
  });
  
  $(window).resize(function() {
    var x = $('aside').width();
    var margin = '50px 0 0 '+ x +'px';
    var width = $(window).width() - x;
    $('#main').css({
      margin: margin,
      width: width
    });
  });  
});