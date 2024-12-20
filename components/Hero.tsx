import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            {/**
         *  UI: Spotlights
         *  Link: https://ui.aceternity.com/components/spotlight
         */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 
                    md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 
                    left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] 
                w-[50vw]" fill="blue" />
            </div>

            {/**
         *  UI: grid
         *  change bg color to bg-black-100 and reduce grid color from
         *  0.2 to 0.03
         */}
            <div
                className="h-screen w-full dark:bg-black-100
                 bg-white dark:bg-grid-white/[0.03] 
                 bg-grid-black-100/[0.2] flex items-center
                justify-center absolute top-0 left-0  
                "
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // change the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none 
                    inset-0 flex items-center justify-center
                     dark:bg-black-100
                    bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20  z-10">
                <div className="max-w-[89vw] 
                    md:max-w-2xl 
                    lg:max-w-[60vw] flex flex-col items-center
                    justify-center">
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Empowering Innovation Through Technology
                    </h2>

                    <TextGenerateEffect
                        className='text-center text-[40px]
                        md:text-5xl lg:text-6xl'
                        words='Crafting Innovative Solutions with Expertise in Computer Science and Data Science'
                    />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I'm Isael, a Computer Science graduate with a minor in Data Science from California State University, San Bernardino. I specialize in software development, problem-solving, and creating data-driven solutions to tackle real-world challenges.
                    </p>


                    <a href="#about" className="block">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>


                    {/* Fixed Hydration issue by using div above but has no #about */}
                    {/* <a href="#about">
                        <MagicButton
                            title="Show my work"
                            icon={< FaLocationArrow />} position={'right'} />

                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
