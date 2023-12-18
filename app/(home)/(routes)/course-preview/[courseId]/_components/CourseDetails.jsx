import { Book } from 'lucide-react'
import React from 'react'

const CourseDetails = ({ courseDetails }) => {
    return (
        <div className='mt-5 p-4 rounded-lg border'>
            <h2 className='text-[22px] font-medium font-mukta'>
                {courseDetails.name}
            </h2>
            <div className="flex items-center gap-2 mt-2">
                <Book className="h-6 w6 text-purple-600 rounded-full bg-purple-100 p-1" />
                <h2 className="text-[12px] text-gray-400">
                  {courseDetails?.totalChapters} Chapters
                </h2>
            </div>
            <p className='line-clamp-4 mt-5 text-gray-400 text-sm'>{courseDetails.description}</p>
        </div>
    )
}

export default CourseDetails