import React from 'react'

const Btn = ({children}) => {
  return (
    <div className='px-4  col-span-1 py-2 bg-blue-600 font-semibold rounded-sm shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 cursor-pointer'>{children}</div>
  )
}

export default Btn