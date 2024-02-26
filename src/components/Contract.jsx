import React from 'react'
import "../styles/contract.css"
import aggrement from "../images/aggrement.png"
const Contract = () => {
  return (
    <div className='a-p-outer'>
        <div className='a-p-inner'>
            <img src={aggrement}/>
         
            <div className='a-p-btn'>   <button>I AGREE</button></div>
        </div>
      
    </div>
  )
}

export default Contract
