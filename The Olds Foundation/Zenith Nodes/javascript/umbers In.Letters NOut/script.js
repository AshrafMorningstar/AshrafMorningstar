/*jslint plusplus :true*/
/*global console, alert*/
var text = document.getElementById('text'),
    Numbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fivteen"],
    y,
    z,
    y1,
    z1,
    h1,
    h,
    hunder,
    ty,
    i;

window.onkeyup = function (x) {
    'use strict';
    x = document.getElementById('turn').value;
    y = Numbers[x];

    if (x > 0 && x < 16) {
        text.textContent = y;
    } else if (x >= 16 && x < 20) {
        y = x.split("");
        z = y[1];
        z = Numbers[z];
        text.textContent = z + "teen";

    } else if (x >= 20 && x < 100) {
        y = x.split("");
        z = y[0];
        y = y[1];
        z = Numbers[z];
        y = Numbers[y];
        if (x >= 20 && x < 30) {
            text.textContent = z.replace("o", "enty ") + (y);
        } else if (x >= 30 && x < 40) {
            text.textContent = z.replace("ree", "irty ") + (y);
        } else if (x >= 50 && x < 60) {
            text.textContent = z.replace("ve", "fty ") + (y);
        } else {
            text.textContent = z + "ty " + (y);
        }

    } else if (x >= 100 && x < 1000) {
        y = x.split("");
        h = y[0];
        z = y[1];
        y = y[2];
        h1 = Numbers[h];
        z1 = Numbers[z];
        y1 = Numbers[y];
        hunder = " hundred and ";
        ty = "ty ";
        if (z === "0" && y === "0") {
            z1 = " ";
            y1 = " ";
            ty = " ";
            hunder = hunder.replace("and", " ");
            text.textContent = h1 + hunder + (z1) + ty + (y1);
        } else if (z === "0") {

            text.textContent = h1 + hunder + y1;

        } else if (z === "1") {
            if (y >= 0 && y < 6) {
                y1 = Numbers[+y + 10];
                text.textContent = h1 + hunder + y1;
            } else {
                text.textContent = h1 + hunder + y1 + "teen";
            }

        } else {
            if (z >= 2 && z < 3) {
                text.textContent = h1 + hunder + (z1.replace("o", "enty ")) + (y1);
            } else if (z >= 3 && z < 4) {
                text.textContent = h1 + hunder + (z1.replace("ree", "irty ")) + (y1);
            } else if (z >= 5 && z < 6) {
                text.textContent = h1 + hunder + (z1.replace("ve", "fty ")) + (y1);
            } else {
                text.textContent = h1 + hunder + (z1) + ty + (y1);
            }
        }
    } else if (x < 0 || isNaN(x)) {
        text.textContent = "Please Don't Enter Letters Or Negative Numbers";
    } else if (x >= 1000) {
        text.textContent = "You are Not Allowed to add more than 999";
    } else if (x === "") {
        text.textContent = "Don't Leave Me Empity";
    }
    for (i = 0; i <= x.length; i++) {
        if (x.charAt(i) === ".") {
            text.textContent = "Please Don't Enter Letters Or Negative Numbers";
        }
    }




};

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar