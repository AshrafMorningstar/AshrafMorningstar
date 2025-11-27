
let timer = 60;
let score = 0;
let hitRandomNumber = 0;


// this  function crate for makeBubble

function makeBubble () {
  let clutter =" ";
for(let i=1; i<=78; i++){
  let randomNumber = Math.floor( Math.random() *10);
  clutter += `<div class="bubble">${randomNumber}</div>`;
  document.querySelector("#contain-bottom").innerHTML = clutter;
}
}



//  this  function create for timer 
function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);

      // Add Game Over message and Restart button
      document.querySelector("#contain-bottom").innerHTML = `
        <h1 class="game-over">Game Over</h1>
        <button class="restart">Restart</button>`;

      // Delay to ensure DOM update before attaching event listener
      setTimeout(() => {
        const restartBtn = document.querySelector(".restart");
        if (restartBtn) {
          restartBtn.addEventListener("click", function (e) {
            e.preventDefault();
            timer = 60;
            score = 0;
            runTimer(); // Restart the timer function
            makeBubble();

          });
        }
      },0);
    }
  }, 1000);
}

// this function create for Hit
function getNewHit (){
  hitRandomNumber = Math.floor(Math.random()*10);
  document.querySelector("#hitVal").textContent = hitRandomNumber;
}

// this function create for increaseScore
function increaseScore(){
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

// this function create for decreaseScore
function decreaseScore(){
  score -= 10;
  document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#contain-bottom")
.addEventListener("click", function (details){
let clickedNumber= (Number(details.target.textContent));

if(clickedNumber === hitRandomNumber){
  increaseScore();
  makeBubble();
  getNewHit();
}else{
  decreaseScore();
  details.target.style.backgroundColor = "red";
}
});

getNewHit();
runTimer();
makeBubble();

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar