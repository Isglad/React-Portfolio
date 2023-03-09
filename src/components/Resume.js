import React from "react";

export default function Resume() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 resume">
          <h2>Resume</h2>
          <p>
            Here's a link to my{" "}
            <a
              href={require("../Resources/Resume/myResume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              resume
            </a>
            .
          </p>
          <h3>Front-end Proficiencies</h3>
          <br />
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <br />
          <h3>Back-end Proficiencies</h3>
          <br />
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
