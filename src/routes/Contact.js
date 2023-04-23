import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/11.jpg?raw=true"
        title="Contact"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
