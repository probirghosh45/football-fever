import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import Tickets from "./Pages/Tickets/Tickets";
import Countries from "./Pages/Countries/Countries";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="countries" element={<Countries/>} />
        <Route path="about" element={<About />} />
        <Route path="tickets" element={<Tickets/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
