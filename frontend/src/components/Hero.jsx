/* eslint-disable no-unused-vars */
import React from "react";
import hero1 from "../assets/images/home/hero1.png";
import hero2 from "../assets/images/home/hero2.png";
import hero3 from "../assets/images/home/hero3.png";
import hero from "../assets/images/home/hero.png";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  const ImageList = [
    {
      id: 1,
      img: hero1,
      title: "Flat 25% Off Medicine Order",
      description:
        "Essentials Nutrition & Supplements from all over the suppliers around the World",
    },
    {
      id: 2,
      img: hero2,
      title: "Get Your Nutrition Essentials Get Up To 30% Off",
      description:
        "From the Leading Online Pharmacy & Healthcare Platform Company",
    },
    {
      id: 3,
      img: hero3,
      title: "70% Off On All Medicine Sale",
      description:
        "From the Leading Online Pharmacy & Healthcare Platform Company",
    },
  ];
  return (
    <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-green-900 flex justify-center items-center duration-200">
      {/*  */}
      <div className=" h-[700px] w-[700px]  bg-primary  absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/*  hero section */}
      <div className=" container pb-8 sm:pb-0">
        <img className=" absolute top-1 left-96" src={hero} alt="" />
        <Slider {...settings}>
          {ImageList.map((data, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content */}
                <div className=" flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 pl-4">
                  <h1 className=" text-5xl sm:text-6xl lg:text-7xl font-bold  text-gray-100 ">
                    {data.title}
                  </h1>
                  <p className=" text-sm text-gray-300">{data.description}</p>
                  <div className="flex">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        navigate("/store");
                        scrollTo(0, 0);
                      }}
                      className=" bg-yellow-600 hover:scale-105 duration-200 text-black font-semibold py-2 px-4 rounded-full "
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
                {/* image content */}
                <div className="order-1 sm:order-2">
                  <div className=" relative z-10">
                    <img
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105  lg:scale-120 object-contain mx-auto"
                      src={data.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
