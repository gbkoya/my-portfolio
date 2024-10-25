'use client'
import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  color: string;
}

export default function Hero() {
  useEffect(() => {
    // Star Animation
    const canvas = document.getElementById('starCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const stars: Star[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const getRandomColor = () => {
      const colors = ['#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb', '#84fab0', '#8fd3f4', '#cfd9df'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const createStar = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: getRandomColor(),
      };
    };

    for (let i = 0; i < 150; i++) {
      stars.push(createStar());
    }

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        // Reverse direction when the star hits the edge of the canvas
        if (star.x < 0 || star.x > canvas.width) star.speedX = -star.speedX;
        if (star.y < 0 || star.y > canvas.height) star.speedY = -star.speedY;

        // Draw the star with its color
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      });

      requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative bg-foreground dark:bg-background lg:h-[80vh] h-[100vh]  flex items-center justify-start">
      {/* Canvas for stars */}
      <canvas id="starCanvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas>

      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto px-4 z-10 lg:grid grid-cols-2 "
      >
        <div>
          <h1 className="lg:text-6xl text-3xl font-bold text-background dark:text-foreground lg:text-left text-center">
            Hi, I&apos;m <span className="text-[#5383e4]">Adekoya</span>
            <span className="text-white px-3">Gbolahan</span>
          </h1>
          <p className="text-xl text-background dark:text-foreground mt-4 lg:text-left text-center lg:py-0 py-4">
            I&apos;m a web developer with a passion for building beautiful and functional
            websites. I&apos;m always looking for new challenges and opportunities to grow as a
            developer.
          </p>
          <div className="flex justify-center mt-4 lg:justify-start">
            <button className="text-white border rounded-md text-foreground  px-6 py-2 ">
              Get in touch
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

