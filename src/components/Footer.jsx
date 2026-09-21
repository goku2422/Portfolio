import { motion } from 'framer-motion';
import { GitBranch, Link, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: GitBranch, href: 'https://github.com/goku2422', label: 'GitHub' },
    { icon: Link, href: 'https://linkedin.com/in/suraj-choudhary74b691316', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/yournumber', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#020817] border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left - Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl font-bold mb-2">
              <span className="text-white">Suraj</span>
              <span className="text-blue-500">.</span>
            </div>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-gray-400 hover:text-blue-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-blue-500/20 mt-8 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2026 Suraj Choudhary. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
