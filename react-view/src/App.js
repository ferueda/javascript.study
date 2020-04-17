import React, { useState, useEffect } from 'react';
import udemyService from './services/udemyCourses';
import Header from './components/Header';
import Nav from './components/Nav';
import CourseContainer from './components/CourseContainer';

function App() {
  const [courses, setCourses] = useState([]);
  const [courseFilter, setCourseFilter] = useState(null);

  useEffect(() => {
    udemyService.getAll().then((data) => setCourses(data));
  }, []);

  const handleTechFilter = (e) => {
    const tech = e.currentTarget.getAttribute('data-tech');

    if (!courseFilter || courseFilter !== tech) {
      setCourseFilter(tech);
    } else {
      setCourseFilter(null);
    }
  };

  const coursesToShow = courseFilter
    ? courses.filter((course) => course.tags.includes(courseFilter))
    : courses;

  return (
    <React.Fragment>
      <Header />
      <Nav
        handleTechFilter={handleTechFilter}
        filter={courseFilter ? courseFilter : false}
      />
      <CourseContainer courses={coursesToShow} />
    </React.Fragment>
  );
}

export default App;
