//const import { memo } from 'react';
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import {useEffect, useState} from "react";
const Premium = () => {
    useEffect(()=>{
        verifyPremiumUser();
    },[]);
    const [isUserPremium,setIsUserPremium] = useState(false);
    const verifyPremiumUser = async() =>{
        const res = await axios.get(BASE_URL+"/premium/verify",{withCredentials:true});
        if(res.data.isPremium){
            setIsUserPremium(true);
        }
    };    
    const handelpayment = async(membershipType)=>{
        try{
            const order = await axios.post(BASE_URL+"/payment/create",{membershipType},{withCredentials:true});
            //It should open the razorpay dialog
            const {amount,keyId,currency,notes,orderId} = order.data;
            const options = {
                key: keyId, // Replace with your Razorpay key_id
                amount,
                currency,
                name: 'Dev Tinder',
                description: 'Test Transaction',
                order_id: orderId,                
                prefill: {
                    name: notes.firsName+ " "+ notes.lastname,
                    email: notes.email,
                    contact: '9778873644'
                },
                theme: {
                color: '#F37254'
                },
                handler: verifyPremiumUser,
            };
            const rzp = new window.Razorpay(options);
            rzp.open();

        }catch(err){
            console.log(err);
        }
    };
  return isUserPremium ? (  
    "You are already a premium users"
  ): (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10">
        {/*Gold Plan*/}
        <div className="card bg-base-300 shadow-xl">
        <div className="card-body">
        <span className="badge badge-primary w-fit">Basic</span>

        <h2 className="text-3xl font-bold">₹199</h2>

        <p>Glod Plans</p>

        <ul className="space-y-2">
        <li>✔ 5 Projects</li>
        <li>✔ Email Support</li>
        <li>✔ Community Access</li>
        </ul>

        <div className="card-actions justify-end">
        <button onClick={()=>handelpayment('gold')} className="btn btn-primary">
        Buy Now
        </button>
        </div>
        </div>
        </div>
        {/*Silver Plan*/}
        <div className="card bg-base-300 shadow-xl">
        <div className="card-body">
        <span className="badge badge-primary w-fit">Basic</span>

        <h2 className="text-3xl font-bold">₹100</h2>

        <p>Sliver Plans</p>

        <ul className="space-y-2">
        <li>✔ 5 Projects</li>
        <li>✔ Email Support</li>        
        </ul>

        <div className="card-actions justify-end">
        <button onClick={()=>handelpayment('silver')} className="btn btn-primary">
        Buy Now
        </button>
        </div>
        </div>
        </div>
    </div> 
  )
};

//export default memo(Premium);
export default Premium;