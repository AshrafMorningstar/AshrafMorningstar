let select = s => document.querySelector(s),
selectAll = s => document.querySelectorAll(s),
mainSVG = select('#mainSVG')
gsap.set('svg', {
visibility: 'visible'
})
gsap.set('#icon', {
transformOrigin: '50% 50%'
})
let state = true;
let doClick = () => {
let tl = gsap.timeline({
defaults: {
ease: 'elastic(0.2, 0.48)',
duration: 0.4
}
});
if(state) {
tl.to('line', {
drawSVG: '0% 100%',
x: 0,
y: -0
})
.to('#icon', {
scale: 1,
y: 5,
fill: '#44484D',
}, 0)
.fromTo('#lens', {
x: 0
}, {
x: -3
}, 0)
} else {
tl.to('line', {
drawSVG: '50% 50%',
x: 25,
y: 19
})
.to('#icon', {
y: 0,
scale: 1.3,
fill: '#555b60'
}, 0)
.fromTo('#lens', {
x: -3
}, {
x: 0,
ease: 'expo',
}, 0)
}
}
mainSVG.onclick = () => {
gsap.killTweensOf(mainSVG.onclick);
state = !state;
doClick();
}
gsap.delayedCall(2, mainSVG.onclick)

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar