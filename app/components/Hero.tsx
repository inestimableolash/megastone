"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 md:py-0">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video-background.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/80 via-blue-800/50 to-blue-950/80 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              Cybersecurity Solutions for Your Business
            </motion.h1>
            <motion.p
              className="text-white/90 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Team of Cybersecurity Experts Who Are Dedicated to Helping You
              protect your business from cyber threats.
            </motion.p>
            <motion.div
              className="mt-6 sm:mt-8 flex justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="font-semibold bg-white text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Shield Image */}
          <motion.div
            className="flex justify-center md:justify-end mt-8 md:mt-0"
            variants={imageVariants}
          >
            <motion.div
              className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/header-shield.png"
                alt="shield"
                width={1000}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
