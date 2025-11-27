/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

/*========================================
Project Name: PureCalc
Version: 1.0
Author: Kalpesh Singh
Inspired From: dribbble.com/oneMoreArray =======================================*/
function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
}
setInterval(blinker, 500);