// components/WhyPartner.jsx
"use client";

import { FaCheckCircle } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function WhyPartner() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Why Partner with{" "}
            <span className="text-yellow-400">Setlite Engineers Ltd.</span>?
          </h2>
          <ul className="space-y-4">
            {[
              "Nationwide Service – Supporting Indian Railways & Metro projects across the country",
              "End-to-End Maintenance – From vehicles to engines, electricals, and attachments",
              "Authorised AVTEC Dealer – Assured quality with genuine spares & certified support",
              "Skilled In-House Experts – Faster turnaround time, reliable workmanship",
              "Safety & Compliance Driven – Strict adherence to railway and metro standards",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <FaCheckCircle className="text-yellow-400 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 rounded-2xl p-10 shadow-xl border border-yellow-400/20">
          <h3 className="text-3xl font-semibold text-yellow-400 mb-6">
            Industries We Serve
          </h3>
          <ul className="space-y-3 text-white text-lg">
            {[
              "Indian Railways",
              "Metro Rail Corporations",
              "Infrastructure Development Projects",
              "Utility & Industrial Sectors",
            ].map((industry, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 transition-colors cursor-pointer"
              >
                {industry}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-white text-lg leading-relaxed">
            <span className="text-yellow-400 font-semibold">
              Setlite Engineers Ltd.
            </span>{" "}
            – Powering Rail & Metro Operations Across India. We combine
            engineering expertise, reliable service, and authorised dealership
            support to keep India’s critical transport infrastructure moving.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919716001002?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg text-center hover:bg-green-600 transition"
            >
              💬 WhatsApp Us
            </a>

            {/* Call Dropdown */}
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between gap-2 px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                📞 Call Us
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

            {open && (
  <div
    className="absolute mt-2 w-60 rounded-xl shadow-2xl bg-white ring-1 ring-black/10 z-20 animate-fade-slide max-h-60 overflow-y-auto"
  >
    <div className="py-2">
      {[
        { label: "+91-11-23311111", number: "+911123311111" },
        { label: "+91-11-23321111", number: "+911123321111" },
        { label: "+91-11-23721111", number: "+911123721111" },
        // Add more numbers here if needed
      ].map((phone, i) => (
        <a
          key={i}
          href={`tel:${phone.number}`}
          onClick={() => setOpen(false)}
          className="block px-4 py-2.5 text-gray-800 hover:bg-yellow-400 hover:text-black transition-colors rounded-md"
        >
          {phone.label}
        </a>
      ))}
    </div>
  </div>
)}

            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-fade-slide {
          animation: fadeSlide 0.2s ease-out;
        }
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
