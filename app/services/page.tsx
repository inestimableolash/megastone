import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Computer Security",
      description:
        "Comprehensive protection for your devices and systems with advanced encryption, firewall protection, and real-time monitoring.",
      features: [
        "Advanced encryption protocols",
        "Firewall configuration & management",
        "Real-time threat monitoring",
        "Endpoint protection",
        "Security audits & assessments",
      ],
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Software Quality Assurance Testing",
      description:
        "Ensure your software meets the highest quality standards with comprehensive testing services including functional, performance, and security testing.",
      features: [
        "Functional testing",
        "Performance testing",
        "Security testing",
        "Automated testing solutions",
        "Bug tracking & reporting",
      ],
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Penetration Testing",
      description:
        "Identify and address security vulnerabilities before attackers can exploit them. Our expert team simulates real-world attacks to test your defenses.",
      features: [
        "Network penetration testing",
        "Web application testing",
        "Social engineering assessments",
        "Wireless security testing",
        "Detailed vulnerability reports",
      ],
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      color: "from-blue-700 to-blue-900",
    },
    {
      title: "Vulnerability Assessment",
      description:
        "Comprehensive analysis of your systems to identify potential security weaknesses and provide actionable recommendations.",
      features: [
        "Automated vulnerability scanning",
        "Manual security reviews",
        "Risk prioritization",
        "Remediation guidance",
        "Compliance validation",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Cybersecurity Consulting",
      description:
        "Expert guidance to develop and implement comprehensive cybersecurity strategies tailored to your business needs.",
      features: [
        "Security strategy development",
        "Policy & procedure creation",
        "Risk management consulting",
        "Security architecture design",
        "Incident response planning",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Data Recovery",
      description:
        "Rapid and reliable data recovery services to restore your critical information after security incidents or system failures.",
      features: [
        "Emergency data recovery",
        "Backup & restoration services",
        "Forensic data analysis",
        "Disaster recovery planning",
        "24/7 recovery support",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      color: "from-blue-700 to-blue-900",
    },
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Comprehensive cybersecurity solutions tailored to protect your
            business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4 inline-block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Complete Security Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From prevention to recovery, we provide end-to-end cybersecurity
              services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-500 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Additional Services
            </h2>
            <p className="text-gray-600 text-lg">
              We also offer specialized services to meet your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Cybersecurity Training",
              "Online Risk Assessment",
              "Compliance Auditing",
              "Security Awareness Programs",
              "Incident Response",
              "Forensic Analysis",
              "Security Architecture",
              "Managed Security Services",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-blue-900 font-semibold">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today to discuss your security needs and get a customized
            solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 border border-white/30 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
