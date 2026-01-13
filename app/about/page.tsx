import React from "react";

export default function AboutPage() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Security First",
      description: "We prioritize your security above all else, implementing the most advanced protection measures.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships based on trust and results.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "We stay ahead of threats by continuously evolving our methods and technologies.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Excellence",
      description: "We deliver nothing but the highest quality service and support to every client.",
    },
  ];

  const team = [
    { name: "John Smith", role: "CEO & Founder", image: "JS" },
    { name: "Sarah Johnson", role: "Chief Security Officer", image: "SJ" },
    { name: "Michael Chen", role: "Head of Operations", image: "MC" },
    { name: "Emily Davis", role: "Lead Security Analyst", image: "ED" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                                linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About Megastone
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Protecting businesses from cyber threats with cutting-edge security solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4 inline-block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Securing Your Digital Future
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Megastone, we are dedicated to providing world-class cybersecurity
                solutions that protect your business from evolving digital threats. With
                over a decade of experience, we've built a reputation for excellence,
                innovation, and unwavering commitment to our clients' security.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is simple: to make cybersecurity accessible, effective, and
                reliable for businesses of all sizes. We combine advanced technology with
                expert knowledge to deliver comprehensive protection that gives you peace
                of mind.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">500+</div>
                    <div className="text-blue-100 text-sm">Clients Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">10+</div>
                    <div className="text-blue-100 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-blue-100 text-sm">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-blue-100 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4 inline-block">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our core values guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4 inline-block">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Meet the Experts
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A team of certified professionals dedicated to your security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's discuss how we can protect your business from cyber threats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 border border-white/30 transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
