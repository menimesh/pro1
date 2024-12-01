import React, { useEffect } from 'react'
import firebaseAppConfig from '../../util/firebase-config'
import { getAuth,onAuthStateChanged } from 'firebase/auth'
const auth=getAuth(firebaseAppConfig);
const Preguard = () => {
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log("login")
            }else{
                console.log("no login")
            }
        })
    },[])
  return (
    <div>Preguard</div>
  )
}

export default Preguard