
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#00c8d7"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-6xl md:text-9xl font-black text-white uppercase">
          Paul C. Faustino
        </h1>
        <p className="text-2xl md:text-4xl text-accent-teal font-bold mt-2">
          Creative Developer
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;