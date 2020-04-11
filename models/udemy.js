const mongoose = require('mongoose');

const udemyCourseSchema = new mongoose.Schema({
  platform: String,
  udemy_id: Number,
  title: String,
  url: String,
  price: String,
  instructor: {
    instructor_name: String,
    instructor_display_name: String,
    instructor_title: String,
    instructor_url: String,
    instructor_image: String,
  },
  course_thumb: String,
  predictive_score: Number,
  relevancy_score: Number,
  description: String,
  tags: [String],
  rating: Number,
  students: Number,
});

udemyCourseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Udemy = mongoose.model('Udemy', udemyCourseSchema);

module.exports = Udemy;
