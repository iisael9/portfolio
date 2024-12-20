"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);

    // Calculate the container height dynamically based on the number of images
    useEffect(() => {
        if (containerRef.current) {
            const baseHeight = 500; // Each image's height in px (adjust if needed)
            const rows = Math.ceil(images.length / 3); // Number of rows in grid
            setContainerHeight(baseHeight * rows + 500); // Add extra padding for smoothness
        }
    }, [images]);

    // Hook to track the scrolling progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Define parallax transformations
    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    // Divide images into three groups
    const third = Math.ceil(images.length / 3);
    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div
            className={cn("relative w-full overflow-hidden", className)}
            ref={containerRef}
            style={{ height: `${containerHeight}px` }} // Dynamically set height
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {/* First Group of Images */}
                <div className="grid gap-6">
                    {firstPart.map((src, idx) => (
                        <motion.div
                            key={idx}
                            style={{ y: translateFirst }}
                            className="relative overflow-hidden rounded-lg"
                        >
                            <img
                                src={src}
                                alt={`Image ${idx}`}
                                className="object-cover rounded-lg"
                                style={{
                                    width: "300px", // Wider portrait
                                    height: "500px", // Taller portrait
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Second Group of Images */}
                <div className="grid gap-6">
                    {secondPart.map((src, idx) => (
                        <motion.div
                            key={idx}
                            style={{ y: translateSecond }}
                            className="relative overflow-hidden rounded-lg"
                        >
                            <img
                                src={src}
                                alt={`Image ${idx}`}
                                className="object-cover rounded-lg"
                                style={{
                                    width: "300px", // Wider portrait
                                    height: "500px", // Taller portrait
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Third Group of Images */}
                <div className="grid gap-6">
                    {thirdPart.map((src, idx) => (
                        <motion.div
                            key={idx}
                            style={{ y: translateThird }}
                            className="relative overflow-hidden rounded-lg"
                        >
                            <img
                                src={src}
                                alt={`Image ${idx}`}
                                className="object-cover rounded-lg"
                                style={{
                                    width: "300px", // Wider portrait
                                    height: "500px", // Taller portrait
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
