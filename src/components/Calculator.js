import React from 'react'

import './calculator.css'
import {NumbersButtons} from "./Battons/NumberButton/NumbersButtons";


export const Calculator = ({store}) =>
  <div className='calculator'>
     <NumbersButtons numbers={store.numbers} actions={store.actions}/>)
    <Display />
  </div>;
