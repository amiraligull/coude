/** @format */

import React from "react";
import intro from "../../assets/hero1.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container flex  items-center mb-20 mt-10 px-[4rem] md:px-[4rem] md:mt-20  mx-auto flex-col-reverse md:flex-row">
        {/* left */}
        <div className="flex flex-col  gap-10   mt-5 ">
          <span
            className=" 
               text-5xl       
            md:text-7xl  font-bold text-purple"
            id="introheading"
          >
            <span className="md:text-white">Th</span>e easiest way to buy & sell
            cryptocurrency
          </span>
          <span id="ptext" className="text-[24px] font-thin	 text-purple">
            Venify is a decentralized platform that provides its users the means
            to create their own token, generate initial liquidity and aid in
            listing services.
          </span>
          <button className="  bg-blue text-white font-bold  p-4 w-[12rem] rounded-2xl   ">
            View Docs
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={intro}
            alt={intro}
            className="w-[150rem] md:w-[95rem] mt-[-5rem] md:ml-[2rem] relative"
          />
        </div>
      </div>
      <div className=" blue1  bg-blue shadow-2xl  hidden md:flex"></div>
      <div className=" blue2  bg-purple shadow-2xl  hidden md:flex"></div>
      <div className=" blue3  bg-orange shadow-2xl  hidden md:flex"></div>
      <div className=" blue4  bg-blue shadow-2xl  hidden md:flex"></div>
    </div>
  );
};

export default Hero;
