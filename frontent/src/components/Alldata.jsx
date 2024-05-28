import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Alldata() {
    const [userData , setUserData] = useState([]);

    async function fetchdata(){
      try{
        const response = await fetch(`http://localhost:4000/api/v1/getdata`);
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
    <div>
         <h2>USER DETAILS IS HERE</h2>
        {
            
            userData.map((item)=>(<Card item={item}/>))
        }
    </div>
  )
}
