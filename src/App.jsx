import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/login'
import Profile from './components/Profile'
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import Feed from './components/Feed';
import Connections from './components/Connections';
import Requests from './components/Requests';
import Premium from './components/Premium';
import Chat from './components/Chat';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={appStore}>
        <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/premium" element={<Premium />} />
            <Route path='/chat/:targetUserId' element={<Chat/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    
    {/*<Navbar/>
     <h1 className='text-3xl font-bold underline'>Welcome to Hello world </h1>*/}
    </>
  )
}

export default App
