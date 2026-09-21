import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Link, GitBranch, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sc5544221@gmail.com', href: 'mailto:sc5544221@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8955606643', href: 'tel:+918955606643' },
    { icon: MapPin, label: 'Location', value: 'India', href: '#' },
    { icon: Link, label: 'LinkedIn', value: 'linkedin.com/in/suraj-choudhary-74b691316', href: 'https://linkedin.com/in/suraj-choudhary-74b691316' },
    { icon: GitBranch, label: 'GitHub', value: 'github.com/goku2422', href: 'https://github.com/goku2422' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's build something amazing together."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href !== '#' ? '_blank' : undefined}
                    rel={item.href !== '#' ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-500/10 transition-colors group"
                  >
                    <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/30 group-hover:border-blue-500/50 transition-colors">
                      <item.icon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#020817] border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#020817] border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#020817] border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#020817] border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
