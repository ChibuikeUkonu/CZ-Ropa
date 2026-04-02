'use client';

import React, { useState, useRef } from 'react';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen bg-gradient-to-br from-dark via-primary to-accent flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-5xl w-full bg-light/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-light/20 flex flex-col gap-10">
        {/* Section Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Contact Us
          </h1>
          <p className="text-light/70 text-lg md:text-xl">
            Have questions or need help? Send us a message and we’ll respond quickly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-light text-center">
          <div className="flex flex-col items-center bg-light/20 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <i className="fas fa-phone text-3xl mb-2 text-secondary"></i>
            <span className="font-semibold">+234 801 234 5678</span>
          </div>
          <div className="flex flex-col items-center bg-light/20 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <i className="fas fa-envelope text-3xl mb-2 text-secondary"></i>
            <span className="font-semibold">support@czropa.com</span>
          </div>
          <div className="flex flex-col items-center bg-light/20 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <i className="fas fa-map-marker-alt text-3xl mb-2 text-secondary"></i>
            <span className="font-semibold">
  <a href="https://maps.app.goo.gl/WwcGTMged2ic7TFr7">
    <p>76 Nvuigwe road, Port Harcourt, River Nigeria</p></a>

            </span>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.308362073201!2d6.991814315013437!3d4.819251696670565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d6817f2d8e4a5%3A0x92c9c5ab3c66d0f2!2s76%20Nvuigwe%20Rd%2C%20Woji%2C%20Port%20Harcourt%2C%20Rivers%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="C&Z Ropa Office Map"
          ></iframe>
        </div>

        {/* Contact Form (Web3Forms) */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const data = new FormData(e.target);

            try {
              const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  access_key: 'd35c9462-c9c9-491c-aa3d-4d74084de468',
                  name: data.get('name'),
                  email: data.get('email'),
                  message: data.get('message'),
                  subject: 'New Contact Form Submission',
                }),
              });
              const json = await res.json();
              if (json.success) setSuccess(true);
            } catch (err) {
              console.error(err);
            }
          }}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-light/20 text-light placeholder-light/60 outline-none focus:ring-2 focus:ring-secondary"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-light/20 text-light placeholder-light/60 outline-none focus:ring-2 focus:ring-secondary"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-4 rounded-xl bg-light/20 text-light placeholder-light/60 outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            type="submit"
            className="w-full bg-secondary text-dark font-bold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-500 mt-2 text-center font-semibold">
              Message sent successfully!
            </p>
          )}
        </form>

        {/* WhatsApp Live Chat */}
        <a
          href="https://wa.me/2349165933656"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white hover:scale-110 transition-transform duration-300"
          title="Chat with us on WhatsApp"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;