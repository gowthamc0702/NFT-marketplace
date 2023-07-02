import React from 'react'
//imports
import Style from "./Button.module.css";



const Button = ({btnName , handleClick}) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={()=> handleClick()}>
        {btnName}
      </button>
    </div>
  )
}

export default Button