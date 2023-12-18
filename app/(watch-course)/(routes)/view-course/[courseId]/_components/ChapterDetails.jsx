import { CompletedChapterContext } from '@/app/_context/CompletedChapterContext';
import { CheckCircle, Redo } from 'lucide-react'
import React, { useContext } from 'react'
import { markChapterCompleted } from '@/app/_services';

const ChapterDetails = ({ activeChapter, userCourse }) => {
  console.log(activeChapter)

  const { completedChapter, setCompletedChapter } = useContext(CompletedChapterContext);

  const isChapterCompleted = (chaptedId) => {
    return completedChapter.find(item => item.chaptedId === chaptedId);
  };

  const markChapterCompleted = async () => {
    if(!completedChapter?.length) {
      setCompletedChapter([]);
    }
    completedChapter ? setCompletedChapter(
      [...completedChapter, {
        chaptedId:activeChapter?.chapterNumber+''
      }]
    ) : setCompletedChapter([{
      chaptedId:activeChapter?.chapterNumber+''
    }]);

    await markChapterCompleted(userCourse.id, activeChapter?.chapterNumber).then(res => {
      console.log(res);
    })
    console.log('completedChapter', completedChapter);
  };

  return activeChapter && (
    <div className='p-4'>
      <video
        width='1000'
        height='300'
        controls
        controlsList='nodownload'
        key={activeChapter?.video?.url}
      >
        <source
          src={activeChapter?.video?.url}
          type='video/mp4' 
        />
      </video>

      <div className='p-4 border rounded-lg mt-5 flex justify-between items-center'>
        <h2 className='text-[20px] font-medium font-mukta'>
          {activeChapter?.name}
        </h2>
        {!isChapterCompleted(activeChapter?.chapterNumber) ? (
          <button 
            onClick={() => markChapterCompleted()}
            className='bg-emerald-500 flex p-2 px-5 gap-2 rounded-lg text-white font-mukta hover:bg-emerald-800'
          >
            <CheckCircle />
            <h2>Mark as Completed</h2>
          </button>
        ) : null}
        {/*
        (
          <button className='flex p-2 px-5 gap-2 border border-emerald-600 rounded-lg text-emerald-700 font-mukta hover:bg-emerald-800 hover:text-white'>
            <Redo />
            <h2>Mark as Incompleted</h2>
          </button>
        )
         */}
      </div>
    </div>
  )
}

export default ChapterDetails