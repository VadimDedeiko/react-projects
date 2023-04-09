import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import courses from "../data/courses";

const SingleCourses = () => {
  const params = useParams();
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === params.slug);

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]
)
 // simple not found component
  /*if (!course) {
    return <NotFound />
  }*/
  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h1>{course?.id}</h1>
      <Link to=".." relative="path">All courses</Link>
    </>
  );
};

export default SingleCourses;
