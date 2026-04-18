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
      const res = await fetch('http://localhost:5000/api/newsletter/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus(data.error || "Subscription failed. Please try again.");
      }
    } catch (error) {
      setStatus("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-light to-white">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray mb-8 leading-relaxed">
            Subscribe to our newsletter for exclusive offers and the latest trends.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white text-primary placeholder-gray-500 transition-all duration-200"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-gray-900 focus:ring-2 focus:ring-primary/50 transition-all duration-200 shadow-sm-custom disabled:opacity-50 whitespace-nowrap"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            {status && (
              <p className={`text-sm mt-2 text-center ${status.includes("Thank") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

