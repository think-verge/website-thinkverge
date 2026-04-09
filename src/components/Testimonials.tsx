import { motion } from "motion/react";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    name: "(Anonymous)",
    role: "Chief Information Security Officer (CISO), Public Infrastructure Entity",
    text: "When dealing with national-scale infrastructure, data security becomes the entire foundation. Think Verge delivered a zero-trust Agentic ecosystem. They passed our most rigorous compliance and privacy audits on the very first run.",
    avatar: null
  },
  {
    name: "Manav",
    role: "VP of Operations & Digital Strategy at Fueler",
    text: "We spent a year trapped in 'POC purgatory' with standard chatbots. Think Verge came in and completely changed the paradigm. They built a secure, multi-agent workflow that autonomously executes our complex approval pipelines. We saw a 40% reduction in operational bottlenecking within the first quarter.",
    avatar: null
  },
  {
    name: "Kamla Roy",
    role: "Chief Data Officer at Drex",
    text: "Think Verge knows how to build the architecture beneath complex AI models. They overhauled our data lakehouse and deployed a high-throughput RAG infrastructure. Our internal AI now processes tens of thousands of concurrent queries daily, with zero hallucinations and flawless 99.9% uptime.",
    avatar: null
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">Outcomes that speak for themselves.</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Client Success Stories</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-brand-bg p-10 rounded-3xl border border-brand-border/10 relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 text-brand-green/10" size={48} />
              <div className="flex gap-1 mb-6 text-brand-green">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-10 leading-relaxed text-lg flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-brand-border/10">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-green shadow-sm shrink-0">
                  <User size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">{t.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
