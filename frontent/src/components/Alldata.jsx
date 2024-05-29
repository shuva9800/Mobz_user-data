import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Alldata() {
    const [userData , setUserData] = useState([]);

    async function fetchdata(){
      try{
        const response = await fetch(`https://userdata-store.vercel.app/getdata`);
        const value = await response.json();
        setUserData(value.data);

      }
      catch(err){
        console.log(err)
      }
       
      
    }
    // fetchdata();
  

    useEffect(
        ()=>{
            fetchdata();
        },[]
    );
    console.log("use state data",userData);
  return (
    <div className='flex items-center flex-col py-4 gap-4'>
         <h2>USER DETAILS IS HERE</h2>
        {
            
            userData.map((item)=>(<Card item={item}/>))
        }
    </div>
  )
}
