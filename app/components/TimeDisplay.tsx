

"use client"

import { useEffect, useState} from "react";

export default function TimeDisplay(){
    const[currentTime, setCurrentTime] =useState(new Date());
    useEffect(()=>{
        const timer = setInterval(()=>setCurrentTime(new Date()), 1000);
        return ()=> clearInterval(timer);
    },[]);
    return(
        <div>
            <h2 className ="text-lg fontSemibold mb-2">Current Date& Time</h2>
            <p className ="text-gray-500">{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
            </p>
        </div>
    );
    }
