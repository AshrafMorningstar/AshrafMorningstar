$(function() {
  $(document).bind('ready scroll', function() {
	   	var docScroll = $(document).scrollTop();
		  if (docScroll >= 100 & $('html').height() > 768) {
			  if (!$('body').hasClass('sticky')) {
				  $('body').addClass('sticky');
  			}
	  	} else {
		  	$('body').removeClass('sticky');
		  	$('.site-nav').removeAttr('style');
	  	}
    });
  
  $('.site-nav a').click(function(e){
    if(!$(this).hasClass('search-trigger'))
    {
      $('.site-nav a.active').removeClass('active');
      $(this).addClass('active');
    }
    $(this).blur()
    e.preventDefault();
  });
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar