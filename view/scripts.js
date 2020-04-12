const coursesContainer = document.getElementById('courses-container');
const techElements = [...document.querySelectorAll('.tech-container')];

let courses = [];

let coursesToShow = [...courses];

const filterCourses = (filter) => {
  if (!filter) {
    coursesToShow = [...courses];
  } else {
    coursesToShow = courses.filter((course) => course.tags.includes(filter));
  }

  renderCourseCards(coursesToShow);
};

const renderCourseCards = (courses) => {
  coursesContainer.innerHTML = '';
  if (courses.length === 0) {
    const noCourseDiv = createEmptyDiv();
    coursesContainer.appendChild(noCourseDiv);
    noCourseDiv.classList.add('mounted');
    noCourseDiv.style.textAlign = 'center';
  }
  courses.forEach((course) => {
    const card = createCourseCard(course);
    coursesContainer.appendChild(card);
    card.classList.add('mounted');
  });
};

techElements.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('tech-container--active')) {
      element.classList.remove('tech-container--active');
      filterCourses(null);
    } else {
      element.classList.add('tech-container--active');
      filterCourses(element.dataset.tech);
    }

    techElements.forEach((e) => {
      e !== element ? e.classList.remove('tech-container--active') : false;
    });
  });
});

const formatNumber = (number) => {
  return String(number).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
};

const createEmptyDiv = () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2 class="notification">Oops... looks like there are no courses right now</h2>
  `;
  return div;
};

// const createCourseCard = (course) => {
//   const card = document.createElement('div');
//   card.classList.add('course-card');
//   card.setAttribute('data-groups', `[${course.tags.map((tag) => `"${tag}"`)}]`);
//   card.addEventListener('click', () => window.open(course.url, '_blank'));
//   card.innerHTML = `
//     <div class="course-card__title">${course.name}</div>
//     <div class="course-card__thumb">
//     <img src="${course.thumbnail}" alt="${
//     course.description
//   }" class="thumb__img" />
//     </div>
//     <div class="course-card__values">
//       <div class="values__author"><strong>${course.author} </strong></div>
//       <div class="values__reviews-container">&#11088; ${course.rating} ${
//     course.students
//       ? `<span class="values__reviews">(${formatNumber(
//           course.students
//         )})</span>`
//       : ''
//   }</div>
//       <div class="values__platform"><img src="${
//         course.platformLogo
//       }" style="max-height: 45px"/></div>

//     </div>
//     <div class="course-card__desc">${course.description}</div>
//   `;
//   return card;
// };

const createCourseCard = (course) => {
  const card = document.createElement('div');
  card.classList.add('course-card');
  card.setAttribute('data-groups', `[${course.tags}]`);
  card.addEventListener('click', () =>
    window.open(`https://www.udemy.com${course.url}`, '_blank')
  );
  card.innerHTML = `
    <div class="course-card__title">${course.title}</div>
    <div class="course-card__thumb">
    <img src="${course.course_thumb}" alt="${course.description}" class="thumb__img" />
    </div>
    <div class="course-card__values">
      <div class="values__author"><strong>${course.instructor.instructor_title} </strong></div>
      
      <div class="values__platform"><img src="assets/logos/udemy-2.svg" style="max-height: 45px"/></div>
      
    </div>
    <div class="course-card__desc">${course.description}</div>
  `;
  return card;
};

// <div class="values__reviews-container">&#11088; ${4.7}</div>

getUdemyCourseData().then((data) => {
  courses = [...data];
  renderCourseCards(courses);
});
