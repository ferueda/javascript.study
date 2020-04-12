const getUdemyCourseData = async () => {
  const response = await fetch('http://localhost:3001/api/courses');
  const data = await response.json();
  return data;
};
