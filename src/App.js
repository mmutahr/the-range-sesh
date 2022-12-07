// App.jsx
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import MentalGameDrills from "./MentalGameDrills";
import SpinControlDrills from "./SpinControlDrills";

const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="teal lighten-1">
          <h1 className="white-text">The Range Sesh</h1>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/mental-game-drills" element={<MentalGameDrills />} />
          <Route path="spin-control" element={<SpinControlDrills />} />
        </Routes>
        <footer className="teal darken-3">
          <p className="white-text">Copyright The Range Sesh</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
