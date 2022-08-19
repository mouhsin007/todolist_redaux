import React from 'react'

const Form = () => {
  return (
    <div className='my-10'>
        <input className='w-full h-10 placeholder:pl-2 rounded-md border-2 border-solid border-slate-500' type="text" placeholder='add todo...' />
        <button className='ml-0 my-4 w-20 h-14 bg-[#427BFF] rounded-md'>submit</button>
    </div>
  )
}

export default Form