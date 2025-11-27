/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

// Hold button with mouse / select with tab and hold spacebar

let duration = 1600,
    success = button => {
        //Success function
        button.classList.add('success');
    };

document.querySelectorAll('.button-hold').forEach(button => {
    button.style.setProperty('--duration', duration + 'ms');
    ['mousedown', 'touchstart', 'keypress'].forEach(e => {
        button.addEventListener(e, ev => {
            if(e != 'keypress' || (e == 'keypress' && ev.which == 32 && !button.classList.contains('process'))) {
                button.classList.add('process');
                button.timeout = setTimeout(success, duration, button);
            }
        });
    });
    ['mouseup', 'mouseout', 'touchend', 'keyup'].forEach(e => {
        button.addEventListener(e, ev => {
            if(e != 'keyup' || (e == 'keyup' && ev.which == 32)) {
                button.classList.remove('process');
                clearTimeout(button.timeout);
            }
        }, false);
    });
});