function breakTheText() {
  let h2 = document.querySelector("h2");
  let h2Text = h2.textContent;

  let splittedText = h2Text.split("");
  let halfValue = splittedText.length/2;

  let clutter = "";

  splittedText.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter += ` <span class="A">${elem}</span> `;
    }else{
        clutter += ` <span class="B">${elem}</span> `;
    }
  });

  h2.innerHTML = clutter;
}

breakTheText();

gsap.from("h2 .A", {
    y:70,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})

gsap.from("h2 .B", {
    y:70,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar