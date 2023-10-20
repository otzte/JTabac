import { useState } from "react";
import "./App.css";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { Donor } from "./pages/Donor/Donor";
import { Restaurant } from "./pages/Restaurant/Restaurant";
import { Receiver } from "./pages/Receiver/Receiver";
import { Register } from "./pages/Register/Register";
import { Landing } from "./pages/Landing/Landing";

function App() {
  return (
    <HashRouter>
      <h1>Seiten</h1>
      <br />
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/restaurant">Restaurant</Link>
        </li>
        <li>
          <Link to="/donor">Donor</Link>
        </li>
        <li>
          <Link to="/receiver">Receiver</Link>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/receiver" element={<Receiver />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
