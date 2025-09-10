import { motion } from 'framer-motion';
import osamuImg from '../assets/osamu.jpg';
import neilImg from '../assets/neil.jpg';
import ikigaiImg from '../assets/ikigai.jpg';

const hobbies = [
  {
    title: 'No Longer Human',
    author: 'Osamu Dazai',
    image: osamuImg
  },
  {
    title: "Neverwhere Stardust",
    author: 'Neil Gaiman',
    image: neilImg
  },
  {
    title: 'Ikigai',
    author: 'Héctor García & Francesc Miralles',
    image: ikigaiImg
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Hobbies = () => {
  return (
    <section className="py-20 md:py-24 bg-secondary-dark">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          My <span className="text-accent-teal">Hobbies</span>
        </motion.h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Beyond coding, I enjoy diving into compelling stories and concepts. Here are a few books that have recently captured my imagination.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="bg-primary-dark rounded-lg overflow-hidden shadow-lg group"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="h-80 w-full bg-gray-700 flex items-center justify-center overflow-hidden">
                <img 
                  src={hobby.image} 
                  alt={hobby.title} 
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{hobby.title}</h3>
                <p className="text-gray-400 mt-1">{hobby.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
