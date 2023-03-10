import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h2 className="about-heading">About Me</h2>
          <div className="inner">
            <div className="about-text">
              <p>
                Hi, I'm Gladys Ange Isingizwe, a full stack web developer with a
                passion for creating dynamic and responsive web applications.
              </p>
              <p>
                My expertise lies in developing both the front-end and back-end
                of web applications, including designing user interfaces,
                writing server-side logic, integrating databases, and creating
                APIs. I'm proficient in HTML, CSS, JavaScript, React, Node.js,
                Express.js, MongoDB, and SQL, among other technologies.
              </p>
              <p>
                I'm also experienced in designing and integrating APIs, using
                version control systems like Git, and deploying web applications
                on cloud platforms such as AWS, Azure, and Google Cloud.
              </p>
              <p>
                As a full stack web developer, I'm committed to learning and
                growing in this field. I'm constantly seeking new challenges and
                opportunities to expand my knowledge and skills. If you're
                looking for a dedicated, motivated, problem solver, and skilled
                full stack web developer for your next project, please don't
                hesitate to connect with me.
              </p>
            </div>
            <div className="about-picture">
              <div className="wrapper">
                <div className="image-container">
                  <img
                    src={require("../Resources/images/Gladys.jpg")}
                    alt="Gladys"
                    className="image-style"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
