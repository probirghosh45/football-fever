import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import Home from "./Pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Countries from "./Components/Countries/Countries";
import Tickets from "./Pages/Tickets/Tickets";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Country from "./Components/Country/Country";
import NotFound from "./Pages/NotFound/NotFound";
import GroupAB from "./Components/Groups/GroupAB";
import GroupCD from "./Components/Groups/GroupCD";
import GroupEF from "./Components/Groups/GroupEF";
import GroupGH from "./Components/Groups/GroupGH";
import RequiredAuth from "./Pages/Login/RequiredAuth";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />}>
          <Route index element={<GroupAB />} />
          <Route path="Group/C-D" element={<GroupCD />} />
          <Route path="Group/E-F" element={<GroupEF />} />
          <Route path="Group/G-H" element={<GroupGH />} />
        </Route>
        <Route path="countries" element={<Countries />} />
        <Route path="country/:id" element={<Country />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />


        <Route element={<RequiredAuth />}>
          <Route path="tickets" element={<Tickets />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
