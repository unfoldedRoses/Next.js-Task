import React from 'react';
import SubMenuItem from '../SubMenuItem/page';

const MenuItem = () => {
  const menuItemStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    margin: '8px',
  };

  const headingStyle = {
    color: '#333',
  };

  return (
    <div style={menuItemStyle}>
      <h2 style={headingStyle}>Menu Item  ----child component</h2>
      <SubMenuItem />
    </div>
  );
};

export default MenuItem;
