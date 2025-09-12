"use client";
import React from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import Footer from "../components/footer";

const ContactPage = () => {
  return (
    <div className="text-white min-h-screen font-sans bg-gradient-to-r from-gray-900 via-black to-gray-950">
      {/* Navbar */}
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          src="/contvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Connect With the{" "}
            <span className="text-yellow-400">Power of</span>{" "}
            <br />
            <span className="text-yellow-400">Reliability</span>
          </h1>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <div className="flex items-center gap-4 text-gray-300">
              <Phone size={24} />
              <div>
                <p className="font-medium">Phone</p>
                <p>+91-11-23311111 | +91-11-23211111</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <Mail size={24} />
              <div>
                <p className="font-medium">Email</p>
                <p>sales@setlite.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <MapPin size={24} />
              <div>
                <p className="font-medium">Connect With Us</p>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
            {/* Google Map Embed */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
              <iframe
                title="Setlite Engineers Limited Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.634928933656!2d77.2216996!3d28.6254697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb363fffffff%3A0xc2697faff125b2e7!2sSetlite%20Engineers%20Limited!5e0!3m2!1sen!2sin!4v1691375512824!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#222427] p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-[#222427]">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black placeholder-gray-600 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-44 px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center mb-16">
            <div className="w-full max-w-4xl relative">
              <h2 className="text-5xl font-bold text-center text-white">
                Our <span className="text-yellow-400">Locations</span>
              </h2>
              <div className="absolute left-0 right-0 bottom-[-30] h-1 bg-yellow-400 "></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {/* Warehouse */}
            <div className="flex items-start gap-4 text-gray-300">
              <MapPin size={24} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-bold text-white">Warehouse</h3>
                <p>Kashmere Gate 1/1 Nicholson Road, Kashmere Gate, North Delhi, Delhi – 110006</p>
              </div>
            </div>

            {/* Head Office */}
            <div className="flex items-start gap-4 text-gray-300">
              <MapPin size={24} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-bold text-white">Head Office (Operational)</h3>
                <p>5-G, 5th Floor, Vandana Building, 11 Tolstoy Marg, Connaught Place, New Delhi 110001</p>
              </div>
            </div>

            {/* Equipment Depot */}
            <div className="flex items-start gap-4 text-gray-300">
              <MapPin size={24} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-bold text-white">Equipment Depot</h3>
                <p>Village Ganauli, beside Pratap Hotel, Dabok, Udaipur, Rajasthan – 313001</p>
              </div>
            </div>

            {/* Service Center */}
            <div className="flex items-start gap-4 text-gray-300">
              <MapPin size={24} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-bold text-white">Service Center</h3>
                <p>Plot No.-13, Sector-59, HUDA Ballabgarh, Faridabad, Haryana 121004</p>
              </div>
            </div>

            {/* Regional Office */}
            <div className="flex items-start gap-4 text-gray-300">
              <MapPin size={24} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-bold text-white">Regional Office</h3>
                <p>104, Hiran Magri, Sector 4, Hiran Magri, Udaipur, Rajasthan – 313002</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
