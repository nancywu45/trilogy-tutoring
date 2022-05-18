import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import RequestATutor from "./pages/RequestATutor";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Services />
      <OurTeam />
      <RequestATutor />
    </div>
  );
}

export default App;
