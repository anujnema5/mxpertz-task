import React from 'react'
import HoursOperation from '../Wrapper/HoursOperation'
import { daysAndTimings } from '@/data/Operations'
import { TDayTiming } from '@/lib/types/types'
import Button from '../ui/Button'

const Contact = () => {
    return (
        <div className='w-full h-[50rem] relative bg-food-image bg-no-repeat bg-cover bg-center '>
            <div className='overlay bg-black/80 absolute w-full h-full flex items-center justify-center'>


                <div className='flex justify-center items-center w-8/12 h-[80%]  px-20 py-16 gap-10'>
                    <HoursOperation>
                        <div className='w-full h-full flex flex-col py-20 items-center'>
                            <h3 className='text-2xl font-semibold text-gray-200'>Hours Of Operation</h3>

                            <div className="timings mt-8  w-9/12">
                                {daysAndTimings?.map((daysTiming: TDayTiming, i) => (
                                    <div className='flex text-xs flex-col gap-3 text-center font-semibold text-white'>
                                        <span className=''>{daysTiming.days}</span>
                                        <span>{daysTiming.timings}</span>
                                        {daysTiming?.eveningTimings && <span>{daysTiming.eveningTimings}</span>}

                                        {daysAndTimings.length - 1 !== i && <div className='w-full h-0.5 bg-[#c39d63] mb-3'></div>}
                                    </div>
                                ))}
                            </div>

                            <Button className='px-8 py-0' text='Make a Reservation' />
                        </div>
                    </HoursOperation>


                    <HoursOperation>
                        <div className='w-full h-full flex flex-col py-20 items-center'>
                            <h3 className='text-2xl font-semibold text-gray-200'>Drop Us a Line</h3>
                            <p className='w-8/12 text-center text-sm text-gray-100 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, asperiores.</p>

                            {/* <button className='bg-[#c39d63] px-5 py-0.5 mt-6 text-gray-200 uppercase'>Contact us</button> */}
                            <Button className='px-8 py-0' text='Contact us' />



                            <div className='w-full flex flex-col justify-center gap-1 items-center mt-16 '>
                                <h4 className='text-lg text-gray-100 font-medium'>Our Newsletter</h4>
                                <span className='w-10/12 text-center text-sm text-gray-300'>Lorem ipsum dolor. dolor sit amet consectetur</span>

                                <form action="" className='flex flex-col gap-4 items-center justify-center w-full mt-6'>
                                    <input type="text" className='text-gray-400 w-10/12 outline-none bg-zinc-900 px-3 py-1 placeholder:text-gray-500' placeholder='First Name' />
                                    <input type="text" className='text-gray-400  w-10/12 outline-none bg-zinc-900 px-3 py-1 placeholder:text-gray-500' placeholder='Last Name ' />
                                    <input type="email" className='text-gray-400 outline-none w-10/12 bg-zinc-900 px-3 py-1 placeholder:text-gray-500' placeholder='Email' />
                                    <button className='bg-[#c39d63] px-5 w-10/12 py-1 outline-none uppercase text-gray-200'>Contact us</button>
                                    {/* <Button className='px-8 py-0 w-10/12' text='Contact us' /> */}

                                </form>
                            </div>
                        </div>
                    </HoursOperation>
                </div>
            </div>
        </div>
    )
}

export default Contact