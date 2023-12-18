import React from 'react'

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className='p-3 border rounded-lg'>
        <h2 className='text-gray-400 mb-3'>Course Preview</h2>
        <video width='1000' height='300' controls controlsList='nodownload'>
            <source src={videoUrl} type='video/mp4' />
        </video>
    </div>
  )
}

export default VideoPlayer