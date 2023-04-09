import React from "react";
import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";
import NotFound from "./NotFound";

const SingleCourses = () => {
  const params = useParams();
  const course = courses.find((course) => course.slug === params.slug);
  if (!course) {
    return <NotFound />
  }
  return (
    <>
      <h1>{course.title}</h1>
      <h2>{course.slug}</h2>
      <h1>{course.id}</h1>
      <Link to=".." relative="path">All courses</Link>
    </>
  );
};

export default SingleCourses;
