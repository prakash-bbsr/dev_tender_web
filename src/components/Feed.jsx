//import { memo } from 'react';
import axios from "axios";
import {BASE_URL} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed,removeFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
const Feed = () => {
  //Read feed from the store
  const feed = useSelector((store) =>store.feed);
  const dispatch = useDispatch();
  const getFeed = async() =>{
      if (feed) return;
      try{                
        const res = await axios.get(BASE_URL+"/user/feed",{withCredentials:true});
        //add feed response to the feed
        dispatch(addFeed(res.data.data));
      }catch(err){
        console.log(err)
      }
  };

  useEffect(() => {
    getFeed();
  }, []);
  return (
   feed && ( <div>
      <UserCard user={feed[0]}></UserCard>
    </div>
    )
  );
};

//export default memo(Feed);
export default Feed;