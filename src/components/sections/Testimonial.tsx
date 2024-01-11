import { reviews } from '@/data/ratingData'
import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react'
import MarginWrapper from '../utils/MarginWrapper';
import Tag from '../ui/Tag';
import { testimonial } from '@/data/pagesData';
import { Review } from '@/lib/types/types';

const Testimonial = () => {
    return (
        <MarginWrapper 
        tagText={testimonial?.tag}
        sectionHeading={testimonial?.heading}
        >

            <div className='text-center flex gap-6 items-center justify-center w-10/12'>
                {
                    reviews?.map((review: Review) => {
                        const stars = new Array(review.rating).fill(0);
                        return (
                            <div key={review.title} className='w-full h-ful flex flex-col items-start justify-center gap-5 text-left'>
                                <div className='flex w-32 h-32'>
                                    {stars?.map((_, i) => (<StarIcon key={i} className='text-[#c39d63]' />))}</div>

                                <span className='text-3xl text-gray-800 font-medium -mt-8'>{review.title}</span>
                                <span className='text-gray-700 w-10/12'>{review.description}</span>

                                <span className='text-gray-700'>{review.tag}</span>
                            </div>
                        )

                    })
                }
            </div>
        </MarginWrapper>
    )
}

export default Testimonial