import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const TimeLine = () => {
    <div id="TimeLine">

    </div>
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-purple dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
                        Interned @ Centers of Research Excellence in Science and Technology (CREST) Program (Internship)
                        <br />
                        From July to December 2024, I interned at the Centers of Research Excellence in Science and Technology (CREST) Program, contributing to research projects that enhanced my skills in data analysis and software development. This experience deepened my understanding of real-world technology applications. Graduating in December 2024 with a major in Computer Science and a minor in Data Science, I am ready to take on new challenges in the tech industry.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/drone.png"
                            alt="Drone"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/csusb.webp"
                            alt="Drone"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
                        In 2023, I dedicated myself to advancing my education, fully committing to pursuing a dual major in Computer Science and Data Science. Alongside my academic journey, I channeled my creativity and technical skills into developing Forest of Enchantment, a captivating 2D platformer game. This project allowed me to explore game design, programming, and storytelling, resulting in an immersive experience that brings a magical world to life.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/FOE.png"
                            alt="Drone"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/student.png"
                            alt="Drone"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
                        2022 marked the beginning of my academic journey in Computer Science and Data Science. This year was all about laying a strong foundation, immersing myself in the fundamentals of programming, algorithms, and data analysis. I focused on building a growth mindset and developing the skills needed to navigate the exciting and challenging world of technology.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/new.jpeg"
                            alt="Drone"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/1.jpg"
                            alt="Drone"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Before 2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
                        For nine years, I worked as a Utility Service Worker for OmniTrans, a local bus company. During this time, I gained valuable work experience and developed a strong work ethic. However, I realized I wanted more out of life and aspired to pursue a career that aligned with my passions. This realization led me to make a life-changing decision: to go back to school and embark on a journey toward a future in technology.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/bus.avif"
                            alt="Drone"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/bus-01.jpg"
                            alt="Drone"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div id="TimeLine" className="w-full py-20">
            <h1 className="text-4xl font-bold text-center mb-10">
                <span className="text-purple-600">My Timeline</span>
            </h1>
            <Timeline data={data} />
        </div>
    );
};

export default TimeLine;
