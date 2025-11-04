import React from "react";
import Header from "../components/Header";
import TrendingPhone from "../components/TrendingPhone";
import BestSellProducts from "../components/BestSellProducts";
import MarqueeCard from "../components/MarqueeCard";

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
      <section>
        <MarqueeCard />
      </section>
    </div>
  );
};

export default Home;
