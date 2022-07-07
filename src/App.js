import logo from "./logo.svg";
import "./scss/styles.js";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Landing from "./pages/Landing";

import GalleryPage from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <div>
        <Routes>
          <Route path="/" element={<Landing  />} />
          <Route index element={<Landing />} />
          <Route path="about" element={<About/>} />
          <Route path="gallery" element={<GalleryPage/>} />
          <Route path="users" element={<div style={{minHeight:"75vh", marginTop:"50px", padding:"50px 100px"}}><h4>Contact Us</h4> </div>} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}



export default App;
