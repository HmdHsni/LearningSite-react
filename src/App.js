import React, { useCallback, useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import AuthContext from './Context/AuthContext'
import Login from './pages/Login/Login'
import './App.css'
export default function App() {
const [isLoggedIn,setisLoggedIn]=useState(false)
const [token,setToken]=useState(false)
const [userInfos,setUserInfos]=useState(false)
const login=useCallback(
  (userInfos,token)=>{
    setToken(token)
    setisLoggedIn(true)
    setUserInfos(userInfos)
    localStorage.setItem('user',JSON.stringify({token}))
  }
,[])
const logout=useCallback(()=>{
  setToken(null)
  setUserInfos({})
  localStorage.removeItem('user')
})

  const router = useRoutes(routes)
  useEffect(()=>{
    const localStorageData=JSON.parse(localStorage.getItem('user'))
    if(localStorageData){
      fetch(`http://localhost:4000/v1/auth/me`,{
        headers:{
          'Authorization' :`Bearer ${localStorageData.token}`
        }
      }).then((res)=>res.json())
      .then(userData=>{
        setisLoggedIn(true)
        setUserInfos(userData)}
                    )
    }
  }
    
    ,[login])

  return (
    <AuthContext.Provider 
    value={{
      isLoggedIn,
      token,
      userInfos,
      login,
      logout
    }}>
      { router }
      
    </AuthContext.Provider>
  )
}
