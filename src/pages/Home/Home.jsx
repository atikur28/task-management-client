import Navbar from "../SharedPages/Navbar";
import home_banner from "../../assets/images/home/home-banner.jpg";
import HomeBanner from "./HomeBanner/HomeBanner";
import Footer from "../SharedPages/Footer";
import Benefits from "./Benefits/Benefits";

const Home = () => {
  return (
    <div>
      <div style={{
          background:
            `url(${home_banner}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}>
        <Navbar></Navbar>
        <HomeBanner></HomeBanner>
      </div>
      <Benefits></Benefits>
      <Footer></Footer>
    </div>
  );
};

export default Home;
