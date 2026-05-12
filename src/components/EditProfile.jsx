//import { memo } from 'react';
import { useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import {BASE_URL} from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const EditProfile = ({user}) => {
    const [firstName,setFirstName] = useState(user.firstName);
    const [lastName,setsetLastName] = useState(user.lastName);
    const [age,setAge] = useState(user.age);
    const [photoUrl,setPhotoUrl] = useState(user.photoUrl);
    //Error handler
    let [error,setError] = useState("");
    const dispatch = useDispatch();
    const [toastMsg, setToastMsg] = useState(null);
    const saveProfile = async()=>{           
      setError(null); 
      try {
        const res = await axios.patch(BASE_URL+"/profile/edit", {
          firstName,
          lastName,
          age,
          photoUrl,
        },{ withCredentials:true });
        console.log(res.data);
        //Add new profile data to redux store
        dispatch(addUser(res?.data?.data));   
        setToastMsg("Profile data saved successfully.");
        /*const i = setTimeout(()=>{
            if(toastMsg){
                 setToastMsg(null);
            }           
        },3000);*/
      } catch (err) {   
        console.log(err);            
        setError(err?.response?.data?.message || "Invalid credentials");        
      }
  }
  useEffect(() => {
    if (!toastMsg) return;
    const timer = setTimeout(() => {
        setToastMsg(null);
    }, 3000);

    return () => clearTimeout(timer); // ✅ cleanup
}, [toastMsg]);
  return (
   
    <div className="flex justify-center items-center gap-10 min-h-screen">
        <div>
            <div className="min-h-screen flex items-center justify-center -mt-20">
            <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
            <h2  className="card-title">Edit Profile </h2>        
            <label className="input input-bordered flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path d="M8 8a3 3 0 1 0-0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 1 1 10 0H3Z" />
            </svg>

            <input
                type="text"
                value={firstName}
                className="grow"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path d="M8 8a3 3 0 1 0-0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 1 1 10 0H3Z" />
            </svg>
            <input type="text" value={lastName} className="grow"  placeholder="Last name" onChange={(e) => setLastname(e.target.value)} />
            </label>   
            <label className="input input-bordered flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm14 9H3v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9Z"/>
            </svg>
            <input type="text" value={age} className="grow" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
            </label>     
            <label className="input input-bordered flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 2h16v6l-3-3-4 4-2-2-5 5V7Z"/>
            </svg>
            <input type="text" value={photoUrl} className="grow" placeholder="Enter PhotoUrl" onChange={(e) => setPhotoUrl(e.target.value)} />
            </label>     
            {error && (
                <p className="text-red-500 text-center mt-2">
                {error}
                </p>
            )}
            <div className="card-actions justify-center pt-5">
                <button className="btn justify-center" onClick={saveProfile}>Save Profile</button>
            </div>
            </div>
            </div>
            </div>
            {toastMsg && (
                <div className="toast toast-top toast-center z-50">
                    <div className="alert alert-success">
                            <span>{toastMsg}</span>
                    </div>
                </div>
            )}
        </div>
        <UserCard user={{firstName,lastName,age,photoUrl}}></UserCard>
    </div>
 );
};

//export default memo(EditProfile);
export default EditProfile;