import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import About from './pages/About/About';
import AboutInfo from './components/Sign/AboutInfo';
import AboutMain from './components/AboutMain';
// import {} from "@mui/material"

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
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login/:slug' element={<Login/>}/>
        <Route path='/About' element={<About/>}>
          <Route path='aboutmain' element={<AboutMain/>}/>
          <Route path='aboutinfo' element={<AboutInfo/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
