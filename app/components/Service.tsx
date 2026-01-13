"use client";

import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4"
            variants={itemVariants}
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider">
              Our Services
            </p>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 text-center mb-4"
            variants={itemVariants}
          >
            Cyber Security
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
              Solutions
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center max-w-2xl"
            variants={itemVariants}
          >
            Comprehensive security services designed to protect your digital
            infrastructure
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Computer Security Card */}
          <motion.div
            className="group relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 border border-blue-700/50 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-bl-full"></div>

            <div className="mb-6 flex justify-center relative z-10">
              <div className="relative w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <svg
                    className="w-5 h-5 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                Computer Security
              </h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Protect your devices and systems from cyber threats with
                comprehensive security solutions. We implement advanced
                encryption, firewall protection, and real-time monitoring to
                safeguard your digital assets.
              </p>
              <button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white text-white hover:text-blue-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-white/20 hover:border-white">
                Learn More →
              </button>
            </div>
          </motion.div>

          {/* Software Quality Assurance Testing Card */}
          <motion.div
            className="group relative bg-white rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-br-full"></div>

            <div className="mb-6 flex justify-center relative z-10">
              <div className="relative w-28 h-28 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                {/* Floating checkmarks */}
                <div className="absolute -top-2 -left-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md animate-pulse">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center shadow-md animate-pulse delay-150">
                  <svg
                    className="w-2 h-2 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">
                Software Quality Assurance Testing
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Ensure your software meets the highest quality standards with
                our comprehensive testing services. We perform functional,
                performance, and security testing to deliver reliable
                applications.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More →
              </button>
            </div>
          </motion.div>

          {/* Penetration Testing Card */}
          <motion.div
            className="group relative bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 border border-blue-700/50 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative corner accent */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/20 rounded-tr-full"></div>

            <div className="mb-6 flex justify-center relative z-10">
              <div className="relative w-28 h-28">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-14 h-14 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                    <svg
                      className="w-4 h-4 text-blue-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Floating network nodes */}
                <div className="absolute -top-1 -left-1 w-5 h-5 bg-white/80 rounded-full animate-pulse flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-100 rounded-full animate-pulse delay-300 flex items-center justify-center shadow-md">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-white/60 rounded-full animate-pulse delay-150 shadow-md"></div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                Penetration Testing
              </h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Identify and address security vulnerabilities before attackers
                can exploit them. Our expert team simulates real-world attacks
                to test your defenses and provide actionable recommendations.
              </p>
              <button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white text-white hover:text-blue-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-white/20 hover:border-white">
                Learn More →
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Auto-scrolling Services */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 p-8 border border-blue-700/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-900 to-transparent z-10 pointer-events-none"></div>

          <div className="flex items-center gap-6 relative z-0">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <p className="text-sm font-semibold text-white whitespace-nowrap">
                Our Services
              </p>
            </div>
            <div className="flex-1 overflow-hidden relative">
              <div className="flex animate-scroll gap-8">
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Cybersecurity
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Software Quality Assurance Testing
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Vulnerability Assessment
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Online Risk Assessment
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Cybersecurity Consulting
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Cybersecurity Training
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Data Recovery
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Cybersecurity
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Software Quality Assurance Testing
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Vulnerability Assessment
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Online Risk Assessment
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Cybersecurity Consulting
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Cybersecurity Training
                </span>
                <span className="text-blue-300 text-xl">•</span>
                <span className="text-white font-bold text-lg whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Data Recovery
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
