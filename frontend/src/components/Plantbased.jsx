/* eslint-disable no-unused-vars */
import React from "react";
import icon1 from "../assets/images/home/icon1.png";
import icon2 from "../assets/images/home/icon2.png";
import icon3 from "../assets/images/home/icon3.png";
import icon4 from "../assets/images/home/icon4.png";
import icon5 from "../assets/images/home/icon5.png";

const Plantbased = () => {
  const PlantList = [
    {
      id: 1,
      img: icon1,
      title: "SUSTAINABLE PACKAGING",
    },
    {
      id: 2,
      img: icon2,
      title: "CARBON NEGATIVE",
    },
    {
      id: 3,
      img: icon3,
      title: "GREENPOINTS LOYALTY",
    },
    {
      id: 4,
      img: icon4,
      title: "QUALITY ASSURED",
    },
    {
      id: 5,
      img: icon5,
      title: "FREE 48 HOUR DELIVERY",
    },
  ];
  return (
    <div>
      <div className="px-4 sm:px-[3vw] md:px-[4vw] lg:px-[3vw] mt-8">
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {/* card section */}

          {PlantList.map((item, index) => (
            <div key={index} className="  h-[130px] w-[120px]">
              <img
                className="h-[90px] w-[60px] object-contain rounded-md  m-auto hover:rotate-180 duration-500"
                src={item.img}
                alt=""
              />
              <p className=" text-sm font-semibold text-gray-800 text-center hover:text-green-700 duration-300 cursor-pointer tracking-widest">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plantbased;
