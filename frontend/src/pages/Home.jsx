import React, { Suspense } from "react";
import Hero from "../components/Hero";
import RecentProduct from "../components/RecentProduct";
import Plantbased from "../components/Plantbased";
const AboutMedicine = React.lazy(() => import("../components/AboutMedicine"));
const ProductList = React.lazy(() => import("../components/ProductList"));

const Home = () => {
  return (
    <div>
      <Hero />
      <Plantbased />
      <Suspense fallback={<p>This is loading please wait...</p>}>
        <ProductList />
      </Suspense>
      <Suspense fallback={<p>This is loading please wait...</p>}>
        <AboutMedicine />
      </Suspense>
      <RecentProduct />
    </div>
  );
};

export default Home;
