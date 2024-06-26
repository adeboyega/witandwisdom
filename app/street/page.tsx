// import React from 'react'

const yahooquotes = [
  {
    author: 'menino',
    content:"LEG and GLE na same spelling na your hustle go determine the arrangements"
  },
  {
    author: 'strategistFX',
    content:"Your new lifestyle na another person throwback omo iya mi stay humble    "
  },
  {
    author: 'kayzwizzy',
    content:"Tables no dey turn again na who get sense dey change seat"
  },
  {
    author: 'strategistFX',
    content:" Who no show you road no suppose know your location"
  },
  {
    author: 'strategistFX',
    content:"Na we dey press, but na oluwa dey run am"
  },
  {
    author: 'strategistFX',
    content:"Person wey dey find party rice no suppose dey fear dance"
  },
  {
    author: 'strategistFX',
    content:"Na only mumu dey ask fish if him don baff"
  },
  {
    author: 'innie03',
    content:"Trust the process, even traffic light go green before e red"
  },
  {
    author: "Nigerian Proverb",
    "content": "Rat wey dey chop onion, e must to tear eye."
},
{
    author: "Unknown",
    "content": "Person wey no fit dance dey say di ground dey shake."
},
{
    author: "Unknown",
    "content": "No be wetin dey sweet na im dey kill bee."
},
{
    author: "Unknown",
    "content": "E get as water go take find im level."
},
{
    author: "Unknown",
    "content": "No matter how hot your temper be, e no fit boil beans."
}
]
import styles from './style.module.css'
import Reload from "../components/Reload"
import Return from "../components/Return"
export default function quotes() {
let random = Math.floor(Math.random()*yahooquotes.length)
return (
  <>
  
  <div className={styles.container}>
    
      <h1 className='text-3xl'>QUOTES 😒</h1>
      <div className='flex gap-5 flex-col my-5'>
      <p className='text-xl'>{yahooquotes[random].content}</p>
      <i><p>{yahooquotes[random].author === 'Unknown'? yahooquotes[random].author = 'EpaSimple...': `${yahooquotes[random].author} .....`}</p></i>
      
      </div>

      
      <div className="flex gap-4"><Reload /> <Return /></div>
      
  </div>
  </>
)
}
