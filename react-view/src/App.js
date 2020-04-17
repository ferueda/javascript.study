import React, { useState, useEffect } from 'react';
import udemyService from './services/udemyCourses';

const Header = () => {
  return (
    <header>
      <h1>
        <a href='/'>
          Master the <span>JavaScript</span> Ecosystem
        </a>
      </h1>
      <p>
        We aggregate the top rated courses on the JavaScript ecosystem so you
        don't have to
      </p>
    </header>
  );
};

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

const CourseCard = ({ course }) => {
  const style = {
    maxHeight: 45,
  };

  return (
    <div className='course-card' data-groups={`[${course.tags}]`}>
      <div className='course-card__title'>{course.title}</div>
      <div className='course-card__thumb'>
        <img
          className='thumb__img'
          src={course.course_thumb}
          alt={course.description}
        />
      </div>
      <div className='course-card__values'>
        <div className='values__author'>
          <strong>{course.instructor.instructor_title}</strong>
        </div>
        <div className='values__platform'>
          <img src='assets/logos/udemy-2.svg' style={style} alt='udemy logo' />
        </div>
      </div>
      <div className='course-card__desc'>{course.description}</div>
    </div>
  );
};

const CourseContainer = ({ courses }) => {
  return (
    <main>
      <section className='courses-container' id='courses-container'>
        {courses.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </section>
    </main>
  );
};

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    udemyService.getAll().then((data) => setCourses(data));
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <CourseContainer courses={courses} />
    </>
  );
}

export default App;
