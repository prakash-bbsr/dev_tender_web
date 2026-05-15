import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [emailId,setEmailId] = useState("");
  const [password,setPassword] = useState("");
  const [isLoginForm,setIsLoginForm] = useState(false);
  //Error handler
  const [error,setError] = useState("");
  const navigate = useNavigate();
  //useDispatch() hook is used to store data to redux
  const dispatch = useDispatch();
  //Api Call using axios package
  const handelLogin = async()=>{      
      try {
        const res = await axios.post(BASE_URL+"/login", {
          emailId: emailId,
          password: password,
        },{ withCredentials:true });
        console.log(res.data);
        dispatch(addUser(res.data.data));
        return navigate("/");
      } catch (err) {               
        setError(err?.response?.data?.message || "Invalid credentials");        
      }
  }
  const handelSignUp = async()=>{
    try{
      const res = await axios.post(BASE_URL+"/signUp",{
        firstName,lastName,emailId,password
      },{withCredentials:true});
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    }catch{err}{
      setError(err?.response?.data || "Something went wrong");
    }
  }
  return <div className="min-h-screen flex items-center justify-center -mt-20">
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{isLoginForm ? "Login" :"Sign UP"} </h2>  
      {!isLoginForm && <><label className="input input-bordered flex items-center gap-2">
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
            <input type="text" value={lastName} className="grow"  placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
      </label> </>}        
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" value={emailId} className="grow" placeholder="Email" onChange={(e) => setEmailId(e.target.value)} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd" />
        </svg>
        <input type="password" value={password} className="grow"  placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </label>        
        {error && (
          <p className="text-red-500 text-center mt-2">
            {error}
          </p>
        )}
        
        <div className="card-actions justify-center pt-5">
          <button className="btn justify-center" onClick={isLoginForm ? handelLogin : handelSignUp}> {isLoginForm ? "Login" : "Sign Up"} </button>
        </div>
        <p className="text-center py-2 cursor-pointer text-blue-500 hover:underline" onClick={()=>setIsLoginForm((value) => !value)}>{isLoginForm
                      ? "New user ? Signup Here"
                      : "Existing User? Login Here"
          }</p>
      </div>
    </div>
  </div>
}

export default Login;