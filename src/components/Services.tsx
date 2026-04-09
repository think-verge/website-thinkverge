import { motion } from "motion/react";
import { Search, Database, Bot, Cpu, Eye, Cloud } from "lucide-react";

const services = [
  {
    icon: <Search size={32} />,
    title: "Strategic Research & Analysis",
    desc: "Do not build blindly. We begin by auditing your existing technical debt, identifying high-ROI use cases, and mapping your regulatory constraints. We deliver a comprehensive blueprint for Sovereign AI deployment that aligns perfectly with your executive objectives.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Database size={32} />,
    title: "Data Structuring & Analysis",
    desc: "AI is only as intelligent as the data feeding it. Raw, unstructured information is a liability. We deploy automated pipelines to ingest, clean, categorize, and vectorize your data.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <Bot size={32} />,
    title: "Secure Chatbot Deployment",
    desc: "Deploy intelligent, role-based conversational interfaces across your organization. Our secure chatbot deployment ensures that people only access the information they are authorized to see.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: <Cpu size={32} />,
    title: "Autonomous Agent Creation",
    desc: "We build AI that actually executes your workflows. We engineer digital workflows and multi-modal agentic AI that integrate with your existing systems to execute complex workflows on their own.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: <Eye size={32} />,
    title: "Computer Vision Solutions",
    desc: "Giving your systems the power to see, understand, and act in real time. We integrate visual AI into your camera feeds to automate real-time monitoring, anomaly detection, and public safety operations.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: <Cloud size={32} />,
    title: "Managed Cloud Infrastructure",
    desc: "Secure, high-performance cloud solutions designed specifically to run your AI solutions smoothly. We set up and manage secure, high-performance cloud environments built specifically to handle heavy AI workloads without slowing down.",
    color: "bg-cyan-50 text-cyan-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transforming complex operations into secure, AI-ready foundations.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-brand-bg p-10 rounded-3xl border border-brand-border/10 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 leading-tight">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
