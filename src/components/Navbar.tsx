import { motion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-brand-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img 
                src="/ThinkVerge logo.png" 
                alt="Think Verge Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const container = document.createElement('div');
                  container.className = "flex items-center gap-2";
                  container.innerHTML = `
                    <div class="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-lg shadow-brand-green/30">
                      <span class="text-white font-bold text-xl">T</span>
                    </div>
                    <span class="text-2xl font-bold tracking-tight text-gray-900">
                      Think<span class="text-brand-green"> Verge</span>
                    </span>
                  `;
                  e.currentTarget.parentNode?.appendChild(container);
                }}
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-green font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-green p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-brand-border/20 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-brand-green hover:bg-brand-bg rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="w-full btn-primary mt-4 text-center">Get Started</a>
        </motion.div>
      )}
    </nav>
  );
}
