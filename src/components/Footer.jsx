import React from "react";
import insta from "../assets/svg/insta.svg";
import linkedin from "../assets/svg/linkedin.svg";
import twitter from "../assets/svg/twitter.svg";
import bulbImage from "../assets/Images/bulb.jpg";

const Footer = () => {
  return (
    <footer className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center py-10 overflow-hidden">
      {/* 🔹 Background Bulb Image */}
      <div className="absolute inset-0">
        <img
          src={bulbImage}
          alt="Bulb Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* 🔹 Qlue Logo */}
      <div className="absolute top-8 left-8 font-glorita  text-[40px] sm:text-[55px] ">
        <span className=" bg-glorita-gradient">Qlue</span>
      </div>

      {/* 🔹 Center Content */}
      <div className="text-center -mt-[10%] flex flex-col justify-center items-center relative z-10 px-4 sm:px-8">
        <div className="flex flex-col md:text-[30px] text-[28px]  font-gilroy">
          <span> THE BEST FINDS ARE</span>
          <span> NEVER OBVIOUS</span>
          <span>
            THEY ARE{" "}
            <span className="bg-glorita-gradient font-gilroyRegular">
              QLUELESS
            </span>
          </span>
        </div>

        <div className="text-center w-full max-w-[295px] mt-4">
          <p className=" text-white-300 font-gilroyRegular text-sm sm:text-base md:text-xl">
            discover, engage, and purchase all in one seamless <br />
            experience.
          </p>
        </div>

        {/* 🔹 Coming Soon Button */}
        <button className="mt-6 sm:mt-8 bg-white w-[130px] sm:w-[150px] h-[40px] sm:h-[45px] text-black text-sm sm:text-lg px-4 py-2 rounded-full font-gilroy transition-all duration-200 hover:scale-105">
          coming soon
        </button>

        {/* 🔹 Social Media Icons */}
        <div className="flex gap-3 mt-4 text-xl">
          <a
            href="#"
            className="text-white hover:text-[#DFA30A] transition-all duration-300 hover:scale-110"
          >
            <img src={insta} className="h-8 sm:h-10 w-8 sm:w-10" />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#DFA30A] transition-all duration-300 hover:scale-110"
          >
            <img src={linkedin} className="h-9 sm:h-11 w-9 sm:w-11 mt-[-2px]" />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#DFA30A] transition-all duration-300 hover:scale-110"
          >
            <img
              src={twitter}
              className="h-7 sm:h-9 w-7 sm:w-9 mt-[1px] border border-white-200 rounded-md"
            />
          </a>
        </div>
      </div>

      {/* 🔹 Qlueless Large Text in Background (Centered Above Bottom) */}
      <div className="absolute inset-x-0 bottom-5 xl:bottom-[-6%] lg:bottom-[2%] md:bottom-[1%] flex justify-center  opacity-15">
        <div className="font-glorita">
          <span className=" bg-glorita-gradient text-[100px] md:text-[200px] lg:text-[250px]">
            Qlueless
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
