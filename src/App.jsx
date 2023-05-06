import Header from "./components/Header"
import HeroPage from "./components/HeroPage"
import OurServices from "./components/OurServices"
import FeaturedSales from "./components/FeaturedSales"
import AboutUs from "./components/AboutUs"
import Team from "./components/Team"
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="w-full relative font-[Nunito] bg-[#FAFAFA]">
      <main>
        <Header />
        <HeroPage />
        <OurServices />
        <FeaturedSales />
        <AboutUs/>
        <Team/>
        <Testimonials/>
        <Footer/>
      </main>
    </div>
  );
}

export default App
