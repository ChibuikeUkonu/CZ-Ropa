'use client';

import React, { useState } from 'react';

const ContactSection = () => {
  const [success, setSuccess] = useState(false);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-light to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Contact Us
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto leading-relaxed">
            Have questions or need help? Send us a message and we'll respond quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <i className="fas fa-phone text-2xl text-accent mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Phone</p>
                  <a href="tel:+2348012345678" className="text-lg font-semibold text-primary hover:text-accent transition-colors">
                    +234 801 234 5678
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-envelope text-2xl text-accent mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                  <a href="mailto:support@czropa.com" className="text-lg font-semibold text-primary hover:text-accent transition-colors">
                    support@czropa.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-2xl text-accent mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Address</p>
                  <p className="text-lg font-semibold text-primary">
                    76 Nvuigwe Road<br className="md:hidden" />
                    Port Harcourt, Rivers State<br />
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 sr-only">Contact Form</h3>
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
                  if (json.success) {
                    setSuccess(true);
                    e.target.reset();
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white text-primary placeholder-gray-500 transition-all duration-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white text-primary placeholder-gray-500 transition-all duration-200"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white text-primary placeholder-gray-500 transition-all duration-200 resize-vertical"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-900 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-200 shadow-sm-custom hover:shadow-md-custom disabled:opacity-50"
              >
                Send Message
              </button>
              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold text-center">
                    Message sent successfully! We'll be in touch soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.308362073201!2d6.991814315013437!3d4.819251696670565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d6817f2d8e4a5%3A0x92c9c5ab3c66d0f2!2s76%20Nvuigwe%20Rd%2C%20Woji%2C%20Port%20Harcourt%2C%20Rivers%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
            className="w-full h-96 rounded-lg shadow-sm-custom border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="C&amp;Z Ropa Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

