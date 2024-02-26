import React from 'react'
import loadingpage from "../images/lodingpage.png"
import "../styles/loadingpage.css"
const LoadingPage = () => {
  return (
    <div className='l-p-outer'>
        <div className='l-p-inner'>
            <img src={loadingpage}/>
            <div className='l-p-text'><b>Hang on </b> for a moment...</div>

        </div>
      
    </div>
  )
}

export default LoadingPage
