"use client";

import { motion } from "framer-motion";
import { Suspense, useRef } from "react";
import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import type { Group } from "three";

function Mark85Model({ onAnimationComplete }: { onAnimationComplete: () => void }) {
  const { scene } = useGLTF("/iron-man_mark_85.glb");
  const ref = useRef<Group>(null);
  const hasCompleted = useRef(false);

  useFrame((state) => {
    if (!ref.current) return;

    const duration = 3;
    const t = Math.min(state.clock.elapsedTime / duration, 1);

    if (t === 1 && !hasCompleted.current) {
      hasCompleted.current = true;
      onAnimationComplete();
    }

    const eased = 1 - Math.pow(1 - t, 3);

    ref.current.rotation.y = Math.PI * (1 - eased);

    const startScale = 50;
    const endScale = 60;

    const scale =
      startScale + (endScale - startScale) * eased;

    ref.current.scale.set(scale, scale, scale);

    ref.current.position.y =
      -2.4 + 0.25 * eased;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[0, -2.4, 0]}
    />
  );
}

useGLTF.preload("/iron-man_mark_85.glb");

export default function Header() {
  const [showLabels, setShowLabels] = useState(false);

    return (
        <main id="top" className="h-screen overflow-hidden bg-[#090a0c]">
            <Canvas className="relative z-10" camera={{ position: [0, 0, 8], fov: 35 }} dpr={[1, 2]} gl={{ alpha: true }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[3, 5, 4]} intensity={4} color="#fff0dc" />
                <directionalLight position={[-4, 2, 2]} intensity={2.5} color="#d94032" />
                <Suspense fallback={null}>
                  <Mark85Model onAnimationComplete={() => setShowLabels(true)} />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
              <motion.div
                initial={{ opacity: 0, x: -16, scale: 10 }}
                animate={{ opacity: showLabels ? 1 : 0, x: showLabels ? 0 : -16 }}
                transition={{ duration: 0.45 }}
                className="pointer-events-none absolute left-[calc(50%-18vw)] top-[29%] z-0 text-xs font-bold uppercase tracking-[0.25em] text-[#f05a47] sm:left-[calc(50%-16vw)] sm:top-[23%]"
              >
                MARK
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -16, scale: 1 }}
                animate={{ opacity: showLabels ? 0.7 : 0, x: showLabels ? 0 : -16 }}
                transition={{ duration: 0.45 }}
                className="pointer-events-none absolute left-[calc(50%-18vw)] top-[29%] z-0 text-xs font-bold uppercase tracking-[0.35em] text-[#f05a47] sm:left-[calc(50%-28vw)] sm:top-[28%]"
              >
                The most advanced armor ever<br/> built by Tony Stark.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 16, scale: 5 }}
                animate={{ opacity: showLabels ? 0.9 : 0, x: showLabels ? 0 : 16 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="pointer-events-none absolute left-[calc(50%+12vw)] top-[68%] z-0 text-4xl font-black leading-none tracking-[-0.08em] text-white sm:left-[calc(50%+6.9vw)] sm:top-[70%]"
              >
                85
              </motion.div>
        </main>
    );
}