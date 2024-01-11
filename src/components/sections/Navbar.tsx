import { navLinks } from '@/data/navLinks'
import { siteMetadata } from '@/data/siteMetaData'
import { TNavLink } from '@/lib/types/types'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-screen flex justify-between fixed top-0 left-0 bg-white z-50 items-center min-h-20 px-10'>
            <h1 className='text-2xl text-gray-800 font-semibold'>
                <Link href={'/'}>{siteMetadata.headerTitle}</Link>
                
                </h1>

            <ul className='flex gap-5 items-center justify-center'>
                {
                    navLinks?.map((link: TNavLink) => {
                        if(link.icon) {
                            return (
                                <link.icon key={link.id} width={18} className='cursor-pointer'/>
                            )
                        } else {

                            return (
                            <li key={link.title} className='text-sm font-semibold text-gray-800 duration-300 ease-in-out transition-all cursor-pointer hover:scale-105'>{link.title}</li>
                        )}
                        
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar