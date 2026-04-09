import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover – Strategic Assessment",
    desc: "Evaluate business objectives, technical environment, and organizational challenges to establish priorities and identify high-value opportunities."
  },
  {
    number: "02",
    title: "Design – Solution Architecture",
    desc: "Develop roadmap with specific milestones, resource allocation, and execution plan aligned to ROI targets and operational constraints."
  },
  {
    number: "03",
    title: "Deliver – Implementation & Support",
    desc: "Deploy solutions through staged delivery, conduct validation testing, provide team enablement, and maintain ongoing optimization."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">How We Work?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">A Proven Path to <span className="text-brand-green">AI Success</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-brand-bg shadow-xl mb-8 group-hover:bg-brand-green group-hover:text-white transition-all duration-300 mx-auto lg:mx-0">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
