// Clock
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById('live-clock').textContent = time;
  }
  setInterval(updateClock, 1000);
  
  // 3D Animation
  const dateTimeDiv = document.querySelector('.date-time');
  setInterval(() => {
    const now = new Date();
    const dateTime = now.toLocaleString();
    dateTimeDiv.textContent = dateTime;
    dateTimeDiv.style.transform = `rotateX(${now.getSeconds()}deg) rotateY(${now.getSeconds()}deg)`;
  }, 1000);

// This project was fixed and regulated by Ashraf Morningstar
// https://github.com/AshrafMorningstar

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar