document.addEventListener("DOMContentLoaded", () => {
  const playerName = localStorage.getItem("playerName") || "Player";
  const playerDisplay = document.getElementById("playerDisplay");
  const btnStart = document.querySelector(".btnStart");
  const h2 = document.querySelector("h2");

  playerDisplay.textContent = `Welcome, ${playerName}!`;

  let gameSeq = [];
  let userSeq = [];
  const btns = ["yellow", "red", "purple", "green"];
  let started = false;
  let level = 0;

  // 🔁 Corrected startGame function
  function startSimonGame() {
    if (!started) {
      started = true;
      levelUp();
    }
  }

  document.addEventListener("keypress", startSimonGame);
  btnStart.addEventListener("click", startSimonGame);

  function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = "Level " + level;

    const randIdx = Math.floor(Math.random() * 4);
    const randColor = btns[randIdx];
    const randBtn = document.getElementById(randColor);
    gameSeq.push(randColor);
    gameFlash(randBtn);
  }

  function gameFlash(btn) {
    if (!btn) return;
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
  }

  function userFlash(btn) {
    if (!btn) return;
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 250);
  }

  function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
      if (userSeq.length === gameSeq.length) {
        setTimeout(levelUp, 1000);
      }
    } else {
      h2.innerHTML = `Game Over, ${playerName}! Your score was <b>${level}</b> <br> Press any key to start.`;
      document.body.style.backgroundColor = "red";
      setTimeout(() => (document.body.style.backgroundColor = "white"), 150);
      reset();
    }
  }

  function btnPress() {
    const btn = this;
    const userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    userFlash(btn);
    checkAns(userSeq.length - 1);
  }

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", btnPress);
  });

  function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
  }
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar