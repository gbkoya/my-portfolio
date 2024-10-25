'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export type Project = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  technologies: string[];
  detailedDescription: JSX.Element;
}

export default function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Disporty',
      description: 'Disporty is a comprehensive game management software designed to streamline the organization and management of various competition types amongst users.',
      url: 'https://www.disporty.com',
      imageUrl: '/screenshots/disporty.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Typescript', 'RESTful APIs'],
      detailedDescription: (
        <div>
          <p>
            Disporty is a comprehensive game management software designed to streamline the organization and management of various competition types amongst users. As a Frontend Developer, I collaborated with an international team to create an intuitive user interface, ensuring a seamless user experience.
          </p>
          <p>
            I utilized technologies such as JavaScript, React, Next.js, Typescript, Material UI, and Tailwind CSS to develop and maintain clean, efficient code. Additionally, I implemented RESTful APIs and converted client-side code to server-side code for faster response times.
          </p>
        </div>
      ),
    },
    {
      title: 'Archware Ltd',
      description: 'The official website for Archware Technologies, showcasing the company\'s operations and services.',
      url: 'https://www.archwaretechgroup.com',
      imageUrl: '/images/archware.png',
      technologies: ['React', 'Next.js', 'Laravel', 'Tailwind CSS', 'Bootstrap'],
      detailedDescription: (
        <div>
          <p>
            The official website for Archware Technologies, Archware Ltd serves as a digital storefront, showcasing the company’s operations and services. In my role as a Software Developer, I collaborated with cross-functional teams and UX/UI designers to design, develop, and maintain this responsive web application.
          </p>
          <p>
            I employed technologies such as React, Next.js, and Laravel, while ensuring seamless integration between the front-end and back-end systems. I also optimized web applications for performance and speed, troubleshooting issues and integrating new technologies.
          </p>
        </div>
      ),
    },
    {
      title: 'Youhi Media',
      description: 'Youhi Media\'s website provides insights into the company’s work and services.',
      url: 'https://www.youhimedia.com',
      imageUrl: '/images/youhi.png',
      technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
      detailedDescription: (
        <div>
          <p>
            Youhi Media’s website serves as a platform to present the company’s work and insights into their services. As part of the development team, I contributed to creating a visually appealing and user-friendly interface using HTML, CSS, JavaScript, and Bootstrap.
          </p>
          <p>
            My role involved ensuring the website was responsive and accessible across various devices while maintaining a strong focus on performance and user experience.
          </p>
        </div>
      ),
    },
    {
      title: 'Foremost Eye Clinic',
      description: 'Foremost Eye Clinic is a comprehensive healthcare service.',
      url: 'https://www.foremosteyeclinic.com',
      imageUrl: '/images/foremost.png',
      technologies: ['Laravel', 'Bootstrap', 'Javascript', 'RESTful APIs'],
      detailedDescription: (
        <div>
          <p>
            Foremost Eye Clinic offers comprehensive healthcare services. As a Frontend Developer, I collaborated with an international team to create an intuitive user interface, ensuring a seamless user experience.
          </p>
          <p>
            I utilized technologies such as JavaScript, React, Next.js, Typescript, Material UI, and Tailwind CSS to develop and maintain clean, efficient code. Additionally, I implemented RESTful APIs and converted client-side code to server-side code for faster response times.
          </p>
        </div>
      ),
    },
    {
      title: 'Archware Tech Institute',
      description: 'A platform allowing users to upload and sell courses.',
      url: 'https://www.archwareltd.com',
      imageUrl: '/images/institute.png',
      technologies: ['React', 'Next.js', 'Laravel', 'Tailwind CSS', 'Git'],
      detailedDescription: (
        <div>
          <p>
            The Archware Tech Institute platform allows users to upload and sell courses, empowering educators to reach a wider audience. My contributions included developing the front-end interface using React and Next.js, ensuring a seamless user experience for both instructors and students.
          </p>
          <p>
            I worked closely with back-end developers to implement robust APIs, enabling smooth data management and course transactions.
          </p>
        </div>
      ),
    },
    {
      title: 'Archware Facility Lease',
      description: 'A web app that connects landlords, tenants, and artisans for smooth property management.',
      url: 'https://www.archwarefacilitylease.com',
      imageUrl: '/images/facility-lease.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
      detailedDescription: (
        <div>
          <p>
            This web application connects landlords, tenants, and artisans, facilitating efficient property management. My responsibilities included developing the front-end interface using React and Node.js, ensuring that users could easily navigate and utilize the platform for rent control, maintenance requests, and tenant-landlord communication.
          </p>
          <p>
            I integrated REST APIs to manage user data and enhance the overall functionality of the application.
          </p>
        </div>
      ),
    },
  ];
  const initialProject = projects[0];
  if (!activeProject) {
    setActiveProject(initialProject);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-foreground dark:bg-background py-16"
      onViewportEnter={() => setVisible(true)}
      onViewportLeave={() => setVisible(false)}
    >
      {/* Detailed View Section */}
      <div className="container mx-auto px-4 mb-12 md:block hidden">
        <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          {/* Left: Project Image */}
          <img
            src={activeProject?.imageUrl}
            alt={`${activeProject?.title} Screenshot`}
            className="w-full md:w-1/2 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
          />
          
          {/* Right: Project Details */}
          <div>
            <h2 className="text-3xl font-bold text-background dark:text-foreground mb-2">
              {activeProject?.title}
            </h2>
            <p className="text-background dark:text-foreground mb-4">
              {activeProject?.detailedDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {activeProject?.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActiveProject(project)} // Change active project on hover
            initial={{ opacity: 0, y: 50 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate on visibility
            transition={{
              duration: 0.7, // Increase duration for slower effect
              delay: index * 0.2, // Increase delay for a more staggered effect
              ease: 'easeInOut',
            }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            {/* Project Image */}
            <img
              src={project.imageUrl}
              alt={`${project.title} Screenshot`}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full px-2 py-1 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
