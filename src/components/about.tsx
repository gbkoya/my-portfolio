'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="bg-foreground dark:bg-background py-16"
      onViewportEnter={() => setIsVisible(true)}  // Animation on entering the viewport
      onViewportLeave={() => setIsVisible(false)} // Reset animation when leaving the viewport
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Image */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }} // Start from left
          animate={isVisible ? { x: '0%', opacity: 1 } : { x: '-100%', opacity: 0 }} // End at center (x:0)
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="flex-1 mb-8 md:mb-0"
        >
          <img
            src='/images/institute.png' // Replace with your image path
            alt="About Me"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Text Content */}
        <motion.div
          initial={{ x: '100%', opacity: 0 }} // Start from right
          animate={isVisible ? { x: '0%', opacity: 1 } : { x: '100%', opacity: 0 }} // End at center (x:0)
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="flex-1 pl-4"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            I’m a passionate Frontend Developer with a knack for creating visually appealing and user-friendly web applications. I love turning complex problems into simple, beautiful designs.
          </p>
          
          <h2 className="text-2xl font-semibold mb-2">Some other good thing about me</h2>
          <p className="text-lg mb-4">
            I am constantly learning and improving my skills. I enjoy tackling challenges that require creative problem-solving and innovative thinking.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Another good thing about me</h2>
          <p className="text-lg mb-4">
            Outside of work, I love to explore new technologies and trends in web development. I often spend my weekends working on personal projects and experimenting with new ideas.
          </p>
          
          <h2 className="text-2xl font-semibold mb-2">Yet another great thing about me</h2>
          <p className="text-lg mb-4">
            I’m also a team player who believes in collaboration and sharing knowledge. I enjoy mentoring junior developers and learning from my peers.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
