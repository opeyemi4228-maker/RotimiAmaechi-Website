'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Info from "@/components/Info";
import ValiantStories from "@/components/stories";
import News from "@/components/news";

const Home = () => {
  return (
    <>
      <div className="">
        <HeaderSlider />
        <HomeProducts />
        <ValiantStories />
        <Info />
        <FeaturedProduct />
        <Banner />
        <News />
        <NewsLetter />
      </div>
    
    </>
  );
};

export default Home;
