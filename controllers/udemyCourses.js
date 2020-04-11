const config = require('../utils/config');
const udemyCoursesRouter = require('express').Router();
const Udemy_course = require('../models/udemy');
const fetch = require('node-fetch');

const fixInstructors = (instructors) => {
  if (instructors[0].url === '/user/academind/') {
    return instructors[1];
  } else return instructors[0];
};

const postUdemyCourseToDB = async (data, tech) => {
  const courseData = {
    platform: 'udemy',
    udemy_id: data.id,
    title: data.title,
    url: data.url,
    price: data.price,
    instructor: {
      instructor_name: fixInstructors(data.visible_instructors).name,
      instructor_display_name: fixInstructors(data.visible_instructors)
        .display_name,
      instructor_title: fixInstructors(data.visible_instructors).title,
      instructor_url: fixInstructors(data.visible_instructors).url,
      instructor_image: fixInstructors(data.visible_instructors).image_100x100,
    },
    course_thumb: data.image_480x270,
    predictive_score: data.predictive_score,
    relevancy_score: data.relevancy_score,
    description: data.headline,
    tags: tech,
  };

  const newCourse = new Udemy_course(courseData);

  const savedCourse = await newCourse.save();
  console.log(`${savedCourse.title} was added successfully`);
};

const getUdemyCoursesData = async (tech) => {
  const api_url = `https://www.udemy.com/api-2.0/courses/?search=${tech}&category=Development&ordering=relevance&is_affiliate_agreed=True&page=1&page_size=10`;
  const fetch_response = await fetch(api_url, {
    method: 'GET',
    headers: {
      Authorization: config.UDEMY_AUTH,
    },
  });

  const data = await fetch_response.json();

  return data;
};

const updateUdemyCoursesDB = async () => {
  const ecosystem = [
    'javascript',
    'react',
    'vue',
    'angular',
    'node',
    'typescript',
    'gatsby',
  ];

  await Udemy_course.deleteMany({});

  ecosystem.forEach((tech, index) => {
    setTimeout(async () => {
      const coursesData = await getUdemyCoursesData(tech);

      coursesData.results.forEach(async (course) => {
        await postUdemyCourseToDB(course, tech);
      });
    }, 5000 * (index + 1));
  });
};

udemyCoursesRouter.get('/:tech', async (req, res) => {
  const api_url = `https://www.udemy.com/api-2.0/courses/?search=${req.params.tech}&category=Development&ordering=relevance&is_affiliate_agreed=True&page=1&page_size=10`;
  const fetch_response = await fetch(api_url, {
    method: 'GET',
    headers: {
      Authorization: config.UDEMY_AUTH,
    },
  });
  const json = await fetch_response.json();
  console.log(json.results.length);
  res.json(json);
});

module.exports = { udemyCoursesRouter, updateUdemyCoursesDB };
