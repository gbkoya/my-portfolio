'use client';

import { useEffect, useState, useRef } from 'react';

const SkillsAndTools = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const languages = [
    'React.js', 'Next.js', 'HTML', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Typescript',
    'Javascript', 'NodeJS', 'PHP', 'Laravel', 'MongoDB', 'Git', 'Github', 'Bitbucket',
    'Postman', 'Bash', 'Slack', 'Jira'
  ];

  const centerLanguage = 'React.js'; // Define the language to be placed in the center
  const outerLanguages = languages.filter(lang => lang !== centerLanguage); // Remaining languages for the circles

  // Split the remaining languages into two groups for the two circles
  const circle1Languages = outerLanguages.slice(0, Math.ceil(outerLanguages.length / 2));
  const circle2Languages = outerLanguages.slice(Math.ceil(outerLanguages.length / 2));

  // Detect if the skills section is in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.5 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const getRandomFontSize = () => {
    const sizes = ['text-sm', 'text-xl', 'text-base', 'text-lg'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  // Function to generate positions in a circular pattern
  const generateCircularPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI; // Calculate the angle for the current language
    const top = `${50 + radius * Math.sin(angle)}%`; // Center at 50%, offset by radius * sin(angle)
    const left = `${50 + radius * Math.cos(angle)}%`; // Center at 50%, offset by radius * cos(angle)

    return { top, left };
  };

  return (
    <section className="py-16 bg-foreground dark:bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column - Skills and Tools Header */}
        <div className="flex flex-col justify-center" ref={skillsRef}>
          <h2 className="lg:text-5xl text-2xl lg:text-left text-center font-bold text-background dark:text-foreground mb-4" style={{ transform: `translateX(${isInView ? 0 : -100}%)`, transition: 'transform 1s ease-in-out' }}>
            Skills and Tools
            <p className="lg:text-lg text-base font-light text-background dark:text-foreground">
            Please check for tools on a per project basis.
          </p>
          </h2>
          
        </div>

        {/* Right Column - Languages in Circular Positions */}
        <div className="relative h-[500px] md:h-[600px] w-full" style={{ transform: `translateX(${isInView ? 0 : 100}%)`, transition: 'transform 1s ease-in-out' }}>
          
          {/* Center Language */}
          <span
            className="text-2xl font-bold absolute"
            style={{
              top: '50%',
              left: '50%',
              whiteSpace: 'nowrap',
              transform: 'translate(-50%, -50%)', // Center the text
            }}
          >
            {centerLanguage}
          </span>

          {/* First Circle */}
          {circle1Languages.map((language, index) => {
            const { top, left } = generateCircularPosition(index, circle1Languages.length, 20); // Small circle radius
            return (
              <span
                key={index}
                className={`${getRandomFontSize()} font-bold absolute`}
                style={{
                  top,
                  left,
                  whiteSpace: 'nowrap',
                  transform: 'translate(-50%, -50%)', // Center the text at its position
                }}
              >
                {language}
              </span>
            );
          })}

          {/* Second Circle */}
          {circle2Languages.map((language, index) => {
            const { top, left } = generateCircularPosition(index, circle2Languages.length, 35); // Medium circle radius
            return (
              <span
                key={index}
                className={`${getRandomFontSize()} font-bold absolute`}
                style={{
                  top,
                  left,
                  whiteSpace: 'nowrap',
                  transform: 'translate(-50%, -50%)', // Center the text at its position
                }}
              >
                {language}
              </span>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default SkillsAndTools;
