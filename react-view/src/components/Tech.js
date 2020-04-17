import React from 'react';

const Tech = ({ imgSrc, tech }) => {
  return (
    <div className='tech-container' data-tech='javascript'>
      <div className='logo-tech-container'>
        <img src={imgSrc} alt={`${tech} logo`} />
      </div>
      <span className='tech-name'>{tech}</span>
    </div>
  );
};

export default Tech;
