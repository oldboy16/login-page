import React from 'react'
import './Signin.css'
import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

let user = {
  login:'abc',
  password:123
}

function Signin() {
  const navigate = useNavigate()
  function fnSetData(e){
    e.preventDefault()
    let login = e.target.login.value
    let password = e.target.password.value
    if(user.login == login && user.password == password){
      console.log('ok');
      window.localStorage.setItem('token','zxvbnm')
      navigate('/')
    }else{
      window.localStorage.setItem('token','USER NOT FOUND')
    }
  }
  return (
    <form onSubmit={(e)=> fnSetData(e)} action="#" className='form'>
        <div className="form__inner">
        <TextField id="outlined-basic" name='login' label="login" variant="outlined" />
        </div>
        <div className="form__inner">
        <TextField id="outlined-basic" name='password' label="password" variant="outlined" />
        </div>
        <Button type='submit' variant="contained">Sign in</Button>
        <Link className='link' to={'/login/signup'}>sign up</Link>
    </form>
  )
}

export default Signin