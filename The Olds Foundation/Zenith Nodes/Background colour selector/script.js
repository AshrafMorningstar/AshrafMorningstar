var plate = document.getElementById('plate');
var options = document.getElementsByClassName('color-option');

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function() {
        var color = this.style.backgroundColor;
        document.body.style.backgroundColor = color;
        plate.style.backgroundColor = (color === 'black') ? 'white' : 'black';
    });
}

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar