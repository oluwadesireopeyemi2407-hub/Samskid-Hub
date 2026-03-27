import { motion, useScroll, useTransform } from "motion/react";
import { 
  Camera, 
  Shield, 
  Heart, 
  Briefcase, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Zap,
  Clock,
  Layout,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? "bg-black/40" : "bg-transparent border-transparent"}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">N</div>
            <span className="font-display font-bold text-xl tracking-tight text-white">NEXUS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-6 overflow-hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-zinc-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-white text-black px-5 py-3 rounded-2xl text-base font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-mesh opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase text-blue-400 mb-6">
            The Future of Multi-Service
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="text-gradient">We build experiences.</span><br />
            <span className="text-gradient opacity-70">We power everyday life.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A premium multi-service company handling everything from high-end stage production to essential home and daily services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group">
              Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto glass text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              View Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, items, color }: any) => {
  // Map color strings to tailwind classes
  const colorMap = {
    blue: {
      bg: "bg-blue-500/10",
      bgHover: "group-hover:bg-blue-500/20",
      border: "group-hover:border-blue-500/30",
      text: "group-hover:text-blue-400",
      dot: "bg-blue-500/50"
    },
    purple: {
      bg: "bg-purple-500/10",
      bgHover: "group-hover:bg-purple-500/20",
      border: "group-hover:border-purple-500/30",
      text: "group-hover:text-purple-400",
      dot: "bg-purple-500/50"
    },
    pink: {
      bg: "bg-pink-500/10",
      bgHover: "group-hover:bg-pink-500/20",
      border: "group-hover:border-pink-500/30",
      text: "group-hover:text-pink-400",
      dot: "bg-pink-500/50"
    },
    orange: {
      bg: "bg-orange-500/10",
      bgHover: "group-hover:bg-orange-500/20",
      border: "group-hover:border-orange-500/30",
      text: "group-hover:text-orange-400",
      dot: "bg-orange-500/50"
    }
  };

  const styles = colorMap[color];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative glass rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 ${styles.bg} blur-3xl -mr-16 -mt-16 ${styles.bgHover} transition-all duration-500`} />
      
      <div className={`w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 border border-white/5 ${styles.border} transition-colors`}>
        <Icon className={`text-zinc-400 ${styles.text} transition-colors`} size={28} />
      </div>

      <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-gradient transition-all">{title}</h3>
      
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-300 transition-colors">
            <div className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
            <span className="text-sm font-medium">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Learn More</span>
        <ChevronRight size={16} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Creative",
      icon: Camera,
      color: "blue",
      items: [
        "Theatre & Film Set Building",
        "Digital Scenography (LED)",
        "Stage & Event Lighting",
        "Creative Direction"
      ]
    },
    {
      title: "Technical",
      icon: Shield,
      color: "purple",
      items: [
        "CCTV & Surveillance",
        "Telecom Systems",
        "Electric Fencing",
        "Professional House Wiring"
      ]
    },
    {
      title: "Lifestyle",
      icon: Heart,
      color: "pink",
      items: [
        "Birthday Surprises",
        "On-demand Delivery",
        "Grocery Shopping",
        "Premium Laundry Services"
      ]
    },
    {
      title: "Business",
      icon: Briefcase,
      color: "orange",
      items: [
        "Professional Printing",
        "Catering & Event Planning",
        "Merchant Services",
        "Facility Maintenance"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Expertise</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From high-end production to your daily essentials, we provide seamless solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              icon={service.icon}
              title={service.title}
              items={service.items}
              color={service.color as any}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "Grand Theatre Set", category: "Creative", image: "https://picsum.photos/seed/theatre/800/600" },
    { title: "Smart City Security", category: "Technical", image: "https://picsum.photos/seed/security/800/600" },
    { title: "Luxury Event Gala", category: "Business", image: "https://picsum.photos/seed/event/800/600" },
    { title: "Corporate Network", category: "Technical", image: "https://picsum.photos/seed/network/800/600" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Portfolio</h2>
            <p className="text-zinc-400">A glimpse into our world-class executions.</p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="min-w-[300px] md:min-w-[400px] aspect-[4/3] rounded-3xl overflow-hidden relative group snap-start"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-display font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { title: "Fast Delivery", desc: "We value your time. Our systems are optimized for rapid execution without compromising quality.", icon: Zap },
    { title: "Reliable Service", desc: "Trust is our foundation. We stand by our work and ensure every project meets our high standards.", icon: CheckCircle2 },
    { title: "All-in-One", desc: "Why juggle multiple vendors? We handle everything from high-end tech to daily chores.", icon: Layout },
    { title: "24/7 Support", desc: "Our team is always on standby to assist you with any request, anytime.", icon: Clock },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Why leading brands and households choose <span className="text-blue-500">Nexus</span>.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <f.icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold">{f.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl glass p-8 relative z-10 overflow-hidden">
               <img 
                src="https://picsum.photos/seed/nexus-team/800/800" 
                alt="Our Team" 
                className="w-full h-full object-cover rounded-2xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Consultation", desc: "We discuss your needs and vision to create a tailored plan." },
    { title: "Strategy", desc: "Our experts design the perfect solution for your specific requirements." },
    { title: "Execution", desc: "We bring the plan to life with precision and world-class quality." },
    { title: "Delivery", desc: "Final handover and ongoing support to ensure complete satisfaction." },
  ];

  return (
    <section id="process" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">How It Works</h2>
          <p className="text-zinc-400">Simple steps to exceptional results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full glass mx-auto flex items-center justify-center text-2xl font-bold border-blue-500/30 text-blue-400">
                0{i + 1}
              </div>
              <h4 className="text-xl font-bold">{step.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Sarah Johnson", role: "Event Director", text: "Nexus transformed our stage production. Their attention to detail in set building and lighting is unmatched.", avatar: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Michael Chen", role: "Homeowner", text: "From CCTV installation to laundry, they handle everything. It's like having a personal concierge for life.", avatar: "https://i.pravatar.cc/150?u=michael" },
    { name: "Elena Rodriguez", role: "Business Owner", text: "Their technical expertise saved our network infrastructure. Reliable, fast, and professional.", avatar: "https://i.pravatar.cc/150?u=elena" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">What Clients Say</h2>
          <div className="flex justify-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="glass p-8 rounded-3xl space-y-6">
              <p className="text-zinc-300 italic leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold">{r.name}</h5>
                  <p className="text-xs text-zinc-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass p-10 md:p-16 rounded-[3rem] relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Ready to elevate your experience?</h2>
            <p className="text-zinc-400">Request a service or consultation today.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Service Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                <option className="bg-zinc-900">Creative Production</option>
                <option className="bg-zinc-900">Technical Systems</option>
                <option className="bg-zinc-900">Lifestyle Services</option>
                <option className="bg-zinc-900">Business Solutions</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Message</label>
              <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
            </div>
            <button className="md:col-span-2 bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-all">
              Send Request
            </button>
          </form>
        </div>
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] -z-0" />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">N</div>
              <span className="font-display font-bold text-xl tracking-tight text-white">NEXUS</span>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Premium multi-service provider dedicated to building world-class experiences and powering your everyday life.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Contact</h5>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-center gap-3"><Phone size={14} /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-3"><Mail size={14} /> hello@nexus.com</li>
              <li className="flex items-center gap-3"><Layout size={14} /> 123 Innovation Way, Tech City</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium uppercase tracking-widest">
          <p>© 2026 Nexus Multi-Services. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/yournumber"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 text-white"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
