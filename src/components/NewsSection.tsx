// Consuming HOC

import { eventBox } from '@/data/newsEvents';
import { reviews } from '@/data/ratingData'
import { TEventBox } from '@/lib/types/types';
import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react'
import MarginWrapper from './utils/MarginWrapper';

const NewsSection = () => {
    return (
        <MarginWrapper className='relative bg-gray-300 gap-8'>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <h5 className='uppercase text-gray-500 font-bold text-sm'>Don't Miss</h5>
                <div className='h-1 bg-[#c39d63] w-20'></div>
            </div>


            <h3 className='text-5xl font-semibold text-gray-700 my-3'>Our News Events</h3>

            <p className='w-7/12 text-center text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolores soluta id quia accusantium vel voluptate quisquam, rerum porro molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, mollitia.</p>

            <div className='text-center flex gap-6 items-center justify-center w-8/12'>
                {
                    eventBox?.map((event: TEventBox) => (
                        <div className='bg-white rounded-xl flex flex-col items-start gap-7 justify-center w-full text-left'>
                            <div className="image h-48 border flex flex-col items-center justify-center  w-full">{event.img}</div>

                            <div className='px-3 py-3 flex flex-col gap-2'>
                                <span className='text-xl font-semibold text-gray-600'>{event.title}</span>
                                <span className='text-sm font-medium text-[#c39d63]'>{event.category}</span>
                                <span className='text-sm'>{event.description}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button className='bg-[#c39d63]  text-gray-100 mt-8 px-8 uppercase  py-1.5'>Reservation</button>
        </MarginWrapper>
    )
}

export default NewsSection