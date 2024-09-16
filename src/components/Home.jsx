import React from "react";
import "../styles/home.css";
import headshot from "../assets/my headshot.jpg";
const Home = () => {
  return (
    <div className="hom">
      <div className="web">
        <div className="deve">
          <h2 className="hi">Hello, i’m </h2>{" "}
        </div>
        <div className="name">
          <h2>Adekoya Precious </h2>
        </div>
        <div>
          <p className="hip">Freelance Fullstack developer I create seamless web experiences for
            end-users.</p>
        </div>
        <div>
          <button className="but">About Me</button>
          <button>Project</button>
        </div>
      </div>
      <div>
        <img className="im" src={headshot} alt="one fine boi like this" />
      </div>
    </div>
  );
};

export default Home;
