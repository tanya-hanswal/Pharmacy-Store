/* eslint-disable no-unused-vars */
import React from "react";
import moneyback from "../assets/images/about/moneyback.jpg";
import moneyicon from "../assets/images/about/moneyicon.png";
import dots1 from "../assets/images/home/dots1.png";

const MoneyBack = () => {
  return (
    <section className="px-4 sm:px-[3vw] md:px-[4vw] lg:px-[3vw] mt-20">
      <div className="container ">
        <div
          style={{
            backgroundImage: `url(${moneyback})`,
            flexWrap: "wrap",
            backgroundSize: "cover",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className=" py-8">
            <h4 className="text-4xl font-bold tracking-wider">
              Our money-back guarantee
            </h4>
            <p className="pt-4 tracking-wide w-[98%]">
              Not satisfied? We’ve got you covered. If you’re not satisfied with
              your order, get your money back with our 30 day satisfaction
              guarantee.
            </p>
          </div>
          <img className="pb-6 pt-6" src={moneyicon} alt="money-back" />
          <img className=" absolute left-3  animate-pulse" src={dots1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MoneyBack;
