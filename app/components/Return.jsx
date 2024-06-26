'use client'

export default function Return() {
  return (
    <div><button onClick={()=>window.history.back()} className='px-6 py-2 rounded-md bg-sky-600 hover:bg-sky-800 text-white'>Return</button></div>
  )
}
