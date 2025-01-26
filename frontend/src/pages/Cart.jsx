/* eslint-disable no-unused-vars */
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import emptyCart from "../assets/images/emptyCart.png";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      {cart.items.length > 0 ? (
        <section className="bg-white py-8 antialiased  md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 ">
              Shopping Cart
            </h2>
            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
                    {/*  */}
                    {cart.items.map((item, index) => (
                      <div
                        key={index}
                        className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0"
                      >
                        <div className="shrink-0 md:order-1">
                          <img
                            className="w-[90px] h-[90px]"
                            src={item.img}
                            alt=""
                          />
                        </div>

                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                            >
                              -
                            </button>
                            <p className=" w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 ">
                              {item.quantity}
                            </p>

                            <button
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                            >
                              +
                            </button>
                          </div>
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900 ">
                              Rs{item.price * item.quantity}
                            </p>
                          </div>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <p className="text-base font-medium text-gray-900 hover:underline">
                            {item.title}
                          </p>

                          <div className="flex items-center gap-4">
                            <p>Rs{item.price}</p>
                            <button
                              onClick={() => dispatch(removeFromCart(item.id))}
                            >
                              <FaTrashAlt className="text-red-700" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/*  */}
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
                  <p className="text-xl font-semibold text-gray-900 ">
                    Order summary
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-base font-normal text-gray-500 ">
                          Total Items :
                        </span>
                        <span> {cart.totalQuantity}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                      <p className="text-base font-bold text-gray-900 ">
                        Total Price
                      </p>
                      <p className="text-base font-bold text-gray-900 ">
                        <span>Rs{cart.totalPrice}</span>
                      </p>
                    </div>
                  </div>

                  <button className=" rounded-md bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <img
            className="w-[200px] h-[200px] m-auto mt-40 mb-40"
            src={emptyCart}
            alt=""
          />
        </div>
      )}

    
    </div>
  );
};

export default Cart;
