// import React from 'react'
// import quote from '../../public/format_quote_24dp_FILL0_wght400_GRAD0_opsz24.svg'
interface anotations {
    author: string;
    content:string;

}
import Reload from "../components/Reload"
import Return from "../components/Return"
import style from './style.module.css'
export default async function quotes() {
    
    let res = await fetch ('http://api.quotable.io/random', {cache: "no-store"})
    let imgRes = await fetch ('https://api.unsplash.com/search/photos?page=1&query=office')
    const imgData = imgRes.json()
    const data: anotations =await res.json()
    // console.log(imgData)
  return (
    <>
    <div className={style.container} >
        <h1 className="text-3xl my-6">QUOTES😎</h1>
          <p className=" my-4">{data.content}</p>
        <i className=" my-4"><p>{data.author}</p></i>
        <div className="flex gap-4"><Reload /> <Return /></div>
    </div>
    </>
  )
}
