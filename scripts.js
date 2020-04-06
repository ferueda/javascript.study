const coursesContainer = document.getElementById('courses-container');

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
    rating: 4.7,
    students: 16708,
  },
  {
    name: 'Modern JavaScript From The Beginning',
    description:
      'Learn and build projects with pure JavaScript, no frameworks or libraries',
    author: 'Brad Traversy',
    platform: 'Udemy',
    url: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/',
    tags: ['javascript'],
    thumbnail: 'https://img-a.udemycdn.com/course/480x270/1463348_52a4_2.jpg',
    rating: 4.7,
    students: 16708,
  },
  {
    name: 'Modern JavaScript From The Beginning',
    description:
      'Learn and build projects with pure JavaScript, no frameworks or libraries',
    author: 'Brad Traversy',
    platform: 'Udemy',
    url: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/',
    tags: ['javascript'],
    thumbnail: 'https://img-a.udemycdn.com/course/480x270/1463348_52a4_2.jpg',
    rating: 4.7,
    students: 16708,
  },
  {
    name: 'Modern JavaScript From The Beginning',
    description:
      'Learn and build projects with pure JavaScript, no frameworks or libraries',
    author: 'Brad Traversy',
    platform: 'Udemy',
    url: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/',
    tags: ['javascript'],
    thumbnail: 'https://img-a.udemycdn.com/course/480x270/1463348_52a4_2.jpg',
    rating: 4.7,
    students: 16708,
  },
];

const createCourseCard = (course) => {
  const card = document.createElement('div');
  card.classList.add('course-card');
  card.addEventListener('click', () => window.open(course.url, '_blank'));
  card.innerHTML = `
    <div class="course-card__title">${course.name}</div>
    <div class="course-card__thumb">
    <img src="${course.thumbnail}" alt="${course.description}" class="thumb__img" />
    </div>
    <div class="course-card__values">
      <div class="values__author">by <strong>${course.author} </strong></div>
      <div>&#11088; ${course.rating} - ${course.students}</div>
      <div><img src="/assets/logos/udemy-2.svg" /></div>
      
    </div>
    <div class="course-card__desc">${course.description}</div>
  `;
  return card;
};

courses.forEach((course) => {
  coursesContainer.appendChild(createCourseCard(course));
});
