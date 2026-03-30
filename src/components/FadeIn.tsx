import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "direction"> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '', ...props }: FadeInProps) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
