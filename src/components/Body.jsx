//import { memo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './footer';
import axios from "axios";
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';

import {useEffect} from "react";
const Body = () => {
  //Get Login user details for confirming user is logged in or not
  const dispatch = useDispatch(); //Hook
  const navigate = useNavigate(); //Redirecting 
  const userData = useSelector((store)=>store.user);
  const fetchUser = async() => {
    try{
      if(userData)
        return;
      const res = await axios.get(BASE_URL+"/profile/view",{
        withCredentials:true
      });
      //Update the store once get data
      dispatch(addUser(res.data))
    }catch(err){
      if(err.status==401){
        navigate("/login");
      }      
      console.error(err);
    }
  };
  //When the component loads for the first time → call fetChUser()
  useEffect(()=>{
    console.log("Loads firsttime");
    fetchUser();
  },[]);
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