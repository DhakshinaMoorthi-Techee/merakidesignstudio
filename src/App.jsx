import "./App.css";
import AboutFounder from "./components/AboutFounder";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SuccessStories from "./components/SuccessStories";
import TeamSection from "./components/TeamSection";
import Testimonials from "./components/Testimonials";
import ToolsSection from "./components/ToolsSection";
import VideoSection from "./components/VideoSection";
import WhyChooseUs from "./components/WhyChooseUs";
import WorkshopSection from "./components/WorkshopDesigner";

function App() {
  return (
    <div className="poppins-regular">
      <Navbar/>
      {/* <Hero/> */}
      <ToolsSection/>
      <VideoSection/>
      <SuccessStories/>
      <WorkshopSection/>
      <WhyChooseUs/>
      <AboutFounder/>
      <TeamSection/>
      <Testimonials/>
    </div>
  );
}

export default App;
