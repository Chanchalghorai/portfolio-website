const Skills = () => {
    const skills = ['MS Office', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Java'];
  
    return (
      <section id="skills" style={{ padding: '50px 20px', backgroundColor: '#fff' }}>
        <h2>Skills</h2>
        <ul style={{ display: 'flex', gap: '10px', listStyle: 'none', padding: '0' }}>
          {skills.map((skill, index) => (
            <li key={index} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Skills;
  