import React from 'react'
import './style.css'
import Card from './card'
import Data from './api'
const Live = () => {
  return (
    <>
     <h1> UPDATES</h1>
     <h2>COVID-19</h2>
     <section className='whole'><Card Data={Data}/></section>
     
    </>
   
  )
}

export default Live