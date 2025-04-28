import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type StarProps = {
  size: number;
  position: [number, number];
  delay: number;
  duration: number;
}

const Star = ({ size, position, delay, duration }: StarProps) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position[0]}%`,
        top: `${position[1]}%`,
      }}
      animate={{
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
};

type PlanetProps = {
  size: number;
  position: [number, number];
  color: string;
  delay: number;
}

const Planet = ({ size, position, color, delay }: PlanetProps) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position[0]}%`,
        top: `${position[1]}%`,
        backgroundColor: color,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
};

type NebulaProps = {
  size: number;
  position: [number, number];
  color: string;
  delay: number;
}

const Nebula = ({ size, position, color, delay }: NebulaProps) => {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position[0]}%`,
        top: `${position[1]}%`,
        backgroundColor: color,
      }}
      animate={{
        x: [-500, 0],
        y: [-200, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 25,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      aria-hidden="true"
    />
  );
};

const CosmicBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Prevent recreating elements on rerender
    if (containerRef.current && containerRef.current.children.length > 0) {
      return;
    }
  }, []);

  // Pre-generate stars, planets, and nebulae for SSR consistency
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: `star-${i}`,
    size: Math.random() * 2 + 1,
    position: [Math.random() * 100, Math.random() * 100] as [number, number],
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  const planets = Array.from({ length: 5 }, (_, i) => ({
    id: `planet-${i}`,
    size: Math.random() * 15 + 5,
    position: [Math.random() * 100, Math.random() * 100] as [number, number],
    color: ['#5D3E7C', '#FF65A3', '#FFD15C', '#8BE9FD', '#50FA7B'][Math.floor(Math.random() * 5)],
    delay: Math.random() * 5,
  }));

  const nebulae = Array.from({ length: 3 }, (_, i) => ({
    id: `nebula-${i}`,
    size: Math.random() * 300 + 150,
    position: [Math.random() * 100, Math.random() * 100] as [number, number],
    color: ['#5D3E7C', '#FF65A3', '#8BE9FD'][Math.floor(Math.random() * 3)],
    delay: Math.random() * -50,
  }));

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <Star 
          key={star.id} 
          size={star.size} 
          position={star.position} 
          delay={star.delay} 
          duration={star.duration} 
        />
      ))}
      
      {planets.map((planet) => (
        <Planet 
          key={planet.id} 
          size={planet.size} 
          position={planet.position} 
          color={planet.color} 
          delay={planet.delay} 
        />
      ))}
      
      {nebulae.map((nebula) => (
        <Nebula 
          key={nebula.id} 
          size={nebula.size} 
          position={nebula.position} 
          color={nebula.color} 
          delay={nebula.delay} 
        />
      ))}
    </div>
  );
};

export default CosmicBackground;
