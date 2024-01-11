import React from 'react'

const Description = ({desc, className}: {desc: string, className?: string}) => {
  return (
    <p className={`${className} w-8/12 text-gray-600 font-normal`}>{desc}</p>
  )
}

export default Description