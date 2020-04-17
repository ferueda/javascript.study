import React from 'react';

const Tech = ({ imgSrc, tech, handleTechFilter, filter }) => {
  return (
    <div
      className={
        filter === tech.toLowerCase()
          ? 'tech-container tech-container--active'
          : 'tech-container'
      }
      data-tech={tech.toLowerCase()}
      onClick={handleTechFilter}
    >
      <div className='logo-tech-container'>
        <img src={imgSrc} alt={`${tech} logo`} />
      </div>
      <span className='tech-name'>{tech}</span>
    </div>
  );
};

export default Tech;
