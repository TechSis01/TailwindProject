import Hero from "./assets/Hero";
import Features from "./assets/Features";
import ProofSection from "./assets/ProofSection";
import Testimonial from "./assets/Testimonial";
import profiles from "./assets/Profile";
import MiniSection from "./MiniSection";
import DownloadSection from "./assets/DownloadSection";
import Screenshot from "./assets/Screenshot";
import Release from "./assets/Release";
import Footer from "./assets/Footer";
function App() {
  return (
    <>
      <Hero />
      <Features />
      <ProofSection />
      <Testimonial data={profiles} beauty="font-bold"/>
      <MiniSection />
      <Screenshot />
      <DownloadSection />
      <Release />
      <Footer />
    </>
  );
}

export default App;
