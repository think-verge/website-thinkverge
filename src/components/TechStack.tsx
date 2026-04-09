import { motion } from "motion/react";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const SLIDE_INTERVAL_MS = 3000;

const techSlides = [
  {
    name: "Gemma",
    logo: "https://cdn.simpleicons.org/google/34A853",
    caption: "Open lightweight model family optimized for efficient inference and practical deployment."
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
    caption: "Scalable cloud platform powering secure data, compute, and AI infrastructure."
  },
  {
    name: "Gemini",
    logo: "https://cdn.simpleicons.org/googlegemini/8E75B2",
    caption: "Multimodal model stack for reasoning, generation, and enterprise agent workflows."
  },
  {
    name: "Snowflake",
    logo: "https://cdn.simpleicons.org/snowflake/29B5E8",
    caption: "Unified data cloud built for analytics, governed sharing, and AI-ready pipelines."
  },
  {
    name: "Vertex AI",
    logo: "https://cdn.simpleicons.org/googlecloud/0F9D58",
    caption: "Managed ML platform for training, deploying, and operating production-grade AI."
  }
];

export default function TechStack() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true
  });

  const startAutoSlide = useCallback(() => {
    if (!emblaApi) return undefined;

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, SLIDE_INTERVAL_MS);

    return timer;
  }, [emblaApi]);

  useEffect(() => {
    const timer = startAutoSlide();

    if (!timer) return;
    return () => window.clearInterval(timer);
  }, [startAutoSlide]);

  return (
    <section className="py-24 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">Our Tech Stack</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Powered by the Modern AI & Data Stack</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We don't rely on black-box solutions. We build on the most secure, scalable, and cutting-edge open-source and enterprise frameworks available.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {techSlides.map((slide) => (
                <div key={slide.name} className="pl-6 flex-[0_0_100%] md:flex-[0_0_50%]">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="group relative overflow-hidden rounded-[28px] border border-emerald-200/70 bg-gradient-to-br from-white via-emerald-50/45 to-slate-50 p-8 md:p-10 min-h-[300px] md:min-h-[320px] text-center flex flex-col items-center justify-center"
                  >
                    <div className="relative inline-flex items-center rounded-full border border-emerald-300/60 bg-white/80 px-3 py-1 text-[10px] md:text-xs font-semibold tracking-[0.18em] uppercase text-emerald-700 mb-5">
                      Core Technology
                    </div>
                    <img
                      src={slide.logo}
                      alt={`${slide.name} logo`}
                      className="relative h-16 md:h-20 w-auto mx-auto object-contain mb-5 saturate-125"
                      referrerPolicy="no-referrer"
                    />
                    <h4 className="relative text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
                      {slide.name}
                    </h4>
                    <div className="relative w-16 h-[2px] bg-emerald-500/70 rounded-full mb-4" />
                    <p className="relative text-sm md:text-base text-slate-600 leading-relaxed max-w-sm">
                      {slide.caption}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
