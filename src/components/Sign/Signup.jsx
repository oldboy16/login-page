// import React, { useState } from 'react'
import './Signin.css'
import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

let users = {
  cpassword:'abc',
  password:123
}

function Signup() {
  const navigate = useNavigate()
  function fnSetData(e){
    e.preventDefault()
    let login = e.target.password.value
    let password = e.target.cpassword.value
    if(users.login == login && users.password == password){
      navigate('/')
    }
  }
  return (
    <form onSubmit={(e)=> fnSetData(e)} action="#" className='form'> 
        <div className="form__inner">
       <TextField id="outlined-basic" label="Username" variant="outlined" />
        </div>
        <div className="form__inner">
        <TextField id="outlined-basic" label="login" variant="outlined" />
        </div>
        <div className="form__inner">
        <TextField id="outlined-basic" name='password' label="password" variant="outlined"/>
        </div>
        <div className="form__inner">
        <TextField id="outlined-basic" name='cpassword' label="confirm password" variant="outlined" />
        </div>
        <Button type='submit' variant="contained">Sign up</Button>
        <Link className='link' to={'/login/signin'}>sign in</Link>
    </form>
  )
}

export default Signup