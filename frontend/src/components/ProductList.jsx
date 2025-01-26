/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductList = () => {
  const navigate = useNavigate();
  const productList = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="mt-14 mb-12 px-4 sm:px-[3vw] md:px-[4vw] lg:px-[3vw]">
      <div className="container">
        {/*  */}
        <div className=" text-center mb-10 max-w-[600px] mx-auto">
          <p className=" text-green-700 font-semibold text-3xl">
            Top Trending Products
          </p>
          <h1 className=" text-3xl font-bold">Medicines</h1>
          <p className=" text-gray-700 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem, cupiditate.
          </p>
        </div>
        {/* body */}

        <div>
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
            {/* card section */}

            {productList.slice(0, 6).map((item, index) => (
              <div key={index}>
                <NavLink to={`/productDetail/${item.id}`}>
                  <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-sm border border-gray-200 bg-white shadow-md">
                    <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                      <img
                        className="object-contain "
                        src={item.img}
                        alt="product image"
                      />
                    </div>
                    <div className="mt-4 px-5 pb-5">
                      <h5 className="text-xl tracking-tight text-slate-900">
                        {item.title}
                      </h5>

                      <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                          <span className="text-2xl font-bold text-slate-900">
                            Rs {item.price}
                          </span>
                        </p>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-500 " />
                          <FaStar className="text-yellow-500 " />
                          <FaStar className="text-yellow-500 " />
                          <FaStar className="text-yellow-500 " />
                          <FaStar className="text-yellow-500 " />

                          <span className="mr-2 ml-3 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
                            5.0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-16">
            <button
              onClick={() => {
                navigate("/store");
                scrollTo(0, 0);
              }}
              className=" text-center  bg-yellow-500 hover:scale-105 duration-200 text-black font-semibold py-2 px-4 rounded-full mb-8 "
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
