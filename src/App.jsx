import Features from "./components/Features";
import HeroSection from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import RecentBlog from "./components/RecentBlog";
import Testimonials from "./components/Testimonials";
import Vision from "./components/Vision";

function App() {
  return (
    <div className="p-1">
      <Navbar />
      <HeroSection />
      <Features />
      <Vision />
      <Testimonials />
      <RecentBlog />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
