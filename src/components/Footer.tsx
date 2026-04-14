import { Linkedin, Twitter, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.svg" 
                alt="Think Verge Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const container = document.createElement('div');
                  container.className = "flex items-center gap-2";
                  container.innerHTML = `
                    <div class="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                      <span class="text-white font-bold">T</span>
                    </div>
                    <span class="text-xl font-bold tracking-tight text-gray-900">
                      Think<span class="text-brand-green"> Verge</span>
                    </span>
                  `;
                  e.currentTarget.parentNode?.appendChild(container);
                }}
              />
            </div>
            <p className="text-gray-500 leading-relaxed">
              Empowering the next generation of businesses with intelligent AI solutions and scalable SaaS platforms.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Strategic Research &amp; Analysis</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Data Structuring &amp; Analysis</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Secure Chatbot Deployment</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Autonomous Agent Creation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Computer Vision Solutions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Managed Cloud Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-6">Stay updated with the latest AI trends and insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded-lg border border-brand-border/50 focus:border-brand-green outline-none"
              />
              <button className="bg-brand-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-green/90">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Think Verge AI. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 text-sm hover:text-brand-green">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-brand-green">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
