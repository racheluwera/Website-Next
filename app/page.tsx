// import TimeDisplay from "./components/TimeDisplay";
'use client'
import { onAuthStateChanged } from "firebase/auth";
import TimeDisplay from "./components/TimeDisplay";
import { useEffect, useState } from "react";
import { auth } from "./lib/firebase";

export default function HomePage(){
  const[user, setUser] =useState<any>(null)

  useEffect(()=>{
    const lookForLoggInUser= onAuthStateChanged(auth, (currentUser)=>{
  
  if (currentUser){
    console.log("user logged in:", currentUser.email)
    setUser(currentUser)
  }
  else{
    console.log("No user logged in")
    setUser(null)
  }
  })
}, [])
  

  return(
    <section className ="text-center py-20">
      <h1 className ="text-3xl font-bold mb-4">Welcome to My Website!</h1>
      <p className ="text-gray-700 mb-8">This is the home page- explore and enjoy!</p>
      <div className="inline-block bg-white shadow-md rounded-lg p-6">
        <TimeDisplay/>
        </div>
    </section>
  );

}