import React from 'react'

const Courses = ({ courses }) => {
  return courses.map(course => <Course key = {course.id} course={course} />);
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <p style={{ fontWeight: "bold" }}>
        total of {course.parts.reduce((sum, ex) => sum + ex.exercises, 0)}{" "}
        exercises
      </p>
    </div>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return parts.map(part => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default Courses;