/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
// Display mobile menu
const mobieMenu = () =>{
menu.classList.toggle('is-active')
menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobieMenu)
function myFunction() {
document.getElementById("demo").innerHTML = "Hello World";
}