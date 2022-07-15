/** @format */

import React from "react";
import mid2 from "../../assets/mid2.png";
import logo from "../../assets/logo.png";
import "./Features.css";
const Features = () => {
  return (
    <div className="features">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={mid2}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <span className="cushead flex   text-[24px] text-purple title-font font-[700] mb-3">
                  <img src={logo} alt={logo} className="mr-2" /> Anything you
                  need
                </span>
                <p className="leading-relaxed text-[20px] text-purple font-thin">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <span className="cushead flex text-[24px] text-purple title-font font-[700] mb-3">
                  <img src={logo} alt={logo} className="mr-2" /> Vault
                  protection
                </span>
                <p className="leading-relaxed text-[20px] text-purple font-thin">
                  We have many anti-scam features on our launchpad to make this
                  a friendly and safe environment. Venify is here to provide a
                  layer of security for all our investors. We do not accept any
                  contracts from outside developers, unless these are audited by
                  our trusted partners
                </p>
              </div>
            </div>
            <div className="flex  flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <span className="cushead  flex text-[24px] text-purple title-font font-[700] mb-3">
                  <img src={logo} alt={logo} className="mr-2" />
                  Low fee
                </span>
                <p className="leading-relaxed text-[20px] text-purple font-thin">
                  We firmly believe that your tokens belong to your project, not
                  our wallets. We provide you advanced fees in various networks
                  that you may keep your tokens in your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
