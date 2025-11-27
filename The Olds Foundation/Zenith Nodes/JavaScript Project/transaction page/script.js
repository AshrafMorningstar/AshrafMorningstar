/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

console.clear(true);

const elApp = document.querySelector('#app');
const elModal = document.querySelector('.modal');
const elAcceptButton = document.querySelector('.button.-accept');
const elCancelButton = document.querySelector('.button.-cancel');
const elButtons = document.querySelector('.buttons');

let state = 'prompt';
setTimeout(()=>{ setState(state) }, 500);

const elViews = document.querySelectorAll('[data-view]');

function setState(nextState) {
  state = nextState;
  
  elModal.dataset.state = state;
  
  const elActives = document.querySelectorAll('[data-active]');
  elActives.forEach(el => delete el.dataset.active );
  
  const elViews = document.querySelectorAll(`[data-view="${state}"]`);
  elViews.forEach(el => el.dataset.active = true );
}


elAcceptButton.addEventListener('click', (e) => {
  e.stopPropagation();
  setState('accepted');
  
  setTimeout(() => {
    setState('received');
  }, 3500);
});

elApp.addEventListener('click', () => {
  setState('prompt')
});

/* ---------------------------------- */


const elPillFill = document.querySelector('.pill .fill');
const length = elPillFill.getTotalLength();
elPillFill.style.setProperty('--length', length);

// DO NOT ASK
elAcceptButton.style.setProperty('--width', elAcceptButton.getBoundingClientRect().width);
elButtons.style.setProperty('--height', elButtons.getBoundingClientRect().height);