import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="w-full pb-10 mb-[100px] md:mb-5 relative">
      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Main Content */}
      <div>
        {/* Call-to-Action Section */}
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw] text-center">
            Let&apos;s Build Something <span className="text-purple"> Amazing </span> Together!
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Let&apos;s connect and see how my skills in software development and data science can help bring your ideas to life.
          </p>
          <a href="mailto:iisael090@gmail.com">
            <MagicButton title="Let&apos;s get in touch" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16">
          {/* Copyright */}
          <p className="md:text-base text-sm md:font-normal font-light mb-4 md:mb-0">
            Copyright © 2024 Isael
          </p>

          {/* Social Media Links */}
          <div className="flex items-center md:gap-8 gap-6">
            {socialMedia.map((profile) => (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <div
                  className="w-16 h-16 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <img src={profile.img} alt={String(profile.id)} width={40} height={40} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
