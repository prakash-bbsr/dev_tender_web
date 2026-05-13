//import { memo } from 'react';

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest,removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();
    const fetchRequest = async()=>{
        try{
            const res = await axios.get(BASE_URL+"/user/requests/received",{withCredentials:true});
            console.log(res.data.data);
            dispatch(addRequest(res.data.data));
        }catch(err){
            console.log(err);
        }
    };
    //Call Firsttime 
    useEffect(()=>{
        fetchRequest()
    },[]);

    const handleAccept = (id) => {
        alert("Accepted user " + id);
    };

    const handleReject = (id) => {
        //setUsers(users.filter((u) => u.id !== id));
    };

    const handleMessage = (id) => {
        alert("Open chat with user " + id);
    };
  return (
    <div className="flex flex-col items-center my-10 gap-4">
      <h2 className="text-bold text-2xl text-white">Request Connection</h2>
       {
        requests.map((request) => (
           <div
          key={request?.fromUserId?._id}
          className="bg-primary/80 shadow-md rounded-2xl p-4 flex items-center gap-4 hover:shadow-lg transition w-full max-w-md">
            {/* Avatar */}
          <img
            src={request?.fromUserId?.photoUrl}
            alt={request?.fromUserId?.firstName}
            className="w-16 h-16 rounded-full object-cover border"
          />

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold">
              {request?.fromUserId?.firstName+" "+request?.fromUserId?.lastName}, {request?.fromUserId?.age}
            </h3>
            <p className="text-gray-500 text-sm">
              
            </p>

            {/* Buttons */}
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleAccept(request?.fromUserId?._id)}
                className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600"
              >
                Accept
              </button>

              <button
                onClick={() => handleReject(request?.fromUserId?._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
              >
                Reject
              </button>

              <button
                onClick={() => handleMessage(request?.fromUserId?._id)}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600"
              >
                Message
              </button>
            </div>
          </div>
        </div>
        ))
      }
    </div>
  );
};

//export default memo(Requests);
export default Requests;