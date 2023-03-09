import React from "react";

function Portfolio() {
  const getName = () => {
    return "Gladys";
  };
  var me = getName();
  console.log(me);
  const projects = [
    {
      id: 1,
      title: "Random Jeopardy Game",
      image: require("../Resources/images/Jeopardy game.png"),
      deployedLink: "https://mccoydidericksen.github.io/jeopardy-game/",
      githubLink: "https://github.com/mccoydidericksen/jeopardy-game",
    },
    {
      id: 2,
      title: "Project Panda",
      image: require("../Resources/images/project panda.png"),
      deployedLink: "https://pure-depths-43598.herokuapp.com/",
      githubLink: "https://github.com/bradcoleman60/project-panda",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: require("../Resources/images/Weather Dashboard.png"),
      deployedLink: "https://isglad.github.io/weather-dashboard/",
      githubLink: "https://github.com/Isglad/weather-dashboard",
    },
    {
      id: 4,
      title: "Note Taker",
      image: require("../Resources/images/Note Taker.png"),
      deployedLink: "https://still-reaches-35459.herokuapp.com/",
      githubLink: "https://github.com/Isglad/Note-Taker",
    },

    {
      id: 5,
      title: "Password Generator",
      image: require("../Resources/images/Password Generator.png"),
      deployedLink: "https://isglad.github.io/password-generator/",
      githubLink: "https://github.com/Isglad/password-generator",
    },
    {
      id: 6,
      title: "Refactored Marketing Site",
      image: require("../Resources/images/refactored marketing site.png"),
      deployedLink:
        "https://isglad.github.io/refactoring-marketing-site/#search-engine-optimization",
      githubLink: "https://github.com/Isglad/refactoring-marketing-site",
    },
    {
      id: 7,
      title: "Work Day Scheduler",
      image: require("../Resources/images/work day scheduler.png"),
      deployedLink: "https://isglad.github.io/work-day-scheduler/",
      githubLink: "https://github.com/Isglad/work-day-scheduler",
    },
    {
      id: 8,
      title: "Code Quiz",
      image: require("../Resources/images/code quiz.png"),
      deployedLink: "https://isglad.github.io/code-quiz/",
      githubLink: "https://github.com/Isglad/code-quiz",
    },
  ];

  return (
    <div className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="img-style"
              />
            </a>
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Link
            </a>{" "}
            ||
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
