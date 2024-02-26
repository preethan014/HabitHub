import React from 'react'
import appdetails from "../images/appdetails.png"
const AppDetails = () => {
  return (
    <div className='app-img' style={{display:"flex",justifyContent:"center",margin:"40px 0px"}}>
        <img style={{width:"90%",height:"800px"}} src={appdetails}/>
    </div>
  )
}

export default AppDetails
