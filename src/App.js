// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Music from "./pages/Music";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <main className="mt-16">
//         <Home />
//         <About />
//         <Music />
//         <Contact />
//       </main>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Navbar from "./components/Navbar";
import MusicLibrary from "./components/MusicLibrary";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to="/">Главная</Link>
            <Link to="/about">О группе</Link>
            <Link to="/music">Музыка</Link>
            <Link to="/contacts">Контакты</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<MusicLibrary />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
