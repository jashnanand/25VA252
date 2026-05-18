import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "../Component/Nav";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Gallery from "../Component/Gallery";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

