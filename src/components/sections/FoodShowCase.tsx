import { foodShowCase } from '@/data/foodShowcase'
import { FoodShowCaseItem } from '@/lib/types/types'
import Image from 'next/image'
import React from 'react'

const FoodShowCase = () => {
    return (
        <div id='foodshowcase' className='w-screen flex flex-col justify-center items-center bg-zinc-800'>
            <div className='grid grid-cols-3 w-10/12'>
                {
                    foodShowCase?.map((elem: any, i) => {
                        if (elem.img) {
                            return (
                                <div key={elem.title} className='w-full h-full flex flex-col gap-3 items-center text-center justify-center text-white'>

                                    <Image alt='food-images' width={1000} height={1000} className='w-full max-h-96 object-cover' src={elem.img}/>
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} className='w-full h-full bg-gray-200 flex flex-col gap-5 items-center text-center justify-center'>
                                    <span className='text-2xl font-semibold text-[#c39d63]'>{elem.price}</span>
                                    <span className='text-2xl text-gray-600 font-semibold'>{elem.title}</span>
                                    <span className='text-gray-700 text-[1.1rem] font-medium w-10/12'>{elem.description}</span>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default FoodShowCase