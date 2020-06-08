import React from 'react'

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple']
  const color = colors[Math.floor(Math.random() * 5)]
  const className = color + '-text'

  return(props) => {
    return(
      <div className= { className } >
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Rainbow