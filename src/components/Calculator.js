import React from 'react'

import {Buttons} from "./Battons/NumberButton/Buttons";

import {store} from "../store/store";

import './calculator.css'


export const Calculator = () =>
  <div className='calculator'>
    <Display/>
    <div className='buttons'>
      {
        store.buttons.map(b => <Buttons erase={b.erase} number={b.number} action={b.action}/>)
      }
    </div>


  </div>;


const Display = () => {

  return (

    <div className='display'>
      dada
    </div>
  )
}