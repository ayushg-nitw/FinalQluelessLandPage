import React, { useEffect, useState, useRef } from "react";
import img1 from "../assets/Images/page1-1.jpeg";
import EnterEmailButton from "./EnterEmailButton";
import GoogleSignInButton from "./GoogleSignInButton";

const Waitlist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-screen w-full text-white shadow-md"
    >
      <div className="w-screen h-screen relative">
        <img
          className="w-full h-full object-cover opacity-30  "
          src={img1}
          alt="Background"
        />
      </div>

      <div className="absolute top-8 left-8 font-glorita  text-[40px] sm:text-[55px] ">
        <span className=" bg-glorita-gradient">Qlue</span>
      </div>

      <div className="absolute text-center text-[20px] md:text-[35px] lg:text-[40px] top-[18%] md:top-[28%] left-[50%] translate-x-[-50%] lg:top-[40%] lg:left-[20%] lg:translate-x-0 leading-[25px] md:leading-[40px] lg:leading-[45px]">
        <p className="font-gilroyRegular">
          LOST IN STYLE <br /> FOUND IN FASHION
        </p>
      </div>

      <div className="w-full flex justify-center md:pt-[10%] lg:justify-start lg:pl-[55%] p-6 md:p-8 lg:p-10 absolute top-[25%] md:top-[30%] lg:top-[20%]">
        <div className="mt-2 p-6 md:p-8 lg:p-10 bg-black rounded-[60px] md:rounded-[50px] border border-white w-[310px] h-[280px] md:w-[400px] lg:w-[470px]  md:h-[300px] lg:h-[316px] text-center">
          <p className="font-gilroy lg:text-[20px] md:text-[18px] text-[16px] text-white mb-2">
            join the waitlist
          </p>
          <EnterEmailButton />
          <p className="font-gilroy text-white lg:text-[20px] md:text-[18px] text-[16px] my-2">
            or
          </p>
          <GoogleSignInButton />
          <p className="font-gilroy lg:text-[20px] md:text-[18px] text-[16px] text-white mt-3">
            Join the Qlue Club
          </p>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
