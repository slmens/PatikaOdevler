import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import BelowHero from "./components/belowHero/BelowHero.jsx";
import OurClasses from "./components/OurClasses/OurClasses.jsx";
import Bmi from "./components/bmi/Bmi.jsx";
import Trainer from "./components/trainer/Trainer.jsx";
import Purchase from "./components/purchase/Purchase.jsx";
import Review from "./components/review/Review.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BelowHero />
      <OurClasses />
      <Bmi />
      <Trainer />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
