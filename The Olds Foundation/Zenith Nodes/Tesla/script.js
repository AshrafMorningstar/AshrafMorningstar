/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

/*the complete project is in the following link:
https://github.com/AshrafMorningstar
Follow me on Codepen
*/
var header= document.getElementById("header");
            var ms= document.getElementById("models");
            var m3= document.getElementById("model3");
            var mx= document.getElementById("modelx");
            var my= document.getElementById("modely");
            var model= document.getElementById("model");

            ms.onclick=function(){
                header.style.backgroundImage="url(https://i.postimg.cc/mg7L1t7Z/image-1.png)";
                model.innerHTML="Model S";
            }
            m3.onclick=function(){
                header.style.backgroundImage="url(https://i.postimg.cc/FRCNXcXp/image-2.png)";
                model.innerHTML="Model 3";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://i.postimg.cc/KYNmQw9d/image-3.png)";
                model.innerHTML="Model X";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://i.postimg.cc/1t3sdB24/image-4.png)";
                model.innerHTML="Model Y";
            }