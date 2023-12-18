import { EnrollCourse, PublishCourse } from '@/app/_services';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react'

const EnrollSection = ({ courseDetails, userCourse }) => {

    const { user } = useUser();

    const router = useRouter();

    const enrollCourse = async() => {
        if(user) {
            await EnrollCourse(courseDetails.id, user.primaryEmailAddress.emailAddress)
            .then(async(res) => {
                console.log('Enroll Course Res => ', res);
                if(res) {
                    await PublishCourse(res?.createUserEnrollCourse?.id)
                    .then(result => {
                        console.log('Publish Course', result);
                        if(result) {
                            router.push('/view-course/' + courseDetails.id);
                        }
                    })
                }
            })
        } else {
            router.push('/sign-in')
        }
    };

    return (
        <div>
            {userCourse?.courseId ? (
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500 font-mukta'>
                        Learn, Build, Grow and Repeat. Access Source Code and Track your progress for free!
                    </h2>
                    <button 
                        className='p-2 font-mukta w-full bg-emerald-600 hover:bg-emerald-800 text-white rounded-lg text-[14px] mt-2'
                        onClick={() => router.push('/view-course/' + courseDetails.id)}
                    >
                        Continue...
                    </button>
                </div>
            ) : null}
            {courseDetails.free && !userCourse?.courseId ? (
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500 font-mukta'>
                        Learn, Build, Grow and Repeat. Access Source Code and Track your progress for free!
                    </h2>
                    <button 
                        className='p-2 font-mukta w-full bg-emerald-600 hover:bg-emerald-800 text-white rounded-lg text-[14px] mt-2'
                        onClick={() => enrollCourse()}
                    >
                        Enroll Now
                    </button>
                </div>
            ) : (
                !userCourse?.courseId ? (
                    <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500 font-mukta'>
                        Buy this course, source code and track your progress.
                    </h2>
                    <button className='p-2 font-mukta w-full bg-emerald-600 hover:bg-emerald-800 text-white rounded-lg text-[14px] mt-2'>
                        Buy this Course
                    </button>
                </div>
                ) : null
            )}
            <div className='mt-5 border rounded-lg p-2 text-center'>
                <h2 className='text-gray-500 font-mukta'>
                    But monthly membership and get access to all courses, source codes and track your progress.
                </h2>
                <button className='p-2 font-mukta w-full bg-red-600 hover:bg-red-800 text-white rounded-lg text-[14px] mt-2'>
                    Buy membership $4.99/month
                </button>
            </div>
        </div>
    )
}

export default EnrollSection