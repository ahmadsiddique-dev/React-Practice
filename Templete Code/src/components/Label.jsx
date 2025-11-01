import React from 'react'

const Label = ({id, name}) => {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
    </div>
  )
}

export default Label
