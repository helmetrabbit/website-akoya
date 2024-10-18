import React from 'react';
import { motion } from 'framer-motion';
import * as Toggle from '@radix-ui/react-toggle';

export const Button = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`button-glow rounded-md`}
    >
      <Toggle.Root
        className={`text-gray-700 font-medium px-6 py-2 rounded-md ${className}`}
        {...props}
      >
        {children}
      </Toggle.Root>
    </motion.div>
  );
};
