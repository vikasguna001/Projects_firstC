import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

function Register() {

    const [name,setname] =useState('');
    const [username,setusername] =useState('');
    const [password,setpassword] =useState('');

    const dispatch = useDispatch()
    const submit =() => {
        dispatch({
            type:"REGISTER",
            payload : {
                id : (new Date).getTime(),
                name,username,password
            }
        })
    }
  return (
    <div>
      <from>
        <input type="text" placeholder='name' value={name} onChange={e => setname(e.target.value)}></input>
        <input type="text" placeholder='username' value={username} onChange={e => setusername(e.target.value)}></input>
        <input type="password" placeholder='password' value={password} onChange={e => setpassword(e.target.value)}></input>
        <button onClick={submit}>submit</button>
      </from>
    </div>
  )
}

export default Register;
