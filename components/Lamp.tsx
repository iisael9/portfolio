"use client";
import React from "react";
import { LampContainer } from "./ui/lamp"; // Ensure this is exported correctly
import { motion } from "framer-motion"; // Correctly import motion from framer-motion

const Lamp = () => {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-slate-300 to-slate-500 py-0 m-0 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
            </motion.h1>
        </LampContainer>
    );
};

export default Lamp;
