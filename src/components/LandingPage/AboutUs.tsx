"use client";
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-zinc-200 py-20 px-4 md:px-8 lg:px-12">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/path-pattern.svg')] bg-repeat" />
      </div>
      
      <motion.div 
        className="container mx-auto z-10 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-neutral-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Our Running Club</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Join us every Sunday at 9 AM for our signature 5km runs.
          </p>
        </motion.div>
      
        {/* Mission and Vision Section */}
        <motion.div 
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Our Mission & Vision</h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-600"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4 text-center">Our Mission</h4>
              <p className="text-neutral-700 text-center">
                We strive to create an inclusive community that empowers individuals through running, fostering physical health, mental wellbeing, and social connections. Our weekly Sunday 5km runs are the cornerstone of our commitment to consistency and community.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-neutral-900"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-neutral-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900">
                    <circle cx="12" cy="12" r="2"/>
                    <path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4 text-center">Our Vision</h4>
              <p className="text-neutral-700 text-center">
                We envision a world where running is accessible to all, where our Sunday morning runs inspire a ripple effect of wellness throughout our community. We aim to be the catalyst that transforms individuals&apos; lives through the simple act of running together.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* About Us Section */}
        <motion.div 
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">About Us</h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div 
              variants={fadeInUp}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="/api/placeholder/800/800" 
                alt="Running club members on Sunday run" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">Est. 2024</span>
              </div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div 
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h4 className="text-2xl font-bold text-neutral-900 mb-3">Our Story</h4>
                <p className="text-neutral-700">
                  Founded in 2015, our running club began with just five friends meeting every Sunday at 9 AM for a casual 5km run. What started as a small gathering has blossomed into a thriving community of runners from all walks of life, united by our love for the sport and the connections we build along the way.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h4 className="text-2xl font-bold text-neutral-900 mb-3">Our Tradition</h4>
                <p className="text-neutral-700">
                  Our Sunday 9 AM 5km runs have remained our cornerstone tradition. Rain or shine, winter or summer, we gather to support each other through every stride. These weekly runs have become more than exercise—they&apos;re a ritual that grounds our week and strengthens our community.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <span className="text-3xl font-bold text-blue-600 block">55+</span>
                  <span className="text-neutral-600">Active Members</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <span className="text-3xl font-bold text-blue-600 block">12+</span>
                  <span className="text-neutral-600">Sunday Runs</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Team Members and Founders */}
        <motion.div 
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Our Team & Founders</h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Meet the passionate individuals who lead our community and organize our weekly Sunday runs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Lead Coach",
                bio: "Marathon runner and certified coach with a passion for helping others discover the joy of running.",
                image: "/api/placeholder/400/400"
              },
              {
                name: "Michael Chen",
                role: "Co-Founder & Community Lead",
                bio: "Former track athlete who believes in the power of community to motivate and inspire runners of all levels.",
                image: "/api/placeholder/400/400"
              },
              {
                name: "Priya Patel",
                role: "Sunday Run Coordinator",
                bio: "Dedicated runner who ensures our weekly 5km runs are welcoming, organized, and enjoyable for everyone.",
                image: "/api/placeholder/400/400"
              },
              {
                name: "James Wilson",
                role: "Training Program Director",
                bio: "Experienced coach who develops training plans for members preparing for races from 5K to marathon.",
                image: "/api/placeholder/400/400"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-neutral-900">{member.name}</h4>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-neutral-700 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          variants={fadeInUp}
          className="bg-neutral-900 rounded-xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 bottom-0">
              <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M44.5,-76.3C59.1,-69.9,73.3,-60.1,81.8,-46.2C90.3,-32.2,93,-14,91.9,3.6C90.8,21.2,85.9,38.2,76.1,51.6C66.2,65,51.5,74.9,35.9,79.3C20.3,83.8,3.8,82.9,-12.4,79.6C-28.6,76.3,-44.5,70.7,-57.4,60.8C-70.3,50.9,-80.1,36.7,-84.8,20.8C-89.5,4.9,-89.1,-12.7,-83,-27.7C-76.9,-42.7,-65.2,-55.1,-51.3,-62.1C-37.4,-69.2,-21.3,-71,-5.5,-62.9C10.4,-54.9,29.8,-82.7,44.5,-76.3Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Us This Sunday at 9 AM</h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
              Experience the camaraderie and energy of our weekly 5km run. All paces welcome!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors cursor-pointer">
                Sign Up for Sunday Run
              </Link>
              <Link href="#track" className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-neutral-900 transition-colors">
                View Running Routes
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutUs;