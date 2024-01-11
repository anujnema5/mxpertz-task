import React from 'react'

const Gap = (Component: React.FunctionComponent) => {
  const NewComponent = (props: any)=> {
    return (
        <div>
            
        <Component {...props}/>
        </div>
    )
  }

  return NewComponent
}

export default Gap