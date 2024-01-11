'use client'
import { headerData } from '@/data/pagesData'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import Button from '../ui/Button'

const HeroSection = () => {
  const route = useRouter();

  return (
    <div className='relative w-full h-[35rem] flex items-center justify-center  top-16 bg-food-image bg-cover bg-no-repeat bg-center'>
        <div className='overlay w-full h-full bg-zinc-900/70 absolute top-0 left-0 flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-10 items-center justify-center w-5/12 text-center text-gray-300'>
                <h3 className='text-6xl font-semibold'>{headerData.heading}</h3>
                <p>{headerData.desc}</p>

                <div className='flex items-center justify-center gap-5'>
                    <button className='border-[3px] px-8 uppercase  py-2 duration-300 ease-in-out transition-all cursor-pointer hover:scale-105 tracking-wider text-sm'>View Menu</button>
                    <button className='uppercase border text-gray-100 bg-[#c39d63] px-10 py-2.5 duration-300 ease-in-out transition-all cursor-pointer hover:scale-105 tracking-wider text-sm'>Reservation</button>
                    
                </div>
            </div>

            <Link href={'#foodshowcase'} scroll>
            <ArrowDownIcon className='text-center cursor-pointer font-semibold w-6 h-6 mt-20 absolute -translate-x-1/2 -translate-y-1/2 top-[72%] text-gray-300'/>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection