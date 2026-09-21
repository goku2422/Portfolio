import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skills } from '../data/skills';
import * as LucideIcons from 'lucide-react';

const Skills = () => {
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={32} /> : null;
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#020817] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Skills" />

        <div className="space-y-12">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 capitalize">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 text-center backdrop-blur-sm hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 group"
                  >
                    <div className="text-blue-400 mb-3 flex justify-center group-hover:text-blue-300 transition-colors">
                      {getIcon(skill.icon)}
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
