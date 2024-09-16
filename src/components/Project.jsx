import React from "react";
import tet from "../assets/tetran.png";
import "../styles/project.css";
import link from "../assets/link.png";
import { Link } from "react-router-dom";
import gitlink from "../assets/githubfill.png";
const Project = () => {
  return (
      <div id="project">
          <div className="htig">
              <h1>Projects</h1>
              <p>Things I’ve built so far</p>
          </div>
      <div className="pact">
        <div className="proj">
          <img src={tet} alt="" />
          <h5>TETRANGLES PROJECT LIMITED</h5>
          <p>
            This is sample project description random things are here in
            description This is sample project lorem ipsum generator for dummy
            content
          </p>
          <h6>
            Tech stack:{" "}
            <span id="proj"> HTML , JavaScript, CSS, React, Bootstarap</span>
          </h6>
          <div className="lank">
            <Link className="wad">
              <img src={link} alt="" />
              <p>Live Preview</p>
            </Link>
            <Link className="wad">
              <img src={gitlink} alt="" />
              <p>View Code</p>
            </Link>
          </div>
        </div>
        <div className="proj">
          <img src={tet} alt="" />
          <h5> PROJECT </h5>
          <p>
            This is sample project description random things are here in
            description This is sample project lorem ipsum generator for dummy
            content
          </p>
          <h6>
            Tech stack:{" "}
            <span id="proj"> HTML , JavaScript, CSS, React, Bootstarap</span>
          </h6>
          <div className="lank">
            <Link className="wad">
              <img src={link} alt="" />
              <p>Live Preview</p>
            </Link>
            <Link className="wad">
              <img src={gitlink} alt="" />
              <p>View Code</p>
            </Link>
          </div>
        </div>
        <div className="proj">
          <img src={tet} alt="" />
          <h5> PROJECT </h5>
          <p>
            This is sample project description random things are here in
            description This is sample project lorem ipsum generator for dummy
            content
          </p>
          <h6>
            Tech stack:{" "}
            <span id="proj"> HTML , JavaScript, CSS, React, Bootstarap</span>
          </h6>
          <div className="lank">
            <Link className="wad">
              <img src={link} alt="" />
              <p>Live Preview</p>
            </Link>
            <Link className="wad">
              <img src={gitlink} alt="" />
              <p>View Code</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
