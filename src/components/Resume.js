import React from "react";

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        Here's a link to my{" "}
        <a href="../../Resources/Resume/myResume.pdf" target= "_blank" rel="noopener noreferrer" download>
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
  );
}
