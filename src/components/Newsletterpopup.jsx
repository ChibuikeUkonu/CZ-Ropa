"use client";
import { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewed, setViewed] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (viewed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [viewed]);

  const handleSubscribe = async () => {
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/newsletter/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Subscribed successfully!");
        setEmail("");

        // close AFTER success
        setTimeout(() => {
          setIsOpen(false);
          setViewed(true);
        }, 1500);
      } else {
        setStatus(data.error || "Subscription failed");
      }
    } catch (err) {
      setStatus("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-md max-w-md w-full mx-4 p-6 relative">

        <button
          onClick={() => {
            setIsOpen(false);
            setViewed(true);
          }}
          className="absolute top-4 right-4 text-gray-400"
        >
          ✕
        </button>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-3">Stay in the loop</h3>

          <p className="text-gray mb-4 text-sm">
            Get updates and offers
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg mb-3"
          />

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>

          {status && (
            <p className="text-sm mt-3 text-center">
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}