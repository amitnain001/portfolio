import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Sociallinks from "./components/Sociallinks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Rotuer, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Rotuer>
        <Header />
        <Sociallinks />
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/experience' element={<Experience />} />
          <Route exact path='/projects' element={<Portfolio />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Rotuer>
    </div>
  );
}

export default App;
