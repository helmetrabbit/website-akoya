import { motion } from 'framer-motion';
import { generateRandomValues } from '../utils/randomValues';

export const AmbientBackground = () => {
  const blobCount = 10;
  const randomValues = generateRandomValues(blobCount);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {randomValues.map((value, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-purple-800 opacity-10"
          style={{
            width: value.width,
            height: value.height,
            top: value.top,
            left: value.left,
          }}
          animate={{
            x: value.x,
            y: value.y,
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: value.duration,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
};
