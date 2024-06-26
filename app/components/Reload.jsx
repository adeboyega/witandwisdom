'use client'
import React from 'react'

export default function Reload() {
  return (
    <div>
        <button onClick={()=> location.reload()} className='px-6 py-2 rounded-md bg-sky-600 hover:bg-sky-800 text-white'>Reload</button>
    </div>
  )
}
