import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import RequestATutor from "./pages/RequestATutor";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Services />
      <OurTeam />
      <RequestATutor />
    </div>
  );
}

export default App;
