import React, { useState, useEffect } from 'react';
import udemyService from './services/udemyCourses';
import Header from './components/Header';
import Nav from './components/Nav';
import CourseContainer from './components/CourseContainer';

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
