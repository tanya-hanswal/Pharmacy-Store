/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAllProductByIdAsync,
  selectedProductById,
} from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const product = useSelector(selectedProductById);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchAllProductByIdAsync(id));
  }, [dispatch, id]);

  return (
    <div className="px-4 sm:px-[3vw] md:px-[4vw] lg:px-[3vw] mt-8">
      <div className="container w-[90%] h-full max-w-[70rem] grid grid-cols-1 items-center gap-16 m-auto mt-20  md:grid-cols-2">
        <div className="product-left">
          <div className="mb-4">
            <img className="object-cover" src={product.img} alt="product" />
          </div>
        </div>
        <div className="product-right">
          <div className="flex  items-center gap-2">
            <p className="text-green-700 font-bold">Available </p>
            <FaStar className="text-yellow-500 " />
            <FaStar className="text-yellow-500 " />
            <FaStar className="text-yellow-500 " />
            <FaStar className="text-yellow-500 " />
            <FaStar className="text-yellow-500 " />

            <span className="mr-2 ml-3 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>

          <p className="text-3xl font-semibold  mb-3 ">{product.title}</p>
          <p className="text-3xl font-semibold  mb-3 ">Rs{product.price}</p>

          <button
            className="bg-yellow-500 hover:scale-100 duration-300 px-4 py-2 rounded-full mt-2 font-semibold mb-4"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className=" mt-3 ">
        <ul>
          <li className="flex gap-2  tracking-wider text-gray-600 mb-3">
            <span className="text-black font-semibold text-lg">
              Description:
            </span>
            {product.detail}
          </li>
        </ul>
        <hr className="border-gray-400" />
        <div className="mt-3">
          <h6 className="text-2xl text-green-800 font-semibold text-center">
            Additional Information
          </h6>
          <ul className="mt-4">
            <li className="flex gap-2  tracking-wider text-gray-600 mb-2">
              <span className="text-black font-semibold text-lg">
                Ingredient:
              </span>
              {product.ingredient}
            </li>
            <li className="flex gap-2  tracking-wider text-gray-600 mb-2">
              <span className="text-black font-semibold text-lg">
                Side Effect:
              </span>
              {product.sideEffect}
            </li>
            <li className="flex gap-2  tracking-wider text-gray-600 mb-2">
              <span className="text-black font-semibold text-lg">Uses: </span>
              {product.uses}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
