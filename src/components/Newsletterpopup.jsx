"use client";
import { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (viewed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds delay, less intrusive

    return () => clearTimeout(timer);
  }, [viewed]);

  const closePopup = () => {
    setIsOpen(false);
    setViewed(true); // Don't show again this session
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-md max-w-md w-full mx-4 p-6 relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          aria-label="Close"
        >
          <i className="fas fa-times text-lg"></i>
        </button>
        <div className="text-center">
          <h3 className="text-xl font-bold text-primary mb-3">
            Stay in the loop
          </h3>
          <p className="text-gray mb-6 text-sm leading-relaxed">
            Get the latest fashion updates and exclusive offers.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white text-primary placeholder-gray-500 transition-all"
              onKeyPress={(e) => {
                if (e.key === 'Enter') closePopup();
              }}
            />
            <button
              onClick={closePopup}
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors shadow-sm-custom"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

