const Projects = () => {
    const projects = [
      { title: 'Weather App', description: 'This website created using HTML, CSS , JavaScript for Front-end and Express js for Back-end.', link: '#' },
      { title: 'TextUtils', description: 'This website build using HTML, CSS , ReactJs.', link: 'https://text-utils-chanchal.vercel.app/' },
    ];
  
    return (
      <section id="projects" style={{ padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
        <h2>Projects</h2>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {projects.map((project, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                View Project
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Projects;
  