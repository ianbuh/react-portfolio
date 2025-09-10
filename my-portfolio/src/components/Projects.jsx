import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  { id: 1, title: "Project One", color: "bg-purple-500" },
  { id: 2, title: "Project Two", color: "bg-blue-500" },
  { id: 3, title: "Project Three", color: "bg-emerald-500" },
  { id: 4, title: "Project Four", color: "bg-indigo-500" },
  { id: 5, title: "Project Five", color: "bg-rose-500" },
];

const filters = ["All", "UI", "UX", "Web Design"];

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-primary-dark">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          <div className="w-screen flex items-center justify-center">
            <h2 className="text-6xl md:text-8xl font-bold text-white">
              My Works
            </h2>
          </div>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`h-[70vh] w-[80vw] md:w-[50vw] ${project.color} rounded-xl flex items-center justify-center text-white text-4xl font-bold`}
            >
              {project.title}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
