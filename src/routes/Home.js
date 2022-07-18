import React from 'react';
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import HomeProjects from "../components/HomeProjects";
import Footer from "../components/Footer";

const Home = () => {
  return (
      <div>
        <Navbar/>
        <HeroImg />
        <HomeProjects />
        <Footer />
    </div>
  );
};

export default Home;