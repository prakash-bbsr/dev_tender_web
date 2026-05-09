//import { memo } from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './footer';
const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
        <main className="flex-grow">
            <Outlet />
        </main>
      <Footer></Footer>
    </div>
  );
};

//export default memo(Body);
export default Body;