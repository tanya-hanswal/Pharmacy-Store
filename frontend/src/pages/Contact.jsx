/* eslint-disable no-unused-vars */
import React from "react";
import cbd from "../assets/images/home/cbd.jpg";

const Contact = () => {
  return (
    <div>
      <div className="container w-[90%] h-full max-w-[70rem] grid grid-cols-1 items-center gap-16 m-auto mt-20  md:grid-cols-2">
        <div className="content-left">
          <div className="pb-3">
            <h6 className="pb-5 text-green-700 text-2xl font-semibold">
              Need help? Get in Touch
            </h6>
            <h2 className="text-5xl font-bold tracking-wider">
              Don&lsquo;t Be a Stranger Just Say Hello.
            </h2>
          </div>
          <p className="text-gray-700">
            Our customer service team will be happy to assist you. We will work
            closely with you, as an extension of your team, to provide
            solutions.
          </p>
        </div>
        <div className="content-right">
          <div
            style={{
              backgroundImage: `url(${cbd})`,
              width: "90%",
              position: "relative",
              marginLeft: "auto",
              padding: "2rem 2.6rem",
            }}
          >
            <h3 className=" text-center text-2xl text-gray-100 font-semibold pb-5">
              Have Any Question?
            </h3>
            <form>
              <input
                className="w-full h-[60px] mb-4 pl-4 outline-none"
                type="text"
                name="Complete Name"
                placeholder="Complete Name"
                required
              />
              <br />
              <input
                className="w-full h-[60px] mb-4 pl-4 outline-none"
                type="email"
                name="Email Address"
                placeholder="Email Address"
                required
              />{" "}
              <br />
              <input
                className="w-full h-[60px] mb-4 pl-4 outline-none"
                type="number"
                name="Phone No"
                placeholder="Phone No"
                required
              />{" "}
              <br />
              <textarea
                className="w-full h-[60px] mb-4 pl-4 outline-none pt-4"
                placeholder="Your Message"
              ></textarea>
              <div className="flex justify-center">
                <button className="text-center  bg-yellow-500 hover:scale-105 duration-200 text-black font-semibold py-2 px-4 rounded-full ">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
