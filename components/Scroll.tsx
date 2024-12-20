"use client";

import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const images = [
    "/p1.jpg",
    "/p2.jpg",
    "/p3.png",
    "/p4.jpg",
    "/p5.jpg",
    "/p6.png",
    "/p7.jpg",
    "/p8.jpg",
    "/p9.jpg",
    "/p10.jpg",
    "/p11.jpg",
    "/p12.jpg",
    "/p13.jpg",
    "/p14.jpg",
    "/p15.jpg",
];

const Scroll = () => {
    return (
        <div id="photography" className="w-full py-20">
            <h1 className="text-4xl font-bold text-center mb-10">
                <span className="text-purple-600">Photography</span>
            </h1>

            {/* Button Above the Photos */}
            <div className="text-center mb-10">
                <a
                    href="https://photos.app.goo.gl/VNNWSB61FBnnUpCx7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <MagicButton
                        title="Check out more of my photography"
                        icon={<FaLocationArrow />}
                        position="right"
                        otherClasses="text-4xl font-bold px-20 py-10"
                    />
                </a>
            </div>

            <ParallaxScroll images={images} />
        </div>
    );
};

export default Scroll;
