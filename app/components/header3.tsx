"use client";

import { motion } from "framer-motion";

export default function FinalProtocol() {
    return (
        <section
            id="final-protocol"
            className="relative mt-100 flex min-h-screen items-center justify-center overflow-hidden bg-[#090a0c] text-white"
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,36,41,0.12),transparent_65%)]" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-8 text-[11px] uppercase tracking-[0.45em] text-[#f05a47]"
                >
                    STARK INDUSTRIES // FINAL PROTOCOL
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-6xl font-semibold tracking-[-0.06em] sm:text-8xl md:text-[10rem]"
                >
                    MARK 85
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-sm uppercase tracking-[0.35em] text-white/40"
                >
                    DEPLOYMENT COMPLETE
                </motion.p>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "180px" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mx-auto mt-10 h-px bg-[#E62429]"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mx-auto mt-12 max-w-3xl text-lg leading-9 text-white/55"
                >
                    The armor is complete.
                    <br />
                    The systems are online.
                    <br />
                    The mission begins now.
                </motion.p>
            </div>
        </section>
    );
}