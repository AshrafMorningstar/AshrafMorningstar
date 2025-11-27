$(document).ready(function() { 
	
  $("#getNewQuote").on("click", function(){    
    /* request from forismatic API */
		var source= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(source, function(response) {
       /* Change the text inside of #currentQuote*/
      
			var forismaticResponse = JSON.stringify(response);
			/* convert the stringify result into an object */
			var newQuote = JSON.parse(forismaticResponse);
			
			$("#quoteText").html(newQuote.quoteText);
			$("#quoteAuthor").html(newQuote.quoteAuthor);
			$("#shareTwitter").html("<a id='shareTwitter' href='Ashraf Morningstar" + newQuote.quoteLink + "&text=" + newQuote.quoteText + "'" + "target='_blank'><i class='fa fa-twitter'></i></a>");
			$("#shareTumblr").html("<a id='shareTumblr' href='https://www.tumblr.com/share?url=" + newQuote.quoteLink + "'" + "target='_blank'><i class='fa fa-tumblr'></i></a>");
				/* Random color generater code from https://github.com/AshrafMorningstar */
			$("html").css("--main-bg-color", function(){
				var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
				if ( color == '#ffffff'){
					return '#f1f1f1';
				} else return color;
			});
			
    });
  
  });
 
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar