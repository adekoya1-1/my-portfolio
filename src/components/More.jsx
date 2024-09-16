import React from "react";
import web from "../assets/code.png";
import version from "../assets/version.png";
import node from "../assets/node.png";
import slider from "../assets/slider.png";
import "../styles/more.css";
const More = () => {
  return (
    <div id="seb">
      <div className="seb">
        <img src={web} alt="" />
        <h5>WEB DEVELOPMENT</h5>
        <p>
          I create beautiful iterfaces with simple HTML, CSS, & JavaScript and
          also frameworks like ReactJS
        </p>
      </div>
      <div className="seb">
        <img src={version} alt="" />
        <h5>VERSION CONTROL</h5>
        <p>
          I can use version control systems well, while Git is my go-to tool.
        </p>
      </div>{" "}
      <div className="seb">
        <img src={node} alt="" />
        <h5>NPM AND NODEJS</h5>
        <p>
          I have core understanding of NPM. I can also develop general purpose
          applications with NodeJS
        </p>
      </div>
      <div className="seb">
        <img src={slider} alt="" />
        <h5>WEB SCRAPING</h5>
        <p>
          I can collect content and data from the internet then manipulate and
          analyze as needed.
        </p>
      </div>
    </div>
  );
};

export default More;
