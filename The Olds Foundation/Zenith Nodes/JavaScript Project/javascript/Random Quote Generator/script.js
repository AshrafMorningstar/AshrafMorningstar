$(document).ready(function() {
  randomQuote();

  function randomQuote() {
    var quotes = ["\"Partnerships must have loyalty and integrity at their core.\"-Donald Trump",
      "\"Anyone who thinks my story is anywhere near over is sadly mistaken.\"-Donald Trump",
      "\"You know, it really doesn`t matter what (the media) write as long as you`ve got a young and beautiful piece of ass.\"-Donald Trump",
      "\"The only kind of people I want counting my money are little short guys that wear yamakas every day.\"-Donald Trump",
      "\"Everything in life is luck.\"-Donald Trump",
      "\"You have to think anyway, so why not think big?\"-Donald Trump",
      "\"I think apologizing’s a great thing, but you have to be wrong. I will absolutely apologize, sometime in the hopefully distant future, if I’m ever wrong.\"-Donald Trump",
      "\"There’s an old German proverb to the effect that 'fear makes the wolf bigger than he is,' and that is true.\"-Donald Trump",
      "\"And if it can’t be fun, what’s the point?\"-Donald Trump",
      "\"I don't have a racist bone in my body.\"-Donald Trump",
      "\"One of the key problems today is that politics is such a disgrace, good people don't go into government.\"-Donald Trump",
      "\"What separates the winners from the losers is how a person reacts to each new twist of fate.\"-Donald Trump",
      "\"Sometimes by losing a battle you find a new way to win the war.\"-Donald Trump",
      "\"Make the lie big, make it simple, keep saying it, and eventually they will believe it.\"-Adolph Hitler",
      "\"Anyone can deal with victory. Only the mighty can bear defeat.\"-Adolph Hitler",
      "\"The man who has no sense of history, is like a man who has no ears or eyes.\"-Adolph Hitler",
      "\"I do not see why man should not be just as cruel as nature.\"-Adolph Hitler",
      "\"Do not compare yourself to others. If you do so, you are insulting yourself.\"-Adolph Hitler",
      "\"Who says I am not under the special protection of God?\"-Adolph Hitler",
      "\"It is not truth that matters, but victory.\"-Adolph Hitler",
      "\"Sooner will a camel pass through a needle's eye than a great man be 'discovered' by an election.\"-Adolph Hitler",
      "\"Great liars are also great magicians.\"-Adolph Hitler",
      "\"Hate is more lasting than dislike.\"-Adolph Hitler",
      "\"If you tell a big enough lie and tell it frequently enough, it will be believed.\"-Adolph Hitler",
      "\"As a Christian I have no duty to allow myself to be cheated, but I have the duty to be a fighter for truth and justice.\"-Adolph Hitler",
      "\"Humanitarianism is the expression of stupidity and cowardice.\"-Adolph Hitler"
    ];

    var quote = quotes[(Math.floor(Math.random() * quotes.length))];
    quote = quote.split("-");
    $(".quote").text(quote[0]);
    $(".author").text(quote[1]);
    $("#click").attr("href", "Ashraf Morningstar" + quote[0] + '-' + quote[1] + " %23Hitler %23or %23Trump");
    $("button").click(function() {
        quote = quotes[(Math.floor(Math.random() * quotes.length))];
        quote = quote.split("-");
        $("#click").attr("href", "Ashraf Morningstar" + quote[0] + '-' + quote[1] + " %23Hitler %23or %23Trump");
        $(".quote").text(quote[0]);
        $(".author").text(quote[1]);
      })
      //change color of pics when hovering over author
    $("cite").mouseenter(function() {
        if (quote[1] === "Donald Trump") {
          $("#trump").css({
            "filter": "grayscale(0%)",
            "webkit-filter": "grayscale(0%)"
          });
        }
        if (quote[1] === "Adolph Hitler") {
          $("#hitler").css({
            "filter": "grayscale(0%)",
            "webkit-filter": "grayscale(0%)"
          });
        }
      })
      //all images go to b&w when hovered off
    $("cite").mouseleave(function() {
      $("img").css({
        "filter": "grayscale(100%)",
        "webkit-filter": "grayscale(100%)"
      });
    })

  };

  //for mobile, tap to see who said the quote
  $('cite').bind('touchstart touchend', function(e) {
    e.preventDefault();
    $(this).toggleClass('hover_effect');
  });
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar