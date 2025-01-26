/* eslint-disable no-unused-vars */
import React from "react";
import product1 from "../assets/images/about/product1.png";
import product2 from "../assets/images/about/product2.jpg";
import product4 from "../assets/images/about/product4.jpg";
import product5 from "../assets/images/about/product5.jpg";
import { RiCheckboxBlankFill } from "react-icons/ri";

const AboutMedicine = () => {
  return (
    <>
      <div className="container w-[90%] h-full max-w-[1170px] grid grid-cols-1 items-center gap-16 m-auto mt-20  md:grid-cols-2  ">
        <div className=" w-full">
          <div className=" w-full grid grid-cols-2 gap-4">
            <div className=" grid gap-4 shadow-lg">
              <img
                className="h-auto max-w-full rounded-md"
                src={product1}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg shadow-lg"
                src={product2}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg shadow-lg"
                src={product4}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg shadow-md"
                src={product5}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" w-full">
          <div className="content">
            <h6 className="text-green-600 font-semibold pb-1 text-2xl">
              100% Trusted Medical Store
            </h6>
            <h2 className=" text-5xl font-bold pb-5">
              Healthy life.Every day quality products for you.
            </h2>
            <p className=" text-gray-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quos suscipit minus nobis labore accusamus ad dolores ut
              voluptates debitis.
            </p>
            <div className="mt-2">
              <ul>
                <li className=" flex gap-2 items-center text-gray-900 tracking-wider ">
                  <RiCheckboxBlankFill className="text-green-600 " />
                  Clean, Natural Ingredients
                </li>
                <li className=" flex gap-2 items-center text-gray-900 tracking-wider">
                  <RiCheckboxBlankFill className="text-green-600 " /> Industry
                  is regulated very well.
                </li>
                <li className=" flex gap-2 items-center text-gray-900 tracking-wider">
                  <RiCheckboxBlankFill className="text-green-600 " /> 100% Money
                  back
                </li>
                <li className=" flex gap-2 items-center text-gray-900 tracking-wider">
                  <RiCheckboxBlankFill className="text-green-600 " />{" "}
                  Non-contact shipping
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMedicine;
