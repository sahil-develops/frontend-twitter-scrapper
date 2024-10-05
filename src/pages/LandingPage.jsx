import React from 'react'
import gradient from '../assets/RadialGraidient.webp'
import FeaturedTabsComponent from '../components/FeaturedTabsComponent'
import PostGen from '../components/PostGen/PostGen'
const LandingPage = () => {
  return (
    <div className='w-full bg-gray-900'>
    <div className='flex flex-col gap-y-4 justify-center max-w-6xl w-full mx-auto items-center py-20'>
      <p className='text-white font-medium lg:text-4xl text-2xl lg:px-0 px-5 lg:max-w-3xl text-center w-full'>
        9,789 curated design resources to speed up your creative workflow.
      </p>
      <p className='text-gray-400 text-lg lg:px-0 px-5 text-center'>Join a growing family of 832,018 designers and makers from around the world.</p>
      <div className='flex justify-center flex-row items-center gap-x-6'>
        <button className='bg-blue-600 text-white rounded-md px-4 py-2'>Get Started</button>
        {/* <button className='rounded-md bg-transparent hover:border-b-[8px] transition-all delay-100 duration-150 ease-in-out border hover:border-gray-300 border-gray-600 px-4 py-2 text-white'>Surprise Me!</button> */}
      </div>
    </div>
    <FeaturedTabsComponent />
    {/* <PostGen/> */}
  </div>
  )
}

export default LandingPage