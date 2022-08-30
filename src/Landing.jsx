import Contact from "./components/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";

const Landing = () => (
  <div className="flex flex-col items-center mx-auto space-y-2 max-w-screen-lg">
    <Contact />
    <Hero />
    <Projects />
    <Footer />
  </div>
);

export default Landing;
