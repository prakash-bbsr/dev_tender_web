//import { memo } from 'react';
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections,removeConnections } from "../utils/connectionSlice";

const Connections = () => {
    const connections = useSelector((store) => store.connection);
    const dispatch = useDispatch();
    const fetchConnection = async()=>{
        try{
            const res = await axios.get(BASE_URL+"/user/connection",{withCredentials:true});
            console.log(res.data.data);
            dispatch(addConnections(res.data.data))
        }catch(err){
            console.log(err);
        }
    };
  useEffect(()=>{
    fetchConnection()
  },[]);


  const handleMessage = (id) => {
    alert("Open chat with user " + id);
  };

  if(!connections) return;
  if(connections.length === 0){
    return <h1> No Connection found</h1>
  }
  return (
    <div className="flex flex-col items-center my-10 gap-4">
      <h2 className="text-bold text-2xl text-white">Connections</h2>
       {
        connections.map((connection) => (
           <div
          key={connection._id}
          className="bg-primary/80 shadow-md rounded-2xl p-4 flex items-center gap-4 hover:shadow-lg transition w-full max-w-md">
            {/* Avatar */}
          <img
            src={connection?.photoUrl}
            alt={connection.firstName}
            className="w-16 h-16 rounded-full object-cover border"
          />

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold">
              {connection.firstName+" "+connection.lastName}, {connection.age}
            </h3>
            <p className="text-gray-500 text-sm">
              
            </p>

            {/* Buttons */}
            <div className="mt-2 flex gap-2">              
              <button
                onClick={() => handleMessage(connection._id)}
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

//export default memo(Connections);
export default Connections;