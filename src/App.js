import Header from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      {/*<About />
      <Contact />
      <Service />*/}
    </div>
  );
}

export default App;
