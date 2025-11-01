import React from 'react'

const Input = ({type, id, placeholder}) => {
  return (
    <div>
        <input className='border-2 py-0.5 rounded-sm px-2 min-w-[285px]' placeholder={placeholder} type={type} id={id} />
    </div>
  )
}

export default Input