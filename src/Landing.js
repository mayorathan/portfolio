import "./Landing.css";

import Navbar from "./components/Navbar";
import About from "./container/About/About";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";

const Landing = () => (
  <div>
    <Navbar />
    <About id='about'>
      <div style={{ height: "100vh" }} />
    </About>

    <Header id='header'>
      <div style={{ height: "100vh" }} />
    </Header>

    <Footer id='footer'>
      <div style={{ height: "100vh" }} />
    </Footer>
  </div>
);

export default Landing;
