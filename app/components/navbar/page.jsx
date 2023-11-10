import React from 'react';
import MenuItem from '../MenuItem/page';

const Navbar = () => {
  const navbarStyle = {
    background: '#f0f0f0',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  };

  const headingStyle = {
    color: '#333',
  };

  return (
    <nav style={navbarStyle}>
      <h1 style={headingStyle}>Navbar ---parent component</h1>
      <MenuItem />
    </nav>
  );
};

export default Navbar;
