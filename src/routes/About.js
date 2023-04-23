import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/night.jpg?raw=true"
        title="About"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
