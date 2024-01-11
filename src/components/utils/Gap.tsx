import React from 'react'

const Gap = (Component: React.FunctionComponent) => {
  const NewComponent = (props: any)=> {
    return (
        <Component {...props}/>
    )
  }

  return NewComponent
}

export default Gap