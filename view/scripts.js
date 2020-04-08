const coursesContainer = document.getElementById('courses-container');
const coursesNumber = document.getElementById('courses-number');
const techElements = [...document.querySelectorAll('.tech-container')];

const courses = [
  {
    name: 'Modern JavaScript From The Beginning',
    description:
      'Learn and build projects with pure JavaScript, no frameworks or libraries',
    author: 'Brad Traversy',
    platform: 'Udemy',
    url: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/',
    tags: ['javascript', 'react'],
    thumbnail: 'https://img-a.udemycdn.com/course/480x270/1463348_52a4_2.jpg',
    platformLogo: 'assets/logos/udemy-2.svg',
    rating: 4.7,
    students: 16708,
  },
  {
    name: 'The Complete JavaScript Course 2020',
    description:
      'Master JavaScript  with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack',
    author: 'Jonas Schmedtmann',
    platform: 'Udemy',
    url: 'https://www.udemy.com/course/the-complete-javascript-course/',
    tags: ['javascript'],
    thumbnail: 'https://img-a.udemycdn.com/course/240x135/851712_fc61_5.jpg',
    platformLogo: 'assets/logos/udemy-2.svg',
    rating: 4.6,
    students: 67690,
  },
  {
    name: 'The Modern JavaScript Bootcamp',
    description:
      'Learn JavaScript by building real-world apps. Includes 3 real-world projects, 80 programming challenges, and ES6/ES7!',
    author: 'Andrew Mead',
    platform: 'Udemy',
    url: 'https://www.udemy.com/course/modern-javascript/',
    tags: ['javascript'],
    thumbnail: 'https://img-a.udemycdn.com/course/240x135/1470810_a8b0.jpg',
    platformLogo: 'assets/logos/udemy-2.svg',
    rating: 4.7,
    students: 7991,
  },
  {
    name: 'Beginners Javascript!',
    description:
      'Learn and build projects with pure JavaScript, no frameworks or libraries',
    author: 'Wes Bos',
    platform: 'wesbos',
    url: 'https://beginnerjavascript.com/',
    tags: ['javascript'],
    thumbnail: '/view/assets/course-thumbs/beginner-javascript.jpg',
    platformLogo: 'assets/logos/wes-bos.png',
    rating: 4.9,
    students: 12899,
  },
  {
    name: 'Tyler Mcginnis: React',
    description: `If you're serious about learning React, there's no better place to do it. Originally launched in 2016.`,
    author: 'Tyler Mcginnis',
    platform: 'tylermcginnis.com',
    url: 'https://tylermcginnis.com/courses/react/',
    tags: ['react'],
    thumbnail: '/view/assets/course-thumbs/mcginnisreact.jpg',
    platformLogo: 'assets/logos/tylermcginnis.svg',
    rating: 4.8,
    students: 0,
  },
];

coursesNumber.textContent = courses.length;

let coursesToShow = [...courses];

// const filterCourses = () => {
//   const filtered = techElements
//     .filter((el) => el.classList.contains('tech-container--active'))
//     .map((el) => el.attributes['data-tech'].value);

//   if (filtered.length === 0) {
//     coursesToShow = [...courses];
//   } else {
//     coursesToShow = courses.filter((course) => {
//       return filtered.includes(...course.tags);
//     });
//   }

//   renderCourseCards(coursesToShow);
// };

const filterCourses = () => {
  const filtered = techElements
    .filter((el) => el.classList.contains('tech-container--active'))
    .map((el) => el.attributes['data-tech'].value);

  if (filtered.length === 0) {
    coursesToShow = [...courses];
  } else {
    coursesToShow = courses.filter((course) =>
      course.tags.some((tag) => filtered.includes(tag))
    );
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

techElements.forEach((element) =>
  element.addEventListener('click', () => {
    element.classList.toggle('tech-container--active');
    filterCourses();
  })
);

const formatNumber = (number) => {
  return String(number).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
};

const createEmptyDiv = () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>Oops... looks like there are no courses right now</h2>
  `;
  return div;
};

const createCourseCard = (course) => {
  const card = document.createElement('div');
  card.classList.add('course-card');
  card.setAttribute('data-groups', `[${course.tags.map((tag) => `"${tag}"`)}]`);
  card.addEventListener('click', () => window.open(course.url, '_blank'));
  card.innerHTML = `
    <div class="course-card__title">${course.name}</div>
    <div class="course-card__thumb">
    <img src="${course.thumbnail}" alt="${
    course.description
  }" class="thumb__img" />
    </div>
    <div class="course-card__values">
      <div class="values__author">by <strong>${course.author} </strong></div>
      <div class="values__reviews-container">&#11088; ${course.rating} ${
    course.students
      ? `<span class="values__reviews">(${formatNumber(
          course.students
        )})</span>`
      : ''
  }</div>
      <div><img src="${course.platformLogo}" style="max-height: 45px"/></div>
      
    </div>
    <div class="course-card__desc">${course.description}</div>
  `;
  return card;
};

renderCourseCards(coursesToShow);
