import React from 'react'

interface anotations {
    author: string;
    content:string;

}

export default async function quotes() {
    
    let res = await fetch ('http://api.quotable.io/random')
    const data: anotations[] =await res.json()
  return (
    <>
    <div>
        <p>quotes</p>
        {/* <h1>authort</h1>: <p>{data[0].author}</p> */}
    </div>
    </>
  )
}
