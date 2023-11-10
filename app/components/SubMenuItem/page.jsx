import React from 'react';

const SubMenuItem = () => {
  const subMenuItemStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    margin: '8px',
  };

  const headingStyle = {
    color: '#333',
  };

  return (
    <div style={subMenuItemStyle}>
      <h1 style={headingStyle}>SubMenuItem sub-child Component</h1>
    </div>
  );
};

export default SubMenuItem;
