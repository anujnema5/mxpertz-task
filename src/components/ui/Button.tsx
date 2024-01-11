import React from 'react'

const Button = ({text}: {text: string}) => {
  return (
    <button className='uppercase text-gray-100 bg-[#c39d63] px-10 py-2 mt-10 duration-300 ease-in-out transition-all cursor-pointer hover:scale-105'>{text}</button>
  )
}

export default Button