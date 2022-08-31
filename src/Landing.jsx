import Contact from "./components/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";

const Landing = () => (
  <div className="flex flex-col items-center space-y-2 md:max-w-screen-lg md:pl-10 md:pr-10 lg:mx-auto">
    <Contact />
    <Hero />
    <Projects />
    <Footer />
  </div>
);

export default Landing;
