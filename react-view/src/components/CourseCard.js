import React from 'react';

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

export default CourseCard;
