const toggle = document.querySelector('#toggleContainer'),
circle = document.querySelector('#toggleCircle'),
lStroke = document.querySelector('#longStroke'),
sStroke = document.querySelector('#shortStroke');

gsap.set(lStroke, { drawSVG: '100% 33%' });
gsap.set('svg', { visibility: 'visible' });

const toggleTl = () => {
  const tl = gsap.timeline({ defaults: { ease: "expo.inOut" }, paused: true });
  tl.to(toggle, 0.5, { rotation: -180, transformOrigin: "50% 50%", x: 70 }, 'animation').
  to(circle, 0.5, { fill: "#7E86F9" }, 'animation')
  // animate stroke
  .to(lStroke, 0.5, { drawSVG: "0% 62%", y: -12, x: 3.5 }, 'animation').
  to(sStroke, 0.5, { drawSVG: "47.5% 100%", y: -12, x: 3.5 }, 'animation')
  // add drop shadow
  .to(circle, 0.25, { attr: { filter: "url(#dropShadow)" }, ease: "power1" }, 'animation+=0.25');
  return tl.timeScale(0.7);
};

const toggleTlControls = toggleTl();

// Determine toggle state
const changeState = () => {
  toggleTlControls.progress() == 1 ? toggleTlControls.reverse() : toggleTlControls.play();
};

toggle.addEventListener('click', () => {
  changeState();
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar