import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Features from "./sections/Features";
import Integrations from "./sections/Integrations";
import Faqs from "./sections/Faqs";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
