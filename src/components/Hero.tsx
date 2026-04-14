import { motion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const trustedLogos = [
    { name: "Happy Model School", src: "/HMS.png" },
    { name: "OPHO TECH", src: "/Ophotech Logo.png" },
    { name: "Safe Trust", src: "/safetrust-logo.png", invert: true },
    { name: "Urban Eats", src: "/Urber-eats.png" },
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-light-green/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-green/40 text-brand-green font-semibold text-sm mb-6">
            <ShieldCheck size={16} /> Enterprise-Grade AI Execution
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Sovereign AI Infrastructure for <br />
            <span className="text-brand-green">
              India’s Public Sector & Enterprises
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            We design, build, and deploy secure, autonomous Agentic systems that
            execute complex workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              Get a Technical Audit <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        {/* Logo Cloud (Section 3) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 pt-12 border-t border-brand-border/10"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-70 grayscale">
            {trustedLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={`${logo.name} Logo`}
                className={`h-10 md:h-12 lg:h-14 w-auto max-w-[180px] object-contain ${
                  logo.invert ? "invert" : ""
                }`}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
