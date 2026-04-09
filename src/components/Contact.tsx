import { motion } from "motion/react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong. Please try again later."
  );
  const recipientEmail =
    (
      import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL as string | undefined
    )?.trim() || "info@thinkverge.in";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("Something went wrong. Please try again later.");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
      | string
      | undefined;
    if (!accessKey) {
      console.warn(
        "Missing VITE_WEB3FORMS_ACCESS_KEY. Contact form submission is disabled."
      );
      setErrorMessage(
        `Form is not configured yet. Please try again later or email us directly at ${recipientEmail}.`
      );
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const fullName = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    formData.append("access_key", accessKey);
    formData.append("to_email", recipientEmail);
    formData.append("from_name", fullName || "Think Verge Website");
    formData.append("replyto", email);
    formData.append("subject", subject || "Website Contact Form Submission");
    formData.append(
      "message",
      `Name: ${fullName}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMessage(
          "We couldn't send your message right now. Please try again shortly."
        );
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(
        "Network issue while sending message. Please try again in a moment."
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div className="lg:w-1/3 bg-brand-green p-12 text-white">
              <h3 className="text-3xl font-bold mb-8 leading-tight">
                Ready to Build the Future of Digital Bharat
              </h3>
              <p className="text-brand-light-green mb-12 text-lg">
                Stop experimenting with fragile prototypes. The window for early
                adoption has closed. This is the era of mandatory AI execution.
                Think Verge deploys secure, compliant, and scalable enterprise
                intelligence designed for you.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-light-green">
                      Email us at
                    </p>
                    <p className="font-semibold">{recipientEmail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-light-green">Visit us</p>
                    <p className="font-semibold">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3 p-12 bg-white relative">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600 max-w-sm">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-brand-green font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Full Name
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border/50 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Email Address
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border/50 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Subject
                    </label>
                    <select
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border/50 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all appearance-none bg-white"
                    >
                      <option>AI Consulting</option>
                      <option>Custom Development</option>
                      <option>SaaS Partnership</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-border/50 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
                      <AlertCircle size={20} />
                      <p className="text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    disabled={status === "loading"}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                    {status !== "loading" && <Send size={20} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
