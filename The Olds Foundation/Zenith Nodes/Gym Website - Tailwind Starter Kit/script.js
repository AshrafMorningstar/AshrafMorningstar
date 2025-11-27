/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

function toggleNavbar(collapseID) {
      document.getElementById(collapseID).classList.toggle('hidden')
      document.getElementById(collapseID).classList.toggle('block')
    }


 AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    })