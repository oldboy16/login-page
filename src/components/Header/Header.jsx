import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Logout } from '@mui/icons-material'

const routes = ['','About','Contact','login/signin']
function Header() {
  const location = useLocation().pathname
  const navigate = useNavigate()
  function userOut(){
    window.localStorage.removeItem('token')
    navigate('/Login/signin')
  }
  return (
    <div>
     <header>
      <div className="container">
        <nav>
          <Link to={'/'}>
          <h2>Logo</h2>
          </Link>
          <ul className="nav__list">
            {
              routes?.map((item,index)=>(
              <li key={index} className={location.split('/')[1] == `${item}`?'nav__item active':'nav__item'}>
              <Link to={`/${item}`}>{item == ''?'Home': item}</Link>
            </li>
              ))
            }
            <li className='nav__item' onClick={userOut}>
            <Logout/>
            </li>
          </ul>
        </nav>
      </div>
     </header>
    </div>
  )
}

export default Header