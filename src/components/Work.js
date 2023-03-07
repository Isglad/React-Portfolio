import React from 'react';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/example/project1'
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/example/project2'
    },
    {
      id: 3,
      title: 'Project 3',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/example/project3'
    },
    {
      id: 4,
      title: 'Project 4',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/example/project4'
    },
    {
      id: 5,
      title: 'Project 5',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/example/project5'
    },
    {
      id: 6,
      title: 'Project 6',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/example/project6'
    }
  ];

  return (
    <div className="section">
      <h2>Portfolio</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} />
          </a>
          <div>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Link</a> || 
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
