import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GiAstronautHelmet  } from "react-icons/gi"; // Phosphor Icons (via react-icons)

type Dir = { x: number; y: number };

export default function AnimatedRobot({
  size = 192,               // tamaño total (px)
  bodyColor = "#68F5D5",    // color del robot
  eyeBg = "#ffffff",        // blanco del ojo
  pupilColor = "#092326",   // color de la pupila
  glow = true,              // brillo exterior
}: {
  size?: number;
  bodyColor?: string;
  eyeBg?: string;
  pupilColor?: string;
  glow?: boolean;
}) {
const wrapRef = useRef<HTMLDivElement>(null);
const [dir, setDir] = useState<Dir>({ x: 0, y: 0 });

  // Seguimiento global del mouse (toda la página)
useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // vector normalizado hacia el cursor
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const clamp = (v: number) => Math.max(-1, Math.min(1, v));
      setDir({ x: clamp(dx), y: clamp(dy) });
    };

    const reset = () => setDir({ x: 0, y: 0 });

    window.addEventListener("mousemove", handler);
    window.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", handler);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  // Radio de viaje de la pupila (8% del tamaño, mínimo 6px)
  const travel = Math.max(6, Math.round(size * 0.08));

  // Posiciones de ojo para PiRobotFill (porcentaje relativo al icono)
  const leftEye = { top: "44%", left: "40%" };
  const rightEye = { top: "44%", left: "60%" };

  return (
    <div
      ref={wrapRef}
      className="relative select-none"
      style={{
        width: size,
        height: size,
        filter: glow ? "drop-shadow(0 0 24px rgba(104,245,213,.45))" : undefined,
      }}
      aria-label="Animated robot icon"
    >
      {/* Cabeza del robot */}
      <GiAstronautHelmet
        size={size}
        color={bodyColor}
        style={{ width: "100%", height: "100%" }}
        aria-hidden
      />

      {/* Esclerótica (blanco de los ojos) */}
      <div
        className="absolute rounded-full"
        style={{
          ...leftEye,
          width: size * 0.12,
          height: size * 0.12,
          transform: "translate(-50%,-50%)",
          background: eyeBg,
        }}
        aria-hidden
      />
      <div
        className="absolute rounded-full"
        style={{
          ...rightEye,
          width: size * 0.12,
          height: size * 0.12,
          transform: "translate(-50%,-50%)",
          background: eyeBg,
        }}
        aria-hidden
      />

      {/* Pupilas (animadas) */}
      <motion.div
        className="absolute rounded-full"
        animate={{ x: dir.x * travel, y: dir.y * travel }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        style={{
          ...leftEye,
          width: size * 0.055,
          height: size * 0.055,
          transform: "translate(-50%,-50%)",
          background: pupilColor,
        }}
      />
      <motion.div
        className="absolute rounded-full"
        animate={{ x: dir.x * travel, y: dir.y * travel }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        style={{
          ...rightEye,
          width: size * 0.055,
          height: size * 0.055,
          transform: "translate(-50%,-50%)",
          background: pupilColor,
        }}
      />
    </div>
  );
}