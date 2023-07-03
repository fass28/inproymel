import { Header } from "./components/Header/Header";
import { Welcome } from "./components/Welcome/Welcome";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Services } from "./components/Services/Services";
import { Clientes } from "./components/Clientes/Clientes";
import { WhyUs } from "./components/WhyUs/WhyUs";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";
import { WhatsApp } from "./components/WhatsApp/WhatsApp";

export const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <AboutUs />
      <Services />
      <Clientes />
      <WhyUs />
      <ContactUs />
      <Footer />
      <WhatsApp />
    </>
  );
};
