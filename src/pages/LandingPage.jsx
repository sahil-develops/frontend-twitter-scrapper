import React from 'react'
import gradient from '../assets/RadialGraidient.webp'
import FeaturedTabsComponent from '../components/FeaturedTabsComponent'
const LandingPage = () => {
  return (
    <div className='w-full bg-black'>
    <div className='flex flex-col gap-y-4 justify-center max-w-6xl w-full mx-auto items-center py-20'>
      <p className='text-white font-medium lg:text-4xl text-2xl lg:px-0 px-5 lg:max-w-3xl text-center w-full'>
      AI Solutions Tailored for Every Industry
      </p>
      <p className='text-gray-400 text-lg lg:px-0 px-5 text-center'>Our suite of AI-powered apps is crafted to enhance productivity, simplify complex tasks, and empower you with cutting-edge solutions. Whether you're a designer, marketer, developer, or entrepreneur, our tools are here to accelerate your success.
      like this give more .</p>
      <div className='flex justify-center flex-row items-center gap-x-6'>
        <button className='bg-blue-600 text-white rounded-md px-4 py-2'>Get Started</button>
        {/* <button className='rounded-md bg-transparent hover:border-b-[8px] transition-all delay-100 duration-150 ease-in-out border hover:border-gray-300 border-gray-600 px-4 py-2 text-white'>Surprise Me!</button> */}
      </div>
    </div>
    <FeaturedTabsComponent />
  </div>
  )
}

export default LandingPage