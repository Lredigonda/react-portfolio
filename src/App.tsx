import { Route, Routes } from "react-router-dom";
import "./App.scss";

import { Footer } from "./app-components/footer";
import { Navbar } from "./app-components/navbar";
import About from "./pages/about";
import { Curriculum } from "./pages/curriculum";
import { HomePage } from "./pages/home-page";
import { Projects } from "./pages/projects";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
