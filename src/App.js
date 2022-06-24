import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import Tickets from "./Pages/Tickets/Tickets";
import Countries from "./Components/Countries/Countries";
import Country from "./Components/Country/Country";
import GroupAB from "./Components/Groups/GroupAB";
import GroupCD from "./Components/Groups/GroupCD";
import GroupEF from "./Components/Groups/GroupEF";
import GroupGH from "./Components/Groups/GroupGH";
import RequiredAuth from "./Pages/Login/RequiredAuth";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<GroupAB/>} />
          <Route path="/group/C-D" element={<GroupCD/>}/>
          <Route path="/group/E-F" element={<GroupEF/>}/>
          <Route path="/group/G-H" element={<GroupGH/>}/>
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="countries" element={<Countries />} />
        <Route path="country-details/:id" element={<Country />} />
        <Route path="about" element={<About />} />
        {/* <Route path="tickets" element={<Tickets />} /> */}
        

        {/* Authentication */}
        <Route path="login" element={<Login/>} />
        <Route element={<RequiredAuth/>} >
        <Route path="tickets" element={<Tickets />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
