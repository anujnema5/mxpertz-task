import { foodShowCase } from '@/data/foodShowcase'
import React from 'react'

const FoodShowCase = () => {
    return (
        <div className='w-screen flex flex-col justify-center items-center bg-slate-800'>
            <div className='grid grid-cols-3 w-10/12'>
                {
                    foodShowCase?.map((elem: any) => {
                        if (elem.img) {
                            return (
                                <div className='w-full h-72 bg-gray-600 flex flex-col gap-3 items-center text-center justify-center'>{elem.img}</div>
                            )
                        } else {
                            return (
                                <div className='w-full h-72 bg-gray-300 flex flex-col gap-3 items-center text-center justify-center'>
                                    <span className='text-xl font-semibold text-yellow-700'>{elem.price}</span>
                                    <span className='text-lg font-semibold'>{elem.title}</span>
                                    <span className='text-gray-700 font-medium w-10/12'>{elem.description}</span>
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