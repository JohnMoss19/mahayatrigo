import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "direction"> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '', ...props }: FadeInProps) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const directions = {
    up: { y: isMobile ? 0 : 20, x: 0 },
    down: { y: isMobile ? 0 : -20, x: 0 },
    left: { x: isMobile ? 0 : 20, y: 0 },
    right: { x: isMobile ? 0 : -20, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? delay * 0.5 : delay, ease: "easeOut" }}
      style={{ willChange: 'opacity, transform' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
