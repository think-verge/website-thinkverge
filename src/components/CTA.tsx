import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-green rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-green/30"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mb-32 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Build the <br /> Future of Digital Bharat
            </h2>
            <p className="text-xl text-brand-light-green mb-12 leading-relaxed">
              Stop experimenting with fragile prototypes. The window for early adoption has closed. This is the era of mandatory AI execution. Think Verge deploys secure, compliant, and scalable enterprise intelligence designed for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#contact" className="w-full sm:w-auto bg-white text-brand-green px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl text-center">
                Get Started Now
              </a>
              <a href="#contact" className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-center">
                Talk to an Expert <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
