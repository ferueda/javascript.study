const getUdemyCourseData = async () => {
  const response = await fetch(
    'https://boiling-taiga-70590.herokuapp.com/api/courses'
  );
  const data = await response.json();
  return data;
};
