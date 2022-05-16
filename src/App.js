import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import RequestATutor from "./pages/RequestATutor";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <OurTeam />
      <Services />
      <RequestATutor />
    </div>
  );
}

export default App;
