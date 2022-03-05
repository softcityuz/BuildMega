import React from "react";
import Footer from "../components/Footer/Footer";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import History from "../components/OurHistory/History";
import Projects from "../components/Projects/Projects";
import RecentNews from "../components/RecentNews/RecentNews";
import Services from "../components/Services/Services";
function HomePage() {
  return (
    <div>
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
