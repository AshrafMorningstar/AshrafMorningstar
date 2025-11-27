
export const fadeIn = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        Transition: {
            duration: 0.6,
            ease: "easeInOut"
        },
    },
};



export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

export const slideInFromLeft = {
    hidden: {
        x: -100, 
        opacity: 0
    },
    visible:{
        x:0,
        opacity:1,
        transition: {
            duration:0.5
        },
    },
};

export const slideInFromRight = {
    hidden: {
        x:100, 
        opacity:0
    },
    visible:{
        scale:1,
        opacity: 1,
        transition: {
            duration:0.5
        },
    },
};

export const zoomIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  

export const staggerContainer ={
    hidden:{},
    visible: {
        transition:{
            staggerChildren:0.2,
            delayChildren: 0.2,
        },
    },
};




  
  export const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  
  export const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar