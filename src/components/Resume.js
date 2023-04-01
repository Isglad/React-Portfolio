import React from "react";

export default function Resume() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 resume">
          <h2>Technical Skills</h2>
          <h3>Front-end Development</h3>
          <br />
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Progressive Web App</li>
            <li>State Management</li>
            <li>Handlebars</li>
            <li>Local Storage</li>
            <li>IndexDB</li>
            <li>GraphQL</li>
          </ul>
          <br />
          <h3>Back-end Development</h3>
          <br />
          <ul>
            <li>Express.js</li>
            <li>Node.js</li>
          </ul>
          <br />
          <h3>Databases</h3>
          <ul>
            <li>MongoDB, Mongoose</li>
            <li>MySQL, Sequelize</li>
            <li>NoSQL</li>
          </ul>
          <br />
          <h3>API Design</h3>
          <ul>
            <li>REST</li>
            <li>API</li>
            <li>JSON</li>
            <li>AJAX</li>
          </ul>
          <br />
          <h3>Deployment and Delivery</h3>
          <ul>
            <li>Heroku</li>
            <li>GitHub Pages</li>
            <li>Continuous Integration</li>
          </ul>
          <br />
          <h3>Other</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Unit Testing</li>
            <li>Linting</li>
            <li>Object-Oriented Programming (OOP)</li>
            <li>Model-View-Controller (MVC)</li>
          </ul>
          <br />
          <p>
            You can download my{" "}
            <a
              href={require("../Resources/Resume/Gladys_Ange_Isingizwe-Resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              resume
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
