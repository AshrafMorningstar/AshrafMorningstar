import React from 'react';
import { zoomIn } from '../../utils/motionVariants';
import { motion } from 'framer-motion';
const AnimatedCard = ( { children}) => {
  return (
    <motion.div
        variants = {zoomIn}
        initial = "hidden"
        animate = "visible"
        // className  = {` rounded-lg shadow-md p-4 bg-white ${className}`}
        >
            {children}
    </motion.div>
  )
}

export default AnimatedCard

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar