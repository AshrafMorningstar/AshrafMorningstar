let slider = document.getElementById('slider'),
    balloon,
    balloonTransform,
    balloonReset;

noUiSlider.create(slider, {
    start: 60,
    connect: 'lower',
    range: {
        min: 0,
        max: 100
    }
});

if(!balloon) {

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 8 6');
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d','M3.19770784,0.400189793 L0.183732919,4.48916968 C-0.132777702,4.91857125 -0.0301446804,5.51531196 0.41297019,5.82202737 C0.58019429,5.93777661 0.780561067,6 0.986063367,6 L7.01401322,6 C7.55855868,6 8,5.57222019 8,5.04452705 C8,4.84538453 7.93578945,4.65121861 7.81634366,4.48916968 L4.80236874,0.400189793 C4.48585812,-0.0292117777 3.87005999,-0.128668564 3.42694512,0.178046844 C3.33840792,0.239330552 3.2609487,0.314392601 3.19770784,0.400189793 Z');
    svg.appendChild(path);

    let inner = document.createElement('div');

    inner.appendChild(svg);

    balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.appendChild(inner);

    slider.getElementsByClassName('noUi-base')[0].appendChild(balloon);

    balloonTransform = new Proxy({
        r: 0
    }, {
        set(target, key, value) {
            target[key] = value;
            balloon.style.setProperty('--r', target.r + 'deg');
            return true;
        },
        get(target, key) {
            return target[key];
        }
    });

}

var timestamp = null,
    lastX = null,
    startedMoving = false,
    moved = false;

slider.noUiSlider.on('start', function() {
    let percent = this.get() / this.options.range.max * 100;
    balloon.classList.add('active');
    balloon.childNodes[0].dataset.value = Math.round(this.get());
    TweenMax.to(balloon, 0, {
        x: this.target.offsetWidth * percent / 100,
        scale: .75 + .25 * percent / 100
    });
    balloonReset = setInterval(() => {
        if(!moved && startedMoving) {
            TweenMax.to(slider.getElementsByClassName('noUi-handle')[0], .3, {
                css: {
                    scale: 1
                }
            });
            balloonTransform.r = 0;
            startedMoving = false;
        }
        moved = false;
    }, 20);
});

slider.noUiSlider.on('slide', function() {
    let percent = this.get() / this.options.range.max * 100;
    balloon.childNodes[0].dataset.value = Math.round(this.get());
    if(timestamp === null) {
        timestamp = Date.now();
        lastX = this.get();
        return;
    }
    var now = Date.now(),
        speedX = Math.round((this.get() - lastX) / (now - timestamp) * 160),
        speedX = speedX > 10 ? 10 : speedX < -10 ? -10 : speedX;

    balloonTransform.r = speedX * -2;

    startedMoving = true;
    moved = true;

    TweenMax.to(balloon, 1.4, {
        x: this.target.offsetWidth * percent / 100,
        scale: .75 + .25 * percent / 100,
        ease: Elastic.easeOut.config(1, .6)
    });

    TweenMax.to(slider.getElementsByClassName('noUi-handle')[0], .3, {
        css: {
            scale: .9
        }
    });

    timestamp = now;
    lastX = this.get();
});

slider.noUiSlider.on('end', function() {
    balloon.classList.remove('active');
    clearInterval(balloonReset);
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar