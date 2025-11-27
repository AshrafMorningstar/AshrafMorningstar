/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

$(function() {
  $(".navbar-nav li a, .navbar-brand").click(function(event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  var $more = "I can do website design, logo design, ";
  $more += "banner design, web site development, wordpress ";
  $more += "website, ecommerce website, real estate website, ";
  $more += "travel web development and much more.";

  var button = $("#more");

  button.on("click", function() {
    var newEl = $("#about-me-text").append($more);
    newEl.hide().fadeIn(600);

    button.remove();
  });

  function increaseLikes() {
    var strLikes = $("#likes").text();
    var numLikes = Number(strLikes) + 1;
    $("#likes").text(numLikes);
  }

  $("#likesButton").on("click", function() {
    increaseLikes();
  });
});