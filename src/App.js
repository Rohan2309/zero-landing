import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import HeaderComponent from "./components/HeaderComponent";
import DetailComponent from "./components/DetailComponent";
import IconComponent from "./components/IconComponent";
import AboutComponent from "./components/AboutComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeaderComponent />
      <DetailComponent />
      <IconComponent />
      <AboutComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
