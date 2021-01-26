import React from 'react'

import './buttons.css'


export const Buttons = ({action, number, erase}) =>
    <button>
    <span onClick={() => console.log('@')}>
          {number}
    </span>
      <span onClick={() => console.log('@@')}>
          {action}
    </span>
      <span onClick={() => console.log('@@@')}>
        {erase}
    </span>
    </button>;
