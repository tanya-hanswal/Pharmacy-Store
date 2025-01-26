/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RecentProduct = () => {
  const navigate = useNavigate();
  const productList = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  });
  return (
    <div className="px-4 sm:px-[3vw] md:px-[4vw] lg:px-[3vw] mt-20">
      <div className="container">
        {/* header  sec*/}
        <div className=" text-left mb-10 ">
          <p className=" text-green-700 font-semibold text-3xl">
            Recently Add Products
          </p>
          <h1 className=" text-3xl font-bold">Medicines</h1>
          <p className=" text-gray-700 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem, cupiditate.
          </p>
        </div>
        {/* body sec */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2 md:gap-5 place-items-center">
          {productList.slice(16, 19).map((item, index) => (
            <div key={index} className="rounded-2xl  max-w-[300px]  h-[400px]">
              {/* image */}
              <div className="h-[100px]">
                <img
                  className="max-w-[240px] block mx-auto drop-shadow-lg hover:scale-105 duration-300 "
                  src={item.img}
                  alt="medicine"
                />
                {/* detail */}
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className=" text-yellow-500" />
                    <FaStar className=" text-yellow-500" />
                    <FaStar className=" text-yellow-500" />
                    <FaStar className=" text-yellow-500" />
                  </div>
                  <h1 className=" text-xl font-bold pt-4">{item.title}</h1>
                  <p className=" text-gray-700 ">Rs{item.price}</p>
                  <button
                    onClick={() => navigate(`/productDetail/${item.id}`)}
                    className="bg-yellow-500 hover:scale-100 duration-300 py-1 px-4 rounded-full mt-2 "
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProduct;
