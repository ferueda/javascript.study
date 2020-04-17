import React from 'react';
import CourseCard from './CourseCard';

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

export default CourseContainer;
