import React from "react";
import logo from "../../assets/poto1.JPG";

const Header = () => {
  return (
    <div className="flex items-center flex-col gap-[40px] m-5">
      <img
        src={logo}
        alt="logo"
        className="object-cover w-32 h-32 rounded-full sm:w-42 sm:h-42"
      />

      <h1 className="w-11/12 text-3xl text-center sm:w-4/6 sm:text-4xl text-cyan-200">
        <span className="text-amber-200">I'm Udesh Indumina</span> Software
        Engineer based in Sri Lanka.
      </h1>

      <p className="w-11/12 sm:w-2/3 text-center text-[20px] sm:text-[24px] leading-[32px] sm:leading-[40px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid
        quod eaque adipisci ut quam consequatur! Eligendi laboriosam, corrupti
        quia dolore necessitatibus nemo earum inventore sint tempora minima
        dicta quidem.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#Df8908] to-[#B415FF] inline-block cursor-pointer hover:opacity-90">
          <div className="px-4 py-2 bg-[#161513] rounded-full text-white text-sm text-center">
            Connect With Me
          </div>
        </div>
        <div className="px-4 py-2 text-sm text-center text-white border border-white rounded-full cursor-pointer hover:bg-white hover:text-black">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Header;
