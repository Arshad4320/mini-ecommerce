import React from "react";
import Header from "../components/Header";
import TrendingPhone from "../components/TrendingPhone";
import BestSellProducts from "../components/BestSellProducts";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <TrendingPhone />
      </section>
      <section>
        <BestSellProducts />
      </section>
    </div>
  );
};

export default Home;
