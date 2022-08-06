import React from 'react'
import '../index.css'

function PopupThingy(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup_inner'>
            <button className="close_button">close</button>
            {props.children}
        </div>   
        <input type="text" placeholder="Name" />
    </div>
  ) :  "";
}

export default PopupThingy