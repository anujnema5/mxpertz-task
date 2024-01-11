import React from 'react'

const Button = ({text, className}: {text: string, className?: string}) => {
  return (
    <button className={`${className} uppercase text-gray-100 bg-[#c39d63] px-10 py-2 mt-10 duration-300 ease-in-out transition-all cursor-pointer hover:scale-105 tracking-wider text-sm`}>{text}</button>
  )
}

export default Button