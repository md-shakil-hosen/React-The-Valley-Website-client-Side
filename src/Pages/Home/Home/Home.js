import React from "react";
import Banner from "../Banner/Banner";
import TourPackage from "../TourPackage/TourPackage";
import AdvPack from "../../Home/Section/AdvPack/AdvPack";
import Articles from "../Section/Articles/Articles";
import Packages from "../Section/Packages/Packages";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvPack></AdvPack>
      <Packages></Packages>
      <TourPackage></TourPackage>
      <Articles></Articles>
    </div>
  );
};

export default Home;
