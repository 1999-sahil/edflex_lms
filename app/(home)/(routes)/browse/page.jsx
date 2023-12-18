'use client'

import React, { useEffect, useState } from 'react'
import CategoryFilter from './_components/CategoryFilter'
import { getCourseList } from '@/app/_services';
import CourseList from './_components/CourseList';

function Browse () {

  const [courses, setCourses] = useState();
  const [coursesOrg, setCoursesOrg] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList().then(res => {
      console.log(res);
      setCourses(res.courseLists);
      setCoursesOrg(res.courseLists);
    });
  };

  const filterCourse = (category) => {
    if (category === 'all') {
      setCourses(coursesOrg);
    }
    const filteredList = coursesOrg.filter(course => {
      return course.tags.includes(category);
    });
    setCourses(filteredList);
  };

  return (
    <div>
      <CategoryFilter selectedCategory={(category) => filterCourse(category)} />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  )
}

export default Browse