import { ArrowDownIcon } from '@heroicons/react/24/solid'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative w-full h-[30rem] flex items-center justify-center border-2 bg-food-image bg-cover bg-no-repeat bg-center'>
        <div className='overlay w-full h-full bg-black/70 absolute top-0 left-0 flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-10 items-center justify-center w-5/12 text-center text-gray-300'>
                <h3 className='text-6xl font-semibold'>Only Quality Food</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ut facilis? Quod at impedit optio quaerat eveniet quibusdam dolore quos vel accusantium provident.</p>

                <div className='flex gap-5'>
                    <button className='border-2 px-8 uppercase  py-1.5'>View Menu</button>
                    <button className='bg-yellow-700  px-8 uppercase  py-1.5'>Reservation</button>
                </div>
            </div>

            <ArrowDownIcon className='text-center w-8 h-8 mt-20 absolute -translate-x-1/2 -translate-y-1/2 top-[72%] text-gray-300'/>
        </div>
    </div>
  )
}

export default HeroSection