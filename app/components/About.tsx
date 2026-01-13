"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Left Side - Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-4 inline-block">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Protecting Your Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
                  Future Today
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                At Megastone, we are a team of dedicated cybersecurity experts
                committed to safeguarding your business from evolving digital
                threats. With years of experience in the industry, we understand
                that security is not just a service—it's a partnership.
              </p>
              <p>
                Our mission is to provide cutting-edge security solutions that
                protect your assets, ensure compliance, and give you peace of
                mind. We combine advanced technology with expert knowledge to
                deliver comprehensive protection tailored to your unique needs.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Clients Protected</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">
                  10+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">Uptime Guarantee</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Main Card */}
            <motion.div
              className="relative bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl p-8 shadow-2xl"
              initial={{ rotate: 3, opacity: 0, scale: 0.9 }}
              whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        Expert Team
                      </div>
                      <div className="text-white/80 text-sm">
                        Certified Professionals
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        24/7 Monitoring
                      </div>
                      <div className="text-white/80 text-sm">
                        Round-the-Clock Protection
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        Cost-Effective
                      </div>
                      <div className="text-white/80 text-sm">
                        Competitive Pricing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500 rounded-full opacity-80 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-700 rounded-full opacity-60 blur-xl animate-pulse delay-300"></div>

            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(to right, #1e40af 1px, transparent 1px),
                                  linear-gradient(to bottom, #1e40af 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Ready to Secure Your Business?
              </h3>
              <p className="text-gray-600">
                Let's discuss how we can protect your digital assets today.
              </p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
