import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './Body'
import Login from './login'
import Profile from './profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
    {/*<Navbar/>
     <h1 className='text-3xl font-bold underline'>Welcome to Hello world </h1>*/}
    </>
  )
}

export default App
