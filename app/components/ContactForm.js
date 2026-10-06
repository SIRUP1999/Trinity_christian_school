"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(
        "https://formspree.io/f/xwlvpkpy",
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        },
      );
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-plum-dark">
            Parent / guardian name
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-2xl border border-border bg-[#f5f7fb] px-4 py-3 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/10"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-plum-dark">
            Phone number
          </label>
          <input
            name="phone"
            type="tel"
            className="w-full rounded-2xl border border-border bg-[#f5f7fb] px-4 py-3 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/10"
            placeholder="+233 ..."
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-plum-dark">
          Email address
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-border bg-[#f5f7fb] px-4 py-3 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/10"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-plum-dark">
          Subject
        </label>
        <select
          name="subject"
          className="w-full rounded-2xl border border-border bg-[#f5f7fb] px-4 py-3 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/10"
        >
          <option value="Admissions enquiry">Admissions enquiry</option>
          <option value="General question">General question</option>
          <option value="Special programmes">Special programmes</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-plum-dark">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full rounded-2xl border border-border bg-[#f5f7fb] px-4 py-3 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/10"
          placeholder="Tell us how we can help."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="primary-btn w-full justify-center disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <div className="rounded-2xl bg-green-50 border border-green-200 px-5 py-4 text-sm text-green-800">
          ✅ Message sent! We will get back to you as soon as possible.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-2xl bg-red-50 border border-red-200 px-5 py-4 text-sm text-red-800">
          ❌ Something went wrong. Please try again or call us directly.
        </div>
      )}
    </form>
  );
}
