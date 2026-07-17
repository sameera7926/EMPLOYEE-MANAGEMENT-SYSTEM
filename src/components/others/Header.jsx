
import React from 'react'
const Header = () => {
  return (
    <div className=' flex items-end justify-between'>
      <h1 className='text-2xl font-semibold text-white'>hello<span className='text-3xl font-semibold'> sameera 👋</span></h1>
      <button className=' bg-blue-500 text-lg font-medium text-white px-5 py-2 rounded-small hover:bg-red-600'>login</button>
    </div>
  )
}

export default Header