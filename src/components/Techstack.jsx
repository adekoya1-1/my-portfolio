import React from "react";
import "../styles/techstack.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tail from "../assets/tail.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import boot from "../assets/boot.png";

const Techstack = () => {
  return (
    <div id="techs">
      <div className="nolu">
        <h2>My Tech Stack</h2>
        <p> Technologies I’ve been working with recently</p>
      </div>
      <section>
        <div className="vs">
          <div className="gits">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
          </div>
          <div className="gits">
            <img src={boot} alt="" />
            <img src={tail} alt="" />
            <img src={react} alt="" />
          </div>
        </div>
        <div className="git">
          <img src={vscode} alt="" />
          <img src={git} alt="" />
          <img src={github} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Techstack;
