import { motion } from 'framer-motion';
import { GitBranch, Link, Mail, MessageCircle, Download } from 'lucide-react';
import profileImage from '../assets/images/profile.jpg';

const Hero = () => {
  const socialLinks = [
    { icon: GitBranch, href: 'https://github.com/goku2422', label: 'GitHub' },
    { icon: Link, href: 'https://linkedin.com/in/suraj-choudhary-74b691316', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/918955606643', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:sc5544221@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#020817]">
        {/* Star particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Radial glow */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Geometric shapes at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-30">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              className="text-blue-500/20"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="text-blue-500">Suraj</span>{' '}
              <span className="text-white">Choudhary</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-blue-400 text-xl md:text-2xl font-semibold mb-6"
            >
              Full Stack Developer | MERN Stack
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed"
            >
              Full Stack Developer with experience in MERN stack, REST API development, database management, and building high-performance web applications.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center lg:justify-start space-x-4 mb-8"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/Suraj_Choudhary_Resume.pdf"
                download="Suraj_Choudhary_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 text-center"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-blue-500 text-white rounded-full font-semibold hover:bg-blue-500/10 transition-colors text-center"
              >
                Contact Me →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                style={{ width: '420px', height: '420px' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
              </motion.div>

              {/* Inner glowing ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-purple-500/30"
                style={{ width: '380px', height: '380px', top: '20px', left: '20px' }}
              />

              {/* Profile image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative z-10 w-[360px] h-[360px] rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl shadow-blue-500/20"
                style={{ top: '30px', left: '30px' }}
              >
                <img
                  src={profileImage}
                  alt="Suraj Choudhary"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Glow effect behind image */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 z-0 rounded-full bg-blue-500/20 blur-3xl"
                style={{ width: '400px', height: '400px', top: '10px', left: '10px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
