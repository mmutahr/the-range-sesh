// Home.jsx
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <h2>Welcome to The Range Sesh</h2>
      <p>
        At The Range Sesh, we offer top-quality golf equipment and accessories
        at competitive prices. Our team is dedicated to providing excellent
        customer service and a seamless shopping experience.
      </p>
      <a href="/mental-game-drills" className="btn">
        Learn more about our mental game drills
      </a>
      <a href="/spin-control" className="btn">
        Learn more about our spin control drills
      </a>
    </section>
  );
};

export default Home;
