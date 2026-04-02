// NewsletterPopup.jsx
"use client";
import { useState, useEffect } from "react";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto top-60">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-xl"
        >
          &times;
        </button>

        {/* Newsletter Form */}
        <NewsletterForm />
      </div>
    </div>
  );
}