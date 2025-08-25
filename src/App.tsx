import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default App;
