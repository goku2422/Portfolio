import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
