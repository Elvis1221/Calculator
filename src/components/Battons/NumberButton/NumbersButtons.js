import React from 'react'

import './numbersButtons.css'


export const NumbersButtons = ({numbers, actions}) =>
    <div className='numbers-buttons'>
      <div>
        {
          numbers.map(n =><button>{n.number}</button> )
        }
      </div>
      <div>
        {
          actions.map(a => <button>{a.action}</button>)
        }
      </div>
    </div>;
