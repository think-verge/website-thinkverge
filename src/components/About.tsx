import { motion } from "motion/react";
import { ShieldCheck, Rocket, TrendingUp } from "lucide-react";

const edgeItems = [
  {
    icon: <ShieldCheck className="text-brand-green" />,
    title: "Absolute Data Sovereignty",
    desc: "Your data is your most valuable asset. Our infrastructure is 100% localized. Your IP never crosses international borders. We are strictly aligned with the Digital Personal Data Protection (DPDP) Act, ensuring complete legal safety."
  },
  {
    icon: <Rocket className="text-brand-green" />,
    title: "Production-First Reliability",
    desc: "We do not build fragile beta tests. Our systems are load-tested and over-engineered to handle massive, national-scale data volumes. We guarantee 99.9% deployed uptime, ensuring your operations never halt."
  },
  {
    icon: <TrendingUp className="text-brand-green" />,
    title: "Transparent Engineering",
    desc: "Our algorithms operate with full operational visibility. We provide crystal-clear audit trails, explainable AI reasoning, and granular access logs from the discovery phase to final delivery."
  },
  {
    icon: <TrendingUp className="text-brand-green" />,
    title: "Measurable ROI",
    desc: "We do not deploy technology for the sake of technology. Our ultimate metric is your balance sheet. We eradicate manual bottlenecks, multiplying your operational capacity without requiring a proportional increase in human headcount."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">Why Enterprises Trust Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Enterprise AI is a matter of <span className="text-brand-green">trust, compliance, and reliability.</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We dominate the market because we refuse to compromise on the foundational pillars of enterprise security.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {edgeItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-brand-border/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-light-green/30 rounded-xl flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
