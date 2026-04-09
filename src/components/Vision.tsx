import { motion } from "motion/react";
import { Zap, ShieldCheck, ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function Vision() {
  return (
    <section className="py-24 bg-brand-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-6">
            <Zap size={16} /> The Future of Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            The Future of Work Demands <br />
            <span className="text-brand-green">More Than Chat Bots</span>
          </h2>
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              The current enterprise AI landscape is fundamentally broken. Organizations are falling into the <span className="font-bold text-brand-green">"POC (Proof of Concept) Trap."</span> They invest millions on basic AI tools that look impressive in a demo but fail completely in real-world operations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              These fragile systems hallucinate critical information under pressure. Worst of all, they route sensitive data through foreign servers, creating massive compliance and security liabilities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Market Status Quo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2rem] border border-red-100 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8 text-red-600">
              <AlertTriangle size={24} />
              <h3 className="text-2xl font-bold">The POC Trap: Why Most Enterprise AI Fails</h3>
            </div>
            <ul className="space-y-6">
              {[
                { title: "Data Vulnerability", desc: "Prompts and institutional data are processed offshore, violating sovereign mandates." },
                { title: "Passive Generation", desc: "Chatbots that merely generate text, requiring humans to copy, paste, and execute the actual work." },
                { title: "Hallucination Risks", desc: "Systems trained on public internet garbage, leading to confidently incorrect answers in mission-critical scenarios." },
                { title: "Fragile Architecture", desc: "Inability to integrate with existing complex systems or scale beyond limited beta tests." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xs font-bold">X</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Think Verge Standard */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-green p-8 rounded-[2rem] text-white shadow-xl shadow-brand-green/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck size={24} />
              <h3 className="text-2xl font-bold">Think Verge Standard: Sovereign, Public-Scale Execution</h3>
            </div>
            <ul className="space-y-6">
              {[
                { title: "Absolute Sovereignty", desc: "100% localized, DPDP Compliant AI. Your intellectual property never leaves Indian soil." },
                { title: "Agentic Execution", desc: "Autonomous systems capable of multi-step reasoning, API triggering, and end-to-end task completion." },
                { title: "Zero-Hallucination", desc: "The system only reads your approved internal documents. No internet guessing, just 100% factual answers based on your data." },
                { title: "Public-Scale Reliability", desc: "Architected for high-concurrency, national-level data volumes with 99.9% guaranteed uptime." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-brand-light-green text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
