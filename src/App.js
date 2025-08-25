import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesSection from "./components/FeatureCard";
import Unibox from "./components/Unibox";
import CallToActionSection from "./components/CalltoAction";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <div>
    <NavBar />
    <Hero />
    <Features />
    <FeaturesSection />
    <Unibox />
    <Testimonials />
    <CallToActionSection />
    <Footer />
  </div>
);

export default App;
