import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import {userLogin, userLogout, updateUser, fetchDog} from '../redux/action';

const Home = () => {
const dispatch = useDispatch();
const userLoginState = useSelector((redusState)=> redusState.userLogin)

const allCountries = useSelector((redusState)=>{return redusState.dogData})
console.log("from home",allCountries)
const login = () =>{
  dispatch(userLogin())
}

const logout = () =>{
  dispatch(userLogout())
}

const update = () =>{
  dispatch(updateUser('all', 'good'))
}

// dog
useEffect(()=>{
  dispatch(fetchDog())
}, [dispatch])


  return (
    <div>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
      <button onClick={update}>update</button>

      <p>User Login: {userLoginState ? 'user login': 'user logged out'}</p>
    </div>
  )
}

export default Home