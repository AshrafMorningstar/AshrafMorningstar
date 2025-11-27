window.addEventListener("DOMContentLoaded", () => {
const cube = document.querySelector(".cube"),
imageButtons = document.querySelector(".image-buttons");
let cubeImageClass = cube.classList[1];
imageButtons.addEventListener("click", e => {
const targetNode = e.target.nodeName,
targetClass = e.target.className;
if (targetNode === "INPUT" && targetClass !== cubeImageClass) {
console.log(`Show Image: ${targetClass.charAt(11)}`);
cube.classList.replace(cubeImageClass, targetClass);
cubeImageClass = targetClass;
}
});
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar