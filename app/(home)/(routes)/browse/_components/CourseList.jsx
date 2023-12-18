import { Book, Tv } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseList = ({ courses }) => {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 d:grid-cols-3 lg:grid-cols-4 gap-5">
      {courses.map((course, index) => (
        <Link href={"/course-preview/" + course.id} key={index}>
          <div
            key={index}
            className="border relative rounded-lg p-2 cursor-pointer hover:border-purple-400"
          >
            <Image
              src={course.banner.url}
              alt={course.name}
              width={1000}
              height={500}
              className="rounded-lg"
            />
            <div className="mt-2">
              <h2 className="text-[18px] md:text-[16px] font-medium font-mukta mb-3">
                {course.name}
              </h2>
              <span className="flex gap-1.5 items-center">
                <h2 className="flex gap-1 items-center px-[8px] py-[3px] bg-orange-200 text-xs font-medium font-mukta rounded-lg">
                  <Tv height={12} />
                  {course.author}
                </h2>
              </span>
              <div className="flex items-center gap-2 mt-2">
                <Book className="h-6 w6 text-purple-600 rounded-full bg-purple-100 p-1" />
                <h2 className="text-[12px] text-gray-400">
                  {course.totalChapters} Chapters
                </h2>
              </div>
              <div className="mt-2 flex gap-2 items-center">
                {course.tags.map((item, index) => (
                  <div
                    key={index}
                    className="text-xs font-medium font-mukta px-[4px] py-[2px] bg-gray-200 rounded-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <h2 className="mt-2 text-[14px] text-green-700 font-semibold">
                {course.free ? "Free" : Paid}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
