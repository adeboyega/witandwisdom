// import React from 'react'
// import quote from '../../public/format_quote_24dp_FILL0_wght400_GRAD0_opsz24.svg'
interface anotations {
    author: string;
    content:string;

}
import Reload from "../components/Reload"

export default async function quotes() {
    
    let res = await fetch ('http://api.quotable.io/random', {cache: "no-store"})
    let imgRes = await fetch ('https://api.unsplash.com/search/photos?page=1&query=office')
    const imgData = imgRes.json()
    const data: anotations =await res.json()
    // console.log(imgData)
  return (
    <>
    <div >
        <h1 className="text-3xl">QUOTES</h1>
       <div>
        <p>''</p>
        <div>
          <h1>Quote : </h1>
          <p>{data.content}</p>
        </div>
       </div>
        <p>{data.author}</p>
        <Reload />
    </div>
    </>
  )
}
