// // Consuming HOC

// import { reviews } from '@/data/ratingData'
// import { StarIcon } from '@heroicons/react/24/solid';
// import React from 'react'

// const Testimonial = () => {
//     return (
//         <div className='w-full h-full flex items-center justify-center'>
//             <div className='my-28 flex flex-col gap-6 w-full items-center justify-center'>
//                 <div className='flex flex-col gap-3 justify-center items-center'>
//                     <h5 className='uppercase text-gray-500 font-bold text-sm'>Only the best</h5>
//                     <div className='h-1 bg-[#c39d63] w-20'></div>
//                 </div>

//                 <h3 className='text-5xl font-semibold text-gray-700 my-3'>What people are Saying</h3>

//                 <div className='text-center flex gap-6 items-center justify-center w-10/12'>
//                     {
//                         reviews?.map((review: any) => {
//                             const stars = new Array(review.rating).fill(0);
//                             return (
//                                 <div className='w-full h-ful flex flex-col items-start justify-center gap-5 text-left'>
//                                     <div className='flex w-32 h-32'>
//                                         {stars?.map((star) => (<StarIcon className='text-[#c39d63]' />))}</div>

//                                         <span className='text-3xl text-gray-800 font-medium -mt-8'>{review.title}</span>
//                                         <span className='text-gray-700'>{review.description}</span>

//                                         <span className='text-gray-700'>{review.tag}</span>
//                                 </div>
//                             )

//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Testimonial

import { reviews } from '@/data/ratingData'
import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react'
import MarginWrapper from '../Wrapper/MarginWrapper';
import Tag from '../ui/Tag';
import { testimonial } from '@/data/pagesData';

const Testimonial = () => {
    return (
        <MarginWrapper 
        tagText={testimonial?.tag}
        sectionHeading={testimonial?.heading}
        >

            <div className='text-center flex gap-6 items-center justify-center w-10/12'>
                {
                    reviews?.map((review: any) => {
                        const stars = new Array(review.rating).fill(0);
                        return (
                            <div className='w-full h-ful flex flex-col items-start justify-center gap-5 text-left'>
                                <div className='flex w-32 h-32'>
                                    {stars?.map(() => (<StarIcon className='text-[#c39d63]' />))}</div>

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