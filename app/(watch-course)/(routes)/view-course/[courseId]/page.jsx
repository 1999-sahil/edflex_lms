"use client";

import { getCourseById } from "@/app/_services";
import { UserButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import ChapterNav from "./_components/ChapterNav";
import ChapterDetails from "./_components/ChapterDetails";
import { CompletedChapterContext } from "@/app/_context/CompletedChapterContext";

const ViewCourse = ({ params }) => {
  const { user } = useUser();

  const [course, setCourse] = useState([]);
  const [userCourse, setUserCourse] = useState([]);
  const [activeChapter, setActiveChapter] = useState();
  const [completedChapter, setCompletedChapter] = useState();

  useEffect(() => {
    user ? getCourse() : null;
  }, [user]);

  const getCourse = async () => {
    await getCourseById(
      params?.courseId,
      user.primaryEmailAddress.emailAddress
    ).then((res) => {
      console.log(res?.userEnrollCourses[0]?.completedChapter);
      setCourse(res.courseList);
      setUserCourse(res.userEnrollCourses);
      setCompletedChapter(res?.userEnrollCourses[0]?.completedChapter);
    });
  };

  return (
    course?.name && (
      <div className="flex">
        <CompletedChapterContext.Provider
            value={{ completedChapter, setCompletedChapter }}
        >
          <div className="w-64 hidden fixed bg-white md:block border shadow-sm h-screen z-50">
            {course ? (
              <ChapterNav
                course={course}
                userCourse={userCourse}
                setActiveChapter={(chapter) => setActiveChapter(chapter)}
              />
            ) : null}
          </div>
          <div className="md:ml-64 ml-0">
            <div className="p-4 float-right">
              <UserButton />
            </div>
            <ChapterDetails
              userCourse={userCourse} 
              activeChapter={activeChapter} 
            />
          </div>
        </CompletedChapterContext.Provider>
      </div>
    )
  );
};

export default ViewCourse;
