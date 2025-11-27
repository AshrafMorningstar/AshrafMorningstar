document.addEventListener('DOMContentLoaded', function() {
    const hands = document.querySelectorAll('.hand');
    const digitalTimeElement = document.getElementById('digital-time');
    const digitalDateElement = document.getElementById('digital-date');

    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Update analog clock
        const hourAngle = (hours % 12) * 30 + minutes / 2;
        const minuteAngle = minutes * 6 + seconds / 10;
        const secondAngle = seconds * 6;

        hands[0].style.transform = `rotate(${hourAngle}deg)`;
        hands[1].style.transform = `rotate(${minuteAngle}deg)`;
        hands[2].style.transform = `rotate(${secondAngle}deg)`;

        // Update digital clock time
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        digitalTimeElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

        // Update digital clock date
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString(undefined, options);
        digitalDateElement.textContent = dateString;
    }

    // Add smooth animation for second hand
    const secondHand = hands[2];
    secondHand.style.transition = 'transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 0.44)';

    // Remove transition once per minute to avoid animation glitch when second hand completes a full circle
    secondHand.addEventListener('transitionend', function() {
        if (new Date().getSeconds() === 0) {
            secondHand.style.transition = 'none';
            setTimeout(() => {
                secondHand.style.transition = 'transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 0.44)';
            }, 50);
        }
    });

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial call to set the clock immediately
    updateClock();
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar