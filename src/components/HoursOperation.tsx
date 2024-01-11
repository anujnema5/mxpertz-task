import React from 'react'

const HoursOperation = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full h-[38rem] bg-zinc-800'>
        {children}
    </div>
  )
}

export default HoursOperation