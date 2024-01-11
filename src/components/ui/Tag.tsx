import React from 'react'

const Tag = ({text, width, className}: {text: string, width: string, className?: string}) => {
    return (
        <div className={`flex flex-col justify-center items-center gap-2 ${className}`} >
            <h5 className='uppercase text-gray-400 font-bold text-sm tracking-wider'>{text}</h5>
            <div className='h-[3px] bg-[#c39d63]' style={{width: width}}></div>
        </div>
    )
}

export default Tag