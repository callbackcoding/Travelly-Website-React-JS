import "./App.css";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Newsletter from "./Components/Newsletter/Newsletter";
import Partners from "./Components/Partners/Partners";
import MyTestimonial from "./Components/Testimonial/MyTestimonial";
import TopDestination from "./Components/TopDestination/TopDestination";
import TravelPoint from "./Components/TravelPoint/TravelPoint";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <TopDestination />
      <TravelPoint />
      <Features />
      <MyTestimonial />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
