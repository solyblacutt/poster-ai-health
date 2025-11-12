import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa"; // Phosphor Icons (via react-icons)

/**
 * Animated robot whose pupils track the cursor.
 */
export default function AnimatedRobot({
  size = 192,                 // overall size (px)
  bodyColor = "#68F5D5",      // robot body (icon) color
  eyeBg = "#ffffff",          // eye whites (for contrast)
  pupilColor = "#092326",     // pupil color
  glow = true,                // outer glow
}: {
  size?: number;
  bodyColor?: string;
  eyeBg?: string;
  pupilColor?: string;
  glow?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  // Store normalized cursor direction (-1..1) relative to each eye
  const [dir, setDir] = useState({ x: 0, y: 0 });

  const onMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // direction vector from head center towards cursor (normalized)
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    // clamp to [-1, 1] to avoid overshoot
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    setDir({ x: clamp(dx), y: clamp(dy) });
  };

  const onLeave = () => setDir({ x: 0, y: 0 });

  // pupil travel radius (in px) scales with size
  const travel = Math.max(6, Math.round(size * 0.045));

  // Eye socket positions (percentages) tuned for PiRobotFill
  const leftEye  = { top: "42%", left: "41%" };
  const rightEye = { top: "42%", left: "59%" };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative select-none"
      style={{ width: size, height: size, filter: glow ? "drop-shadow(0 0 24px rgba(104,245,213,.45))" : undefined }}
      aria-label="Animated robot icon"
    >
      {/* Robot head (icon) */}
      <FaUserAstronaut
        size={size}
        color={bodyColor}
        style={{ width: "100%", height: "100%" }}
        aria-hidden
      />

      {/* Eye whites (absolute, circular) */}
      <div
        className="absolute rounded-full"
        style={{
          ...leftEye,
          width: size * 0.11,
          height: size * 0.11,
          transform: "translate(-50%,-50%)",
          background: eyeBg,
        }}
        aria-hidden
      />
      <div
        className="absolute rounded-full"
        style={{
          ...rightEye,
          width: size * 0.11,
          height: size * 0.11,
          transform: "translate(-50%,-50%)",
          background: eyeBg,
        }}
        aria-hidden
      />

      {/* Pupils (animated with framer-motion) */}
      <motion.div
        className="absolute rounded-full"
        animate={{ x: dir.x * travel, y: dir.y * travel }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        style={{
          ...leftEye,
          width: size * 0.05,
          height: size * 0.05,
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
          width: size * 0.05,
          height: size * 0.05,
          transform: "translate(-50%,-50%)",
          background: pupilColor,
        }}
      />
    </div>
  );
}
