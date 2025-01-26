/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoWhite from "../assets/images/home/logoWhite.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const items = useSelector((state) => state.cart.items);

  return (
    <header>
      <hr className=" border-gray-500 " />
      <div className=" px-4 sm:px-[3vw] md:px-[4vw] lg:px-[3vw] bg-primary  ">
        <div className="flex items-center justify-between py-5">
          <img
            onClick={() => navigate("/")}
            className=" w-32 cursor-pointer"
            src={logoWhite}
            alt=""
          />
          <ul className="hidden sm:flex gap-5  ">
            <NavLink
              to={"/"}
              className="hover:text-yellow-500 font-bold text-white   "
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              to={"/about"}
              className="hover:text-yellow-500 font-bold text-white"
            >
              <p>About</p>
            </NavLink>
            <NavLink
              to={"/store"}
              className="hover:text-yellow-500 font-bold text-white"
            >
              <p>Store</p>
            </NavLink>
            <NavLink
              to={"/contact"}
              className="hover:text-yellow-500 font-bold text-white"
            >
              <p>Contact</p>
            </NavLink>
          </ul>

          {/*  */}

          <div className="flex items-center gap-6">
            <IoSearch
              onClick={() => navigate("/store")}
              className=" text-2xl text-white cursor-pointer"
            />

            <Link to={"/cart"} className=" relative">
              <IoBagOutline className="  cursor-pointer text-2xl text-white" />
              <p className=" absolute right-[-5px] bottom-[-5px] w-5 text-center leading-4 bg-yellow-600 text-black aspect-square rounded-full text-[-8px] pt-1  ">
                {items.length > 0 && <span>{items.length}</span>}
              </p>
            </Link>

            <FiMenu
              onClick={() => setVisible(true)}
              className="  cursor-pointer text-2xl sm:hidden text-white"
            />
          </div>
          {/* menu for small screen */}

          <div
            className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all z-50 ${
              visible ? "w-full" : "w-0"
            } `}
          >
            <div className=" flex flex-col text-white">
              <div
                onClick={() => setVisible(false)}
                className="flex items-center gap-4 p-3"
              >
                <AiOutlineArrowLeft className="  cursor-pointer text-2xl" />
              </div>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6  border border-l-0"
                to={"/"}
              >
                HOME
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 border border-l-0"
                to={"/about"}
              >
                ABOUT
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 border border-l-0"
                to={"/store"}
              >
                STORE
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 border border-l-0"
                to={"/contact"}
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <hr className=" border-gray-500" />
    </header>
  );
};

export default Navbar;
