import { navLinks } from '@/data/navLinks'
import { TNavLink } from '@/lib/types/types'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-screen flex justify-between items-center min-h-20 px-10'>
            <h1 className='text-2xl text-gray-800 font-semibold'>Restaurant Landing Page</h1>

            <ul className='flex gap-5 items-center justify-center'>
                {
                    navLinks?.map((link: TNavLink) => {
                        if(link.icon) {
                            return (
                                <link.icon width={18}/>
                            )
                        } else {

                            return (
                            <li className='text-sm font-semibold text-gray-800'>{link.title}</li>
                        )}
                        
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar