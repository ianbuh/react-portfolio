import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary-dark">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-4xl leading-relaxed text-gray-300"
        >
          I'm a passionate developer with a focus on creating beautiful, functional,
          and user-centric digital experiences. I'm always eager to learn new
          technologies and contribute to innovative projects.
        </motion.p>
      </div>
    </section>
  );
};

export default About;