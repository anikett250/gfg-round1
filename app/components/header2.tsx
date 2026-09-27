"use client";

import { motion } from "framer-motion";
import { Suspense, useRef, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import type { Group } from "three";

function Mark85Model() {
    const { scene } = useGLTF("/iron-man_mark_85_arc_reactor.glb");
    const ref = useRef<Group>(null);

    useFrame((state) => {
        if (!ref.current) return;

        const duration = 3;
        const t = Math.min(state.clock.elapsedTime / duration, 1);

        const eased = 1 - Math.pow(1 - t, 3);

        ref.current.rotation.y = Math.PI * (0.85 - eased);

        const startScale = 0.8;
        const endScale = 1.5;

        const scale =
            startScale + (endScale - startScale) * eased;

        ref.current.scale.set(scale, scale, scale);

        ref.current.position.y =
            -1.2 + 0.5 * eased;
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            position={[0, -1, 0]}
        />
    );
}

function Mark85Helmet() {
    const { scene } = useGLTF("/iron_man_helmet.glb");
    const ref = useRef<Group>(null);

    useFrame((state) => {
        if (!ref.current) return;

        const duration = 3;
        const t = Math.min(state.clock.elapsedTime / duration, 1);

        const eased = 1 - Math.pow(1 - t, 3);

        ref.current.rotation.y = Math.PI * (0.65 - eased);

        const startScale = 0.5;
        const endScale = 0.8;

        const scale =
            startScale + (endScale - startScale) * eased;

        ref.current.scale.set(scale, scale, scale);

        ref.current.position.y =
            -1.3 + 0.5 * eased;
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            position={[-0.5, -1, 0]}
        />
    );
}

function Mark85Reactor() {
    const { scene } = useGLTF("/iron_man_rig.glb");
    const ref = useRef<Group>(null);

    useFrame((state) => {
        if (!ref.current) return;

        const duration = 3;
        const t = Math.min(state.clock.elapsedTime / duration, 1);

        const eased = 1 - Math.pow(1 - t, 3);

        ref.current.rotation.y = Math.PI * (1.1 - eased);

        const startScale = 0.001;
        const endScale = 0.01;

        const scale =
            startScale + (endScale - startScale) * eased;

        ref.current.scale.set(scale, scale, scale);

        ref.current.position.y =
            -5 + 0.5 * eased;
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            position={[0, -1, 0]}
        />
    );
}

function LazyModelCanvas({ children, environment }: { children: ReactNode; environment: "city" | "sunset" }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    return (
        <div ref={containerRef} className="absolute inset-0">
            {isInView && (
                <Canvas className="relative z-10" camera={{ position: [0, 0, 8], fov: 35 }} dpr={[1, 2]} gl={{ alpha: true }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[3, 5, 4]} intensity={4} color="#fff0dc" />
                    <directionalLight position={[-4, 2, 2]} intensity={2.5} color="#d94032" />
                    <Suspense fallback={null}>
                        {children}
                        <Environment preset={environment} />
                    </Suspense>
                </Canvas>
            )}
        </div>
    );
}

export default function Header() {
    return (
        <div className="">
            <main id="arc-reactor" className="grid min-h-screen overflow-hidden bg-[#090a0c] text-white lg:grid-cols-[0.9fr_1.1fr]">
                <motion.section
                    initial={{ opacity: 0, x: -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center gap-6 px-8 py-24 sm:px-14 lg:px-20"
                >
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#f05a47]">Mark 85 / Core Systems</p>
                    <h2 className="max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl">
                        Arc Reactor
                    </h2>
                    <p className="max-w-md text-base leading-8 text-white/55 sm:text-lg">
                        At the heart of the Mark 85 lies<br />
                        the Arc Reactor, a compact energy<br />
                        source capable of powering the<br />
                        entire nanotech platform.
                    </p>
                </motion.section>
                <div className="relative min-h-[65vh] lg:min-h-screen">
                    <LazyModelCanvas environment="city">
                        <Mark85Model />
                    </LazyModelCanvas>
                </div>
            </main>

            <main
                id="friday-ai"
                className="grid min-h-screen overflow-hidden bg-[#090a0c] text-white lg:grid-cols-[1.1fr_0.9fr]"
            >
                <div className="relative min-h-[65vh] lg:min-h-screen">
                    <LazyModelCanvas environment="sunset">
                        <Mark85Helmet />
                    </LazyModelCanvas>
                </div>

                <motion.section
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center gap-6 px-8 py-24 sm:px-14 lg:px-20"
                >
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#f05a47]">
                        FRIDAY AI / TACTICAL INTELLIGENCE SYSTEM
                    </p>

                    <h2 className="max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl">
                        FRIDAY
                    </h2>

                    <p className="max-w-md text-base leading-8 text-white/55 sm:text-lg">
                        Integrated directly into the Mark 85,
                        <br />
                        FRIDAY provides real-time battlefield
                        <br />
                        analysis, threat assessment, navigation,
                        <br />
                        and combat assistance.
                        <br />
                        Every decision. Every target.
                        <br />
                        Every move. Calculated instantly.
                    </p>
                </motion.section>
            </main>

            <main id="repulsor" className="grid min-h-screen overflow-hidden bg-[#090a0c] text-white lg:grid-cols-[0.9fr_1.1fr]">
                <motion.section
                    initial={{ opacity: 0, x: -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center gap-6 px-8 py-24 sm:px-14 lg:px-20"
                >
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#f05a47]">REPULSOR ARRAY / PRIMARY OFFENSIVE SYSTEM</p>
                    <h2 className="max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl">
                        REPULSOR
                    </h2>
                    <p className="max-w-md text-base leading-8 text-white/55 sm:text-lg">
                        Powered by the Arc Reactor,<br />
                        the Repulsor Array delivers precision<br />
                        energy projection capable of adapting<br />
                        to any combat scenario.<br />

                        Maximum output.<br />
                        Minimal compromise.<br />
                    </p>
                </motion.section>
                <div className="relative min-h-[65vh] lg:min-h-screen">
                    <LazyModelCanvas environment="city">
                        <Mark85Reactor />
                    </LazyModelCanvas>
                </div>
            </main>
        </div>
    );
}