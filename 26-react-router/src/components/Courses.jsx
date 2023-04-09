import React, { useEffect, useState } from "react";
import courses from "../data/courses";
import { Link, useLocation, useNavigate } from "react-router-dom";
import querystring from "query-string";

const SORT_KEYS = ['title', 'slug', 'id']
function sortCourses(courses, key) {
  const sortInnerCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortInnerCourses;
  }
  sortInnerCourses.sort((a, b) => a[key] > b[key] ? 1 : -1);
  return sortInnerCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = querystring.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey));
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey(undefined);
    }
  }, [sortKey, navigate])
  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {
        sortedCourses.map(
          (course) =>
            (
              <div key={course.id}>
                <Link to={course.slug} className="courseLink">{course.title}</Link>
              </div>
            )
        )
      }
    </>
  );
};

export default Courses;
