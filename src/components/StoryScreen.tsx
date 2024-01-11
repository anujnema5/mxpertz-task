import Image from 'next/image'
import React from 'react'

const StoryScreen = () => {
  return (
    <div className='flex justify-center items-center w-full  py-12'>
        <div className='my-14 flex justify-center -gap-32 w-11/12 h-full'>
            <div className='w-[50%] flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <span className='font-medium text-gray-600'>Our Story</span>
                    <div className='h-1 bg-yellow-800 w-20'></div>
                </div>
                <h1 className='text-5xl font-semibold'>Welcome To Royal</h1>

                <p className='w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam dignissimos, consequuntur doloribus voluptatem esse et aut magni mollitia alias debitis doloremque molestiae eius repellat vel expedita amet. Id totam quos, vitae modi ea repellat ex, neque qui dolor quidem asperiores voluptate quisquam rerum, praesentium impedit dolore officia? Aperiam quibusdam delectus architecto dolorem accusamus vero excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus ratione, facilis laboriosam facere debitis sunt quas incidunt officia <br /> <br /> soluta numquam amet quod tempore, dignissimos voluptates tenetur nesciunt odio vitae. Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Placeat quasi doloribus animi sapiente delectus corporis explicabo ipsam enim deleniti incidunt.</p>
            </div>

            <div className='w-[30%] h-[38rem] bg-gray-500 flex items-center justify-center'>
                <h1>Image Todo</h1>
            </div>
        </div>
    </div>
  )
}

export default StoryScreen