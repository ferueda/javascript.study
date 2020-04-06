const coursesContainer = document.getElementById('courses-container');
const coursesNumber = document.getElementById('courses-number');

const courses = [
  {
    name: 'Modern JavaScript From The Beginning',
    description:
      'Learn and build projects with pure JavaScript, no frameworks or libraries',
    author: 'Brad Traversy',
    platform: 'Udemy',
    url: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/',
    tags: ['javascript'],
    thumbnail: 'https://img-a.udemycdn.com/course/480x270/1463348_52a4_2.jpg',
    platformLogo: '/assets/logos/udemy-2.svg',
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
    platformLogo: '/assets/logos/udemy-2.svg',
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
    platformLogo: '/assets/logos/udemy-2.svg',
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
    thumbnail: '/assets/course-thumbs/beginner-javascript.jpg',
    platformLogo: '/assets/logos/wes-bos.png',
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
    thumbnail: '/assets/course-thumbs/mcginnisreact.jpg',
    platformLogo: '/assets/logos/tylermcginnis.svg',
    rating: 4.8,
    students: 0,
  },
];

coursesNumber.textContent = courses.length;

const formatNumber = (number) => {
  return String(number).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
};

const createCourseCard = (course) => {
  const card = document.createElement('div');
  card.classList.add('course-card');
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
      <div>&#11088; ${course.rating} ${
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

courses.forEach((course) => {
  coursesContainer.appendChild(createCourseCard(course));
});
