'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  whileInView?: any;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8 },
  whileInView
}: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 