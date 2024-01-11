// Consuming HOC

import { eventBox } from '@/data/newsEvents';
import { reviews } from '@/data/ratingData'
import { TEventBox } from '@/lib/types/types';
import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react'
import MarginWrapper from '../Wrapper/MarginWrapper';
import { news } from '@/data/pagesData';
import Image from 'next/image';

const NewsSection = () => {
    return (
        <MarginWrapper className='relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300' tagText={'Dont miss'} sectionDescription={news.desc} sectionHeading={news.heading} buttonText='Reservation'>
            <div className=' text-center flex gap-10 items-start justify-center w-10/12 mt-7'>
                {
                    eventBox?.map((event: TEventBox) => (
                        <div className='bg-white flex flex-col items-start gap-0 justify-center duration-300 ease-in-out transition-all cursor-pointer hover:scale-105 w-full text-left'>
                            <div className="image h-48 border flex flex-col items-center justify-center  w-full">
                                <Image src={event.img} alt='thumbnail' width={1000} height={1000} className='w-full h-full'/>
                                </div>

                            <div className='px-3 py-4 flex flex-col gap-2'>
                                <span className='text-xl font-semibold text-gray-600'>{event.title}</span>
                                <span className='text-sm font-medium text-[#c39d63]'>{event.category}</span>
                                <span className='text-sm text-gray-500 leading-6'>{event.description}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </MarginWrapper>
    )
}

export default NewsSection