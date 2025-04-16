import Image from "next/image";
import Nav from "./component/nav";
import HeroSlider from "./component/slider";
import Hero from "./component/hero";
import Finance from "./component/finance";
import Footer from "./component/footer";
import Reels from "./component/reels";

export default function Home() {
  return (
    <div className="">
     <Nav/>
     <HeroSlider/>
     <Hero/>
     <Reels/>
     <Finance/>
     <Footer/>
    </div>
  );
}
