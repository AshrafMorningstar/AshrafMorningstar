/*global console, alert, prompt*/
function ageToHours() {
    'use strict';
    var
        a = document.getElementById('name').value,
        r = a * 365,
        m = document.getElementById('div');
    if (a === "") {
        m.innerHTML = "لا بلاش استعباط بقا اكتب سنك وخلاص";
    } else if (a === "حبيبي تسلم") {
        m.innerHTML = "علي ايه يباشا ولا يهمك";
    } else if (a === "ياسطي" || a === "يازميلي" || a === "يارئ" || a === "ياخويا" || a === "ياباشا") {
        m.innerHTML = "ايه يباشا ؟ عايز ايه";
    } else if (a === "مش عايز اكتب يعم" || a === "مش عايز اكتب يسطي" || a === "مش عايز اكتب يازميلي" || a === "مش عايز اكتب يارئ" || a === "مش عايز اكتب" || a === "مش عايز اكتب ياباشا" || a === "مش عايز اكتب يخويا") {
        m.innerHTML = "ياعم متعصبناش بقا انا كويس معاك مش عايز اوديك لمدام عفاف تمام ؟";
    } else if (isNaN(a)) {
        m.innerHTML = "ياعم بقولك سنك مش اسمك أفهم بقا";
    } else if (a < 0) {
        m.innerHTML = "لا ما انت مش من الماضي اكتب سنك دلوقتي كدا يباشا";
    } else if (a == 0) {
        m.innerHTML  = "ابقي اتولد وتعالي كلمني طب";
    } else if (a >= 100) {
        m.innerHTML =  "يا عم انت المفروض تقولي هعيش كام ساعه امشي ياعم ";
    } else if (a <= 9) {
        m.innerHTML = "روح يحماده مامتك بتندهلك";
    } else {
        m.innerHTML = "  انت كدا عايش يباشا " + r + " يوم تؤمرش بحاجه تاني   ؟";
    }
}

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar