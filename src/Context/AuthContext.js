import { createContext } from 'react'
const AuthContext=createContext({
    isLoggedIn:false,
    token:null,
    userInfos:null,
    login:()=>{},
    login:()=>{},
})
export default AuthContext
