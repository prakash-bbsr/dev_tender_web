//import { memo } from 'react';

const UserCard = ({user}) => {
    console.log("User data =", user);
  return (   
    <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-300 w-96 shadow-xl -mt-10">
                <figure className="px-10 pt-10">
                    <img
                    src={user?.photoUrl}
                    alt="Photo"
                    className="rounded-xl w-full h-60 object-cover object-top" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user.firstName + " " +user.lastName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-secondary">Ignored</button>
                        <button className="btn btn-primary">Interested</button>
                    </div>
                </div>
        </div>
    </div>
  );
};

//export default memo(UserCard);
export default UserCard;