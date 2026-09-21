import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={40} /> : null;
  };

  return (
    <section id="services" className="py-20 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Services" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <motion.div
                className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-2" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
