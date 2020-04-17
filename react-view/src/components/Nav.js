import React from 'react';
import Tech from './Tech';

const Nav = () => {
  const logosSrc = [
    'JavaScript',
    'React',
    'Vue',
    'Angular',
    'Node',
    'TypeScript',
    'Gatsby',
  ];

  return (
    <nav className='tech-nav'>
      {logosSrc.map((logo) => {
        return (
          <Tech
            key={logo}
            imgSrc={`assets/logos/${logo}.svg`}
            tech={`${logo}`}
          />
        );
      })}
    </nav>
  );
};

export default Nav;
