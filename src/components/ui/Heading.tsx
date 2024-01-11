import React from 'react'

const Heading =  ({heading, className}: {heading: string, className?: string}) => {
  return (
        <h3 className={ `${className} text-5xl font-semibold text-gray-700 my-3`}>{heading}</h3>
  )
}

export default Heading