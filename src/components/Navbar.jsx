//import { memo } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; 
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = async() =>{
    try{
      const res = await axios.post(BASE_URL+"/logout",{}, {withCredentials:true});
      //clear data from redux
      dispatch(removeUser());
      return navigate("/login");
    }catch(err){
      //Error handeler login
    }
  }
  console.log(user);
  return (
   <div className="navbar bg-base-300 overflow-visible px-4">
  
  {/* Left side */}
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">
      ❤️ Dev Tender
    </Link>
  </div>

  {/* Right side */}
  <div className="flex-none gap-2">
    
    {user && (
      <div className="dropdown dropdown-end relative">
        
        {/* User Info + Avatar */}
        <div className="flex items-center gap-2 cursor-pointer">
          <p>Welcome, {user.firstName}</p>

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src={user?.photoUrl}
              />
            </div>
          </div>
        </div>

        {/* Dropdown */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-2 w-52 p-2 shadow-lg z-[1000]"
        >
          <li>
            <Link to="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link to="/connections">Connection</Link>
          </li>
          <li>
            <Link to="/requests">Requests</Link>
          </li>
          <li>
            <Link to="/premium">Premium</Link>
          </li>
          <li>
            <button onClick={handelLogout}>Logout</button>
          </li>
        </ul>

      </div>
    )}

  </div>
</div>
  );
};
export default Navbar;
//export default memo(Navbar);