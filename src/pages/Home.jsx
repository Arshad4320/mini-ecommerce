import React from "react";
import Header from "../components/Header";
import TrendingPhone from "../components/TrendingPhone";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <TrendingPhone />
      </section>
    </div>
  );
};

export default Home;
