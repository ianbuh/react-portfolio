import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="h-screen bg-secondary-dark flex flex-col items-center justify-center text-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-8xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-lg md:text-2xl text-gray-400 mb-8">
          Have a project in mind or just want to say hi?
        </p>
        <a
          href="mailto:paul.faustino1424@gmail.com"
          className="text-2xl md:text-5xl font-bold text-accent-teal hover:underline"
        >
          paul.faustino1424@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
