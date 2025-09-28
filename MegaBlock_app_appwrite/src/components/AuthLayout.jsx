

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function AuthLayout({
  children, authentication = true
}) {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(null)
  const authStatus = useSelector(state => state.auth.status)
  useEffect(() => {
    //Todo: make it more easy

    //if(authStatus===true){
    // navigate("/")
    // }else{
      // navigate("/login");
      // }

     if(authentication && authStatus !==authentication){
      navigate("/login");
     }
     else if(!authentication && authStatus !== authentication){
      navigate("/")
     }
     setLoader(false)
  }, [authStatus, navigate, authentication]);

  return (
   loader?(<h1>Loading...</h1>):(<>{children}</>)
  )
}

export default AuthLayout
