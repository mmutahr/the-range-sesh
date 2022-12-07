import Drill from "./Drill";

const SpinControlDrills = () => {
  return (
    <section>
      <h2 className="card-title">Spin Control Drills</h2>
      <ul className="collection">
        <Drill
          name="The Clock Drill"
          description="This drill helps golfers to better understand the concept of creating spin on the golf ball by focusing on the path of the club face throughout the swing. To start, set up a clock face (with 12, 3, 6 and 9) on the ground with a golf ball at the center. Take a few practice swings and align the club face to the appropriate number on the clock face for each swing. For example, if you are swinging back on the left side, the club face should be aligned to the 12 o'clock position. As you swing through impact, the club face should be aligned to the 3 o'clock position. Focus on keeping the club face aligned to the appropriate number throughout the entire swing."
        />
        <Drill
          name="The Shovel Drill"
          description="This drill helps golfers to understand how to move the club head to create spin on the ball. To start, take a golf club and position it parallel to the ground, with the butt of the grip facing the target and the club face slightly open. From this position, begin the backswing by swinging the club up and out, rotating the face of the club down, towards the target. As you swing through impact, continue to rotate the club face down and up, creating a scooping motion with the club head. This will help you to create spin on the golf ball."
        />
        <Drill
          name="The Pop Up Drill"
          description="This drill helps golfers to understand the importance of the angle of attack and club face position in creating spin on the ball. To start, take a golf club and position it parallel to the ground, with the butt of the grip facing the target and the club face slightly open. From this position, begin the backswing by swinging the club up and out, rotating the face of the club down, towards the target. As you swing through impact, allow the club face to remain open and focus on creating a shallow angle of attack. This will help you to pop the ball up in the air with a high amount of spin."
        />
      </ul>
    </section>
  );
};

export default SpinControlDrills;
