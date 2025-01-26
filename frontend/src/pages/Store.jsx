/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";

const Store = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [filterPro, setFilterPro] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const productList = useSelector((state) => state.products.items);

  const dispatch = useDispatch();
  useSelector((state) => state.cart);

  const applyFilter = () => {
    if (category) {
      setFilterPro(productList.filter((pro) => pro.category === category));
    } else {
      setFilterPro(productList);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
    applyFilter();
  }, [category]);
  return (
    <div className="px-4 sm:px-[3vw] md:px-[4vw] lg:px-[3vw] ">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-1 pt-10  ">
        {/* filters */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            Filters
            <FaGreaterThan
              className={` text-sm sm:hidden ${showFilter ? "rotate-90" : ""}`}
            />
          </p>
          {/*  */}
          <div
            className={`border border-gray-50 pl-3  mt-1 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <div className="flex flex-col gap-2 cursor-pointer w-32 ">
              <p
                className={`text-lg font-semibold text-center cursor-pointer pt-2 pb-2 border border-gray-300 rounded-sm ${
                  category === "tablet" ? " bg-green-700 border-green-600" : ""
                }`}
                onClick={() =>
                  category === "tablet"
                    ? navigate("/store")
                    : navigate("/store/tablet")
                }
              >
                Tablet
              </p>
              <p
                className={`text-lg font-semibold text-center cursor-pointer pt-2 pb-2 border border-gray-300 rounded-sm ${
                  category === "liquid" ? " bg-green-700 border-green-600" : ""
                }`}
                onClick={() =>
                  category === "liquid"
                    ? navigate("/store")
                    : navigate("/store/liquid")
                }
              >
                Liquid
              </p>
              <p
                className={`text-lg font-semibold text-center cursor-pointer pt-2 pb-2 border border-gray-300 rounded-sm ${
                  category === "skin" ? " bg-green-700 border-green-600" : ""
                }`}
                onClick={() =>
                  category === "skin"
                    ? navigate("/store")
                    : navigate("/store/skin")
                }
              >
                Skin
              </p>
              <p
                className={`text-lg font-semibold text-center cursor-pointer pt-2 pb-2 border border-gray-300 rounded-sm ${
                  category === "capsule" ? " bg-green-700 border-green-600" : ""
                }`}
                onClick={() =>
                  category === "capsule"
                    ? navigate("/store")
                    : navigate("/store/capsule")
                }
              >
                Capsule
              </p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <p className="font-semibold">
              All <span className="text-primary">Medicines</span>
            </p>
          </div>

          {/* products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
            {filterPro.map((item) => (
              <div key={item.id}>
                <div className="overflow-hidden   ">
                  <img
                    className="object-contain hover:scale-110 transition ease-in-out w-40 h-40  "
                    src={item.img}
                    alt="product image"
                  />
                </div>
                <p className="pt-3 pb-1"> {item.title}</p>
                <p className="text-sm font-medium"> Rs {item.price}</p>
                <div className=" flex  items-center gap-2">
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />

                  <span className="mr-2 ml-3 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
                    5.0
                  </span>
                </div>
                <div className="flex gap-4 pt-3">
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="flex items-center justify-center rounded-md bg-yellow-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none  "
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={() => navigate(`/productDetail/${item.id}`)}
                    className="flex items-center justify-center rounded-md bg-yellow-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none  "
                  >
                    View Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;

// <div className="  lg:flex md:block ">
//   <div className="mt-10  w-[150px] h-[150px] text-center  md:ml-10">
//     <h5 className="text-2xl font-semibold underline underline-offset-4 mb-2">
//       Filters
//     </h5>
//     <p
//       className={`text-lg font-semibold cursor-pointer pt-2 pb-2 border rounded-sm ${
//         category === "tablet" ? " bg-green-700 border-green-600" : ""
//       }`}
//       onClick={() =>
//         category === "tablet"
//           ? navigate("/store")
//           : navigate("/store/tablet")
//       }
//     >
//       Tablet
//     </p>
//     <p
//       className={`text-lg font-semibold cursor-pointer pt-2 pb-2 border mt-2  rounded-sm ${
//         category === "liquid" ? " bg-green-700 border-green-600 " : ""
//       }`}
//       onClick={() =>
//         category === "liquid"
//           ? navigate("/store")
//           : navigate("/store/liquid")
//       }
//     >
//       Liquid
//     </p>
//     <p
//       className={`text-lg font-semibold cursor-pointer pt-2 pb-2 border mt-2  rounded-sm${
//         category === "skin" ? " bg-green-700 border-green-600 " : ""
//       }`}
//       onClick={() =>
//         category === "skin" ? navigate("/store") : navigate("/store/skin")
//       }
//     >
//       Skin
//     </p>
//     <p
//       className={`text-lg font-semibold cursor-pointer pt-2 pb-2 border mt-2  rounded-sm ${
//         category === "capsule" ? " bg-green-700 border-green-600 " : ""
//       }`}
//       onClick={() =>
//         category === "capsule"
//           ? navigate("/store")
//           : navigate("/store/capsule")
//       }
//     >
//       Capsule
//     </p>
//   </div>

//   <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-9 md:mt-24">
//     {filterPro.map((item, index) => (
//       <div key={index}>
//         <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-sm border border-gray-200 bg-white shadow-md">
//           <div className="relative mx-3 mt-3 h-48 flex  overflow-hidden rounded-xl">
//             <img
//               className="object-cover "
//               src={item.img}
//               alt="product image"
//             />
//           </div>
//           <div className="mt-4 px-5 pb-5">
//             <h5 className="text-xl tracking-tight text-slate-900">
//               {item.title}
//             </h5>

//             <div className="mt-2 mb-5 flex items-center justify-between">
//               <p>
//                 <span className="text-2xl font-bold text-slate-900">
//                   Rs {item.price}
//                 </span>
//               </p>
//               <div className="flex items-center gap-1">
//                 <FaStar className="text-yellow-500 " />
//                 <FaStar className="text-yellow-500 " />
//                 <FaStar className="text-yellow-500 " />
//                 <FaStar className="text-yellow-500 " />
//                 <FaStar className="text-yellow-500 " />

//                 <span className="mr-2 ml-3 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
//                   5.0
//                 </span>
//               </div>
//             </div>
//             <div className="flex gap-6">
//               <button
//                 onClick={() => dispatch(addToCart(item))}
//                 className="flex items-center justify-center rounded-md bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none  "
//               >
//                 Add to cart
//               </button>
//               <button
//                 onClick={() => navigate(`/productDetail/${item.id}`)}
//                 className="flex items-center justify-center rounded-md bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none  "
//               >
//                 View Detail
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
