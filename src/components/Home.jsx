import React from "react";
import "../styles/home.css";
import headshot from "../assets/my headshot.jpg";
const Home = () => {
  return (
    <div className="hom" >
      <div className="web">
        <div className="deve">
          <h3 id="home">Hello, i’m </h3>
          <h2>Adekoya Precious </h2>
          <p>
            Freelance Fullstack developer I create seamless web experiences for
            end-users.
          </p>
        </div>
        <div className="batt">
          <a href="#about" className="but">
            <button >About Me</button>
          </a>
          <a className="but" href="#project">
            <button>Project</button>
          </a>
        </div>
      </div>
      <div>
        <img className="im" src={headshot} alt="one fine boi like this" />
      </div>
    </div>
  );
};

export default Home;
