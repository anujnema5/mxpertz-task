// import React from 'react'

// const MealsText = () => {
//     return (
//         <div className='w-full h-full flex items-center justify-center bg-gray-200'>
//             <div className='my-28 flex flex-col items-center justify-center'>
//                 <div className='flex flex-col gap-3 justify-center items-center'>
//                     <h5 className='uppercase text-gray-500 font-bold text-sm'>Only the best</h5>
//                     <div className='h-1 bg-[#c39d63] w-20'></div>
//                 </div>

//                 <div className='text-center  flex flex-col items-center justify-center w-10/12'>
//                     <h3 className='text-5xl font-semibold my-12 text-gray-800'>Fresh Ingridient, Tasty Meals</h3>
//                     <p className='w-8/12 text-gray-600 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure tempora corporis voluptatem reprehenderit nesciunt quaerat est assumenda delectus? Quibusdam amet impedit ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                     <button className='uppercase text-gray-100 bg-[#c39d63] px-10 py-2 mt-10'>View Items</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MealsText


import React from 'react'
import MarginWrapper from './utils/MarginWrapper'

const MealsText = () => {
    return (
        <MarginWrapper className='bg-gray-300'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <h5 className='uppercase text-gray-500 font-bold text-sm'>Only the best</h5>
                    <div className='h-1 bg-[#c39d63] w-20'></div>
                </div>

                <div className='text-center  flex flex-col items-center justify-center w-10/12'>
                    <h3 className='text-5xl font-semibold my-12 text-gray-800'>Fresh Ingridient, Tasty Meals</h3>
                    <p className='w-8/12 text-gray-600 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure tempora corporis voluptatem reprehenderit nesciunt quaerat est assumenda delectus? Quibusdam amet impedit ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='uppercase text-gray-100 bg-[#c39d63] px-10 py-2 mt-10'>View Items</button>
                </div>
        </MarginWrapper>
            
    )
}

export default MealsText