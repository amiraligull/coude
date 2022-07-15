/** @format */

import React from "react";
import part1 from "../../assets/p.png";
import part2 from "../../assets/p2.png";
import part3 from "../../assets/p3.png";

import "./Partner.css";
const Partner = () => {
  return (
    <div className="partner bg-cover">
      <div className="container px-5 py-24 mx-auto">
        <div className=" flex flex-col text-center">
          <span>Trusted Partners Worldwide</span>
          <span className="text-[20px] font-thin	 text-purple">
            We're partners with countless major organisations around the globe
          </span>
        </div>
        <div className="flex flex-wrap -m-4 items-center justify-center text-center">
          <img src={part1} alt={part1} />
          <img src={part2} alt={part1} />
          <img src={part3} alt={part1} />
          <img src={part1} alt={part1} />

          {/* <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              2.7K
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              1.8K
            </h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              35
            </h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              4
            </h2>
            <p className="leading-relaxed">Products</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Partner;
