import React from 'react';
import { motion } from "framer-motion";

const AnimatedButton = ({ children, className = "", ...rest }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;


// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar