import React from 'react'
import Signin from '../../components/Sign/Signin'
import Signup from '../../components/Sign/Signup'
import { useParams } from 'react-router-dom'


function Login() {
  const {slug} = useParams()
  return (
    <div>
        {
          slug == 'signin'? <Signin/> : <Signup/>
        }
    </div>
  )
}

export default Login