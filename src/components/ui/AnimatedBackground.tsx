"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 22 });

  const trailX = useSpring(mouseX, { stiffness: 18, damping: 14 });
  const trailY = useSpring(mouseY, { stiffness: 18, damping: 14 });

  useEffect(() => {
    setMounted(true);
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Soft glowing blue/indigo mouse glow
  const primaryGlow = useMotionTemplate`radial-gradient(480px circle at ${springX}px ${springY}px, rgba(99, 102, 241, 0.22), rgba(139, 92, 246, 0.10) 50%, transparent 75%)`;

  // Larger, slower lavender trailing glow
  const trailGlow = useMotionTemplate`radial-gradient(700px circle at ${trailX}px ${trailY}px, rgba(167, 139, 250, 0.12), transparent 65%)`;

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden" style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #eef2ff 30%, #f0f9ff 60%, #fdf4ff 100%)" }}>

      {/* Glassmorphic top-left orb — soft lavender */}
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -80, 60, 0], scale: [1, 1.12, 0.92, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.55) 0%, rgba(196,181,253,0.25) 50%, transparent 75%)", filter: "blur(90px)" }}
      />

      {/* Top-right orb — sky blue */}
      <motion.div
        animate={{ x: [0, -80, 50, 0], y: [0, 60, -60, 0], scale: [1, 1.18, 0.88, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -top-[10%] right-[-5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(147,197,253,0.50) 0%, rgba(186,230,253,0.22) 55%, transparent 75%)", filter: "blur(90px)" }}
      />

      {/* Center-right — soft rose */}
      <motion.div
        animate={{ x: [30, -50, 30], y: [-30, 60, -30], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[35%] right-[10%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,207,232,0.60) 0%, rgba(253,164,175,0.18) 55%, transparent 75%)", filter: "blur(80px)" }}
      />

      {/* Bottom-left — mint/cyan */}
      <motion.div
        animate={{ x: [-30, 60, -30], y: [40, -50, 40] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        className="absolute bottom-[-10%] left-[15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(103,232,249,0.30) 0%, rgba(186,230,253,0.15) 55%, transparent 75%)", filter: "blur(100px)" }}
      />

      {/* Bottom-right — peach/amber */}
      <motion.div
        animate={{ x: [40, -60, 40], y: [-40, 40, -40] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        className="absolute bottom-[0%] right-[-5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(253,186,116,0.28) 0%, rgba(254,215,170,0.12) 55%, transparent 75%)", filter: "blur(90px)" }}
      />

      {/* Mouse-reactive trailing glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: trailGlow }}
      />

      {/* Mouse-reactive primary glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: primaryGlow }}
      />

      {/* Very subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgba(99,102,241,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
