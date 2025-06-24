import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import CharactersSection from "../components/MainSection/MainSection";
import SlideBar from "../components/SlideBar/SlideBar";
import LeftOverlay from "../components/LeftOverlay/LeftOverlay";

import { useSlideBar } from "../context/SlideBarContext";

function Home() {
   const { isOpen } = useSlideBar();

   return (
      <>
         <LeftOverlay />
         {isOpen && <SlideBar />}
         <Header />
         <Banner />
         <About />
         <CharactersSection />
      </>
   );
};

export default Home;