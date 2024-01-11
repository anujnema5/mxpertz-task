import { socialICons } from '@/data/socialMediaIcons'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full h-10 bg-zinc-900 px-10 flex items-center justify-between text-gray-600'>
            <div>
                <span>Designed by <b>Elegent Themes</b> | Powered by <b>Wordpress</b> </span>
            </div>

            <div className='flex gap-3'>
                {
                    socialICons?.map((Icon: any, i) => (
                        <Icon key={i}/>
                    ))
                }
            </div>
        </footer>
    )
}

export default Footer