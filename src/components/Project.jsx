import React from "react";
import tet from "../assets/tetran.png";
import "../styles/project.css";
import link from "../assets/link.png";
import { Link } from "react-router-dom";
import gitlink from "../assets/githubfill.png";
import portfollio from "../assets/portfolio.png"
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
            This is a web site i built for tetrangle project limited which is  a construction  SOON TO BE READY 
          </p>
          <h6>
            Tech stack:{" "}
            <span id="proj"> HTML , JavaScript, CSS, React, Bootstarap</span>
          </h6>
          <div className="lank">
            <a target="_blank" href="" className="wad">
              <img src={link} alt="" />
              <p>Live Preview</p>
            </a>
            <a target="_blank" href="" className="wad">
              <img src={gitlink} alt="" />
              <p>View Code</p>
            </a>
          </div>
        </div>
        <div className="proj">
          <img src={portfollio} alt="" />
          <h5> PRECIOUS PORTFOLIO </h5>
          <p>
            This is a website i built for my self where i list my skill, projects and my contact information
          </p>
          <h6>
            Tech stack:{" "}
            <span id="proj"> HTML , JavaScript, CSS, React, Bootstarap</span>
          </h6>
           <div className="lank">
            <a href="https://adekoyapreciousabdulfatai.vercel.app" target="_blank" className="wad">
              <img src={link} alt="" />
              <p>Live Preview</p>
            </a>
            <a target="_blank" href="https://github.com/adekoya1-1/my-portfolio" className="wad">
              <img src={gitlink} alt="" />
              <p>View Code</p>
            </a>
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
            <a target="_blank" href="" className="wad">
              <img src={link} alt="" />
              <p>Live Preview</p>
            </a>
            <a target="_blank" href="" className="wad">
              <img src={gitlink} alt="" />
              <p>View Code</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
