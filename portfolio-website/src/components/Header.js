import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#282c34', color: '#fff' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Chanchal Ghorai</h1>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
          <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li><a href="#skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</a></li>
          <li><a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a></li>
          <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
