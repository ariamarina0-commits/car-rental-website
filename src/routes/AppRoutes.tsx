import { Route, Routes } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Fleet from "../pages/Fleet";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import Booking from "../pages/Booking";
import NotFound from "../pages/NotFound";
import CarDetails from "../pages/CarDetails";
import Privacy from "../pages/Privacy";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/fleet/:id" element={<CarDetails/>}/>
        <Route path="/privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;