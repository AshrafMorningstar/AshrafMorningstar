 

 const quote = document.getElementById('quote');
 const author = document.getElementById('author')
const apiUrl = "http://api.quotable.io/random";

  async function getQuote (url){
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML= data.content;
    author.innerHTML = data.author;

  
  }

  getQuote(apiUrl);

  function tweet(){
    window.open("Ashraf Morningstar" + quote.innerHTML +"      ---- by " + author.innerHTML,"Tweet Window", "width=600, height=300");
  }



// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar