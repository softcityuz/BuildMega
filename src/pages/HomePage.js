import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import History from "../components/OurHistory/History";
import Projects from "../components/Projects/Projects";
import RecentNews from "../components/RecentNews/RecentNews";
import Services from "../components/Services/Services";
import TopHeader from "../components/TopHeader/TopHeader";

function HomePage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <HomeCarousel />
      <Services />
      <History />
      <Projects />
      <RecentNews />
      <Footer />
    </div>
  );
}

export default HomePage;
