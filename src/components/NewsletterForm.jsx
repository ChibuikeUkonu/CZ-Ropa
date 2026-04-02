// NewsletterForm.jsx
"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("Thank you for subscribing! Stay stylish.");
      setEmail("");
    } catch (error) {
      setStatus("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
      {/* Heading */}
      <h1 className="text-1xl font-bold text-center text-gray-900">
        Subscribe to our Newsletter
      </h1>

      {/* Attractive write-up */}
      <p className="text-center text-gray-600 text-sm">
        Be the first to discover our latest collections, exclusive deals, and style tips curated just for you. Elevate your wardrobe and stay ahead in fashion!
      </p>

      {/* Message area with reserved space */}
      <div className="min-h-[1.5rem] text-center text-sm">
        {status && (
          <span
            className={`${
              status.includes("failed") ? "text-red-600" : "text-green-600"
            }`}
          >
            {status}
          </span>
        )}
      </div>

      {/* Email input */}
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />

      {/* Subscribe button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors disabled:bg-gray-400"
      >
        {loading ? "Submitting..." : "Subscribe"}
      </button>
    </form>
  );
}