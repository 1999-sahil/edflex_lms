import { CompletedChapterContext } from '@/app/_context/CompletedChapterContext';
import { CheckCircle2, PauseCircle, PlayCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'

const ChapterNav = ({ course, userCourse, setActiveChapter }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const { completedChapter, setCompletedChapter } = useContext(CompletedChapterContext);

  useEffect(() => {
    setActiveChapter(course?.chapter[0]);
  }, []);

  const isChapterCompleted = (chaptedId) => {
    return completedChapter.find(item => item.chaptedId === chaptedId);
  };

  return (
    <div>
        <div className='border-b p-4'>
          <h2 className='font-medium font-mukta text-[20px]'>{course.name}</h2>
          <h2 className='text-sm font-mukta font-medium text-gray-500'>By {course.author}</h2>
        </div>

        <div>
          {course.chapter.map((chapter, index) => (
            <div 
              key={index}
              onClick={() => {
                setActiveIndex(index)
                setActiveChapter(chapter)
              }}
              className={`flex gap-2 text-gray-500 font-mukta items-center text-[16px] px-5 p-4 cursor-pointer hover:bg-gray-100
                ${activeIndex === index ? 'bg-emerald-100 text-green-700 font-medium' : null}
                ${isChapterCompleted(chapter.chapterNumber) && activeIndex !== index ? 'bg-purple-100 text-purple-600' : null}`
              }
            >
              {
                activeIndex === index ? (
                  <PauseCircle height={20} />
                ) : (
                  isChapterCompleted(chapter.chapterNumber) ? (
                    <CheckCircle2 height={20} />
                  ) : (
                    <PlayCircle height={20} />
                  )
                )
              }

              <h2>{chapter.name}</h2>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ChapterNav