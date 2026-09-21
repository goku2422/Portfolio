import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { projects } from '../data/projects';
import { GitBranch, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-500/5 border border-blue-500/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-[#0b1329] overflow-hidden">
                {project.image ? (
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <p className="text-gray-400 text-xs">Project Preview</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-blue-500 text-white rounded-lg hover:bg-blue-500/10 transition-colors text-sm font-medium"
                  >
                    <GitBranch size={16} />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
