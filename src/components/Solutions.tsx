import { motion } from "motion/react";
import { Layers, Database, ShieldCheck, TrendingUp } from "lucide-react";

const solutions = [
  {
    title: "VergeFlow AI",
    tagline: "Intelligent Workflow Automation",
    desc: "Automate repetitive tasks with our proprietary LLM-powered engine that learns your business processes.",
    icon: <Layers className="text-brand-green" />,
    features: ["Natural Language Processing", "Autonomous Task Execution", "Integration with 100+ Apps"]
  },
  {
    title: "InsightCore",
    tagline: "Predictive Analytics Platform",
    desc: "Gain a competitive edge with real-time market predictions and customer behavior analysis.",
    icon: <TrendingUp className="text-brand-green" />,
    features: ["Real-time Data Streams", "Anomaly Detection", "Automated Reporting"]
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">Our SaaS Products</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Built-in Intelligence for <span className="text-brand-green">Modern Enterprises</span></h3>
          </div>
          <button className="btn-secondary">View All Products</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-bg rounded-[2rem] p-12 border border-brand-border/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light-green/20 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-brand-green/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                  {solution.icon}
                </div>
                <span className="text-brand-green font-bold text-sm uppercase tracking-wider">{solution.tagline}</span>
                <h4 className="text-3xl font-bold mt-2 mb-6">{solution.title}</h4>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {solution.desc}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <ShieldCheck size={20} className="text-brand-green" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="btn-primary w-full md:w-auto">Get Started with {solution.title}</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
