import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About = () => {
  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '10+', label: 'Projects' },
    { value: '5+', label: 'Technologies' },
    { value: '100%', label: 'Passion for Development' },
  ];

  return (
    <section id="about" className="py-20 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me"
          subtitle="Turning ideas into modern digital experiences."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer focused on building modern, scalable and user-friendly web applications. I enjoy transforming ideas into clean and functional digital experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-6">
                With expertise in both frontend and backend technologies, I create seamless applications that solve real-world problems. I'm constantly learning and adapting to new technologies to deliver the best solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  className="text-4xl font-bold text-blue-500 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
