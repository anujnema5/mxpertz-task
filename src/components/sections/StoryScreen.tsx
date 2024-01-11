import { storyData } from '@/data/pagesData'
import Image from 'next/image'
import React from 'react'

const StoryScreen = () => {
  return (
    <div className='flex justify-center items-center w-full py-12'>
        <div className='my-28 flex justify-center -gap-32 w-11/12 h-full'>
            <div className='w-[50%] flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold uppercase text-gray-400'>{storyData.tag}</span>
                    <div className='h-0.5 bg-[#c39d63] w-12'></div>
                </div>
                <h1 className='text-5xl font-semibold'>{storyData.heading}</h1>

                <p className='w-8/12 text-gray-500 text-[15px] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam dignissimos, consequuntur doloribus voluptatem esse et aut magni mollitia alias debitis doloremque molestiae eius repellat vel expedita amet. Id totam quos, vitae modi ea repellat ex, neque qui dolor quidem asperiores voluptate quisquam rerum, praesentium impedit dolore officia? Aperiam quibusdam delectus architecto dolorem accusamus vero excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus ratione, facilis laboriosam facere debitis sunt quas incidunt officia <br /> <br /> soluta numquam amet quod tempore, dignissimos voluptates tenetur nesciunt odio vitae. Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Placeat quasi doloribus animi sapiente delectus corporis explicabo ipsam enim deleniti incidunt.</p>
            </div>

            <div className='w-[30%] h-[38rem]'>
                <Image alt='fruits-image' className='w-full h-full' src={'https://bytesfood.in/wp-content/uploads/2023/08/Farm-to-table-28.png'} width={1000} height={1000}/>
            </div>
        </div>
    </div>
  )
}

export default StoryScreen