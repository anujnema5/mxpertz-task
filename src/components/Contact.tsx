import React from 'react'
import HoursOperation from './HoursOperation'

const Contact = () => {
  return (
    <div className='w-full h-[50rem] relative bg-food-image bg-no-repeat bg-cover bg-center '>
        <div className='overlay bg-black/80 absolute w-full h-full flex items-center justify-center'>
            

        <div className='flex justify-center items-center w-8/12 h-[80%]  px-20 py-16 gap-10'>
            <HoursOperation>
                <div className='w-full h-full flex flex-col'>
                    {/* <h3>Hours Of Operation</h3> */}

                    <div className='timing'></div>
                </div>
            </HoursOperation>
            

            <HoursOperation>
                <div></div>
            </HoursOperation>
        </div>
        </div>
    </div>
  )
}

export default Contact