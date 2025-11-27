var swiper = new Swiper(".swiper", {

    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    grabCursor:true,
    spaceBetween:30,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    breakpoints:{
        0: {
            slidePreviews:1,
        },
        768: {
            slidePreviews: 2,
        },
        1024: {
            slidePreviews: 3,
        }
    
    }
  });

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar