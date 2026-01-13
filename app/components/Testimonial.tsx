"use client";

import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
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
  const featuredTestimonial = {
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
    company: "TechCorp Industries",
    image: "SJ",
    rating: 5,
    text: "Megastone transformed our security infrastructure completely. Their team's expertise and round-the-clock monitoring gave us complete peace of mind. We've had zero breaches since implementation, and their proactive approach has saved us from potential threats we didn't even know existed.",
  };

  const testimonials = [
    {
      name: "Michael Chen",
      position: "Security Director",
      company: "Global Finance Ltd",
      image: "MC",
      rating: 5,
      text: "Outstanding service and support. The penetration testing revealed vulnerabilities we didn't know existed.",
    },
    {
      name: "Emily Rodriguez",
      position: "IT Manager",
      company: "Healthcare Solutions",
      image: "ER",
      rating: 5,
      text: "The compliance support was exceptional. They helped us achieve HIPAA and SOC 2 compliance seamlessly.",
    },
    {
      name: "David Thompson",
      position: "CEO",
      company: "StartupHub Inc",
      image: "DT",
      rating: 5,
      text: "As a growing startup, we needed cost-effective security solutions. Megastone delivered exactly that.",
    },
    {
      name: "Lisa Anderson",
      position: "Operations Director",
      company: "E-Commerce Plus",
      image: "LA",
      rating: 5,
      text: "Their response time is incredible. When we had a security concern, they were on it immediately.",
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/10 rounded-full mb-4 border border-blue-200">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider">
              Client Stories
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 text-center mb-4">
            Trusted by Industry
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
              Leaders Worldwide
            </span>
          </h2>
        </div>

        {/* Featured Testimonial - Large */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <motion.div
            className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              ></div>
            </div>

            {/* Large quote mark */}
            <div className="absolute top-8 left-8 text-white/10">
              <svg
                className="w-32 h-32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-3.313.785-5.996 3.549-5.996 7.115 0 1.655.526 3.064 1.578 4.231v6.604h6.419zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-3.313.785-5.996 3.549-5.996 7.115 0 1.655.526 3.064 1.578 4.231v6.604h6.422z" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="mb-6">
                <StarRating rating={featuredTestimonial.rating} />
              </div>

              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8 max-w-4xl">
                "{featuredTestimonial.text}"
              </p>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-white/30">
                  {featuredTestimonial.image}
                </div>
                <div>
                  <div className="text-xl font-bold text-white">
                    {featuredTestimonial.name}
                  </div>
                  <div className="text-blue-100 text-sm">
                    {featuredTestimonial.position}
                  </div>
                  <div className="text-blue-200 text-sm font-medium">
                    {featuredTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Alternating Testimonials */}
        <motion.div
          className="space-y-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Avatar and Info */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                  {testimonial.image}
                </div>
              </div>

              {/* Quote Card */}
              <div className="flex-1 bg-white rounded-2xl p-8 border-l-4 border-blue-600 shadow-lg relative">
                {/* Small quote icon */}
                <div className="absolute top-4 right-4 text-blue-100">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-3.313.785-5.996 3.549-5.996 7.115 0 1.655.526 3.064 1.578 4.231v6.604h6.419zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-3.313.785-5.996 3.549-5.996 7.115 0 1.655.526 3.064 1.578 4.231v6.604h6.422z" />
                  </svg>
                </div>

                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 font-medium">
                  "{testimonial.text}"
                </p>

                <div>
                  <div className="font-bold text-blue-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.position} • {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t-2 border-blue-200">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8">
              Trusted By Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                "TechCorp Industries",
                "Global Finance Ltd",
                "Healthcare Solutions",
                "Enterprise Systems",
                "E-Commerce Plus",
                "StartupHub Inc",
              ].map((company, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white rounded-lg border border-blue-100 text-blue-900 font-semibold hover:border-blue-500 hover:shadow-md transition-all duration-300"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
