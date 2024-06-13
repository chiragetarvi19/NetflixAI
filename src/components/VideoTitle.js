import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute pt-[14%] px-24 text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-md w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white hover:bg-opacity-80 text-black px-12 py-2 text-xl font-bold rounded-sm'>▶ Play</button>
            <button className='bg-gray-200 text-white px-12 py-2 text-lg font-bold rounded-sm ml-2 bg-opacity-40 hover:bg-opacity-70'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle