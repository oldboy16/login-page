import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate()
  const location = useLocation().pathname
  console.log(location);
  useEffect(()=>{
    let token = window.localStorage.getItem('token')
    if(token != 'zxvbnm'){
      navigate('/login/signin')
    }
  },[location])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login/:slug' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
