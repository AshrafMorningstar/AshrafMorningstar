gsap.registerPlugin(Draggable, InertiaPlugin);
gsap.config({ trialWarn: false });

// populating images
const rolo = document.querySelector(".rolo");
for (let i = 0; i < 10; i++) {
  rolo.innerHTML += `<div class="item a" data-url="https://source.unsplash.com/random/800x800/?${i}"><div class="card-text card-text--back">This is the Resource Title ${i}</div><img src="https://source.unsplash.com/random/800x800/?${i}" /><div class="card-text">This is the Resource Title ${i}</div></div>`;
}

// setup tween for draggable... will likely be a scroll/observer experience in the future
const items = gsap.utils.toArray(".item");
const xOffset = 30;

items.forEach((item, i) => {
  gsap.set(item, {
    transformOrigin: "-30px 0",
    x: xOffset,
    rotateY: (i * 360) / items.length
  });
});

const updateZIndex = () => {
  items.forEach((item) => {
    const backText = item.querySelector(".card-text--back");
    gsap.utils.wrap(0, 360, gsap.getProperty(item, "rotateY")) < 270
      ? gsap.set(backText, { zIndex: 2 })
      : gsap.set(backText, { zIndex: 0 });
  });
};

const roloTL = gsap.to(items, {
  rotateY: "+=360",
  duration: 5,
  ease: "none",
  paused: true,
  onUpdate: updateZIndex
});
updateZIndex();
// draggable consts
const proxy = document.createElement("div");
const itemCount = items.length;
const itemW = items[0].offsetWidth;
const wrapW = itemCount * itemW;

// flip consts
let activeItem;
const modal = document.querySelector(".modal");
const modalImage = modal.querySelector(".modal-image");
let normalizeTL;

// circumference of circle
const c = (itemW + xOffset) * 2 * Math.PI;
// arc distance from edge to edge (for snapping)
const seg = c / itemCount;

// wrap for tween progress scrub
const wrapVal = gsap.utils.wrap(0, c);

const drag = Draggable.create(proxy, {
  type: "x",
  trigger: ".item",
  inertia: true,
  onDrag: updateProgress,
  onThrowUpdate: updateProgress,
  snap: {
    x: (x) => {
      return Math.round(x / seg) * seg;
    }
  }
});

function updateProgress() {
  roloTL.progress(wrapVal(this.x) / c);
}
const ctx = gsap.context(() => {});

// FLIP into modal
items.forEach((item) => {
  item.addEventListener("click", () => {
    drag[0].disable();
    drag[0].tween && drag[0].tween.kill();
    activeItem = item;
    item.classList.add("active-thumb");
    item.parentElement.classList.add("active");
    item.dataset.flipId = "img";

    normalizeTL = gsap
      .timeline({
        onComplete: () => {
          gsap.set(item, { opacity: 0 });
          const state = Flip.getState([item, modalImage]);
          modalImage.querySelector("img").setAttribute("src", item.dataset.url);
          modal.classList.add("active");
          modalImage.style.display = "block";

          Flip.from(state, {
            duration: 0.4,
            simple: true,
            ease: "sine.inOut"
          });
        },
        onReverseComplete: () => {
          item.parentElement.classList.remove("active");
          drag[0].enable();
        }
      })
      .to(item, {
        yPercent: -120,
        duration: 0.2
      })
      .to(
        item,
        {
          x: 0,
          xPercent: -50,
          rotateY: "0_short",
          duration: 0.2
        },
        0.1
      );
  });
});

// FLIP out of modal
modal.addEventListener("click", () => {
  activeItem.dataset.flipId = "img";
  gsap.set(activeItem, { opacity: 1 });

  // need to find a way to disable the rotateY
  const state = Flip.getState([modalImage, activeItem]);

  modal.classList.remove("active");

  Flip.from(state, {
    duration: 0.4,
    simple: true,
    ease: "sine.inOut",
    onComplete: () => {
      modalImage.querySelector("img").setAttribute("src", "");
      activeItem.classList.remove("active-thumb");
      activeItem.dataset.flipId = "img";
      normalizeTL.reverse();
    }
  });
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar