import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import IntroVideo from "./components/IntroVideo";
import Services from "./components/Services";
import NajCoders from "./components/NajCoders";
import JoiningUs from "./components/JoiningUs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return ( 
    <div className="flex flex-col min-h-screen bg-black text-white w-full">
      {/* <Header /> */}
      <Hero />
      <Brands />
      <IntroVideo />
      <Services />
      <NajCoders />
      <JoiningUs />
      <Newsletter />
      <Footer />
    </div>
  );
}