import { motion } from "motion/react";

const stats = [
  { label: "Enterprise Projects Successfully Delivered", value: "20+" },
  { label: "Lines of Code Deployed to Production", value: "1M+" },
  { label: "AI, ML, & Data Engineering Experts", value: "10+" },
  { label: "Secure & Compliant Agentic Workflows", value: "100%" }
];

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-brand-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4">Engineering scale. Delivering precision.</p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our infrastructures are engineered to deliver measurable returns on operational efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <p className="text-4xl md:text-5xl font-bold text-brand-green mb-3 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
              <p className="text-gray-600 font-medium text-sm leading-tight max-w-[200px] mx-auto">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
