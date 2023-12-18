'use client'

import { getCourseById } from '@/app/_services';
import React, { useEffect, useState } from 'react'
import VideoPlayer from './_components/VideoPlayer';
import CourseDetails from './_components/CourseDetails';
import OptionSection from './_components/OptionSection';
import EnrollSection from './_components/EnrollSection';
import { useUser } from '@clerk/nextjs';

const CoursePreview = ({ params }) => {

    const [courseDetails, setCourseDetails] = useState([]);
    const [userCourse, setUserCourse] = useState([]);

    const { user } = useUser();

    useEffect(() => {
        params.courseId ? getCourse(params.courseId) : null;
    }, [user]);

    const getCourse = () => {
        getCourseById(params.courseId, user?.primaryEmailAddress?.emailAddress).then(res => {
            console.log(res);
            setCourseDetails(res.courseList);
            setUserCourse(res?.userEnrollCourses[0]);
        });
    };

    return courseDetails?.name && (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='col-span-2'>
                    {courseDetails?.chapter[0] ? (
                        <VideoPlayer videoUrl={courseDetails?.chapter[0]?.video?.url} />
                    ) : null}
                    <CourseDetails courseDetails={courseDetails} />
                </div>
                <div className='mt-5 md:mt-0'>
                    <OptionSection />
                    <EnrollSection 
                        courseDetails={courseDetails}
                        userCourse={userCourse}
                    />
                </div>
            </div>
        </div>
    );
};

export default CoursePreview