// MentalGameDrills.jsx
import "materialize-css/dist/css/materialize.min.css";
import React from "react";

const MentalGameDrills = () => {
  return (
    <section>
      <h2>Mental Game Drills</h2>
      <p>
        The mental game is just as important as the physical game in golf. To
        improve your mental game, try the following drills:
      </p>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <h3>Visualization</h3>
              <p>
                Close your eyes and visualize yourself hitting the perfect shot.
                Imagine the ball flying straight and true, landing exactly where
                you want it to. Repeat this exercise before each shot to help
                focus your mind and calm your nerves.
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <h3>Positive Self-Talk</h3>
              <p>
                Instead of getting down on yourself when you hit a bad shot, try
                to reframe your thinking. Tell yourself that you can learn from
                the mistake and do better next time. Use positive self-talk to
                boost your confidence and keep yourself motivated.
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <h3>Breathing Exercises</h3>
              <p>
                Breathing exercises can help you relax and focus your mind. Try
                taking slow, deep breaths before each shot. Inhale for a count
                of four, hold your breath for a count of four, and exhale for a
                count of four. This simple technique can help you calm your
                nerves and improve your concentration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalGameDrills;
