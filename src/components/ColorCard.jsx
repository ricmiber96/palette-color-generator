
import {React, useState} from 'react'
 
 
export default function ColorCard({color}){
 
    return (
        <div className="w-100 h-96 flex flex-col bg-gray-100 rounded rounded-xl shadow-lg p-4 m-2">
            <div className="min-h-[70%] rounded rounded-lg" style={{backgroundColor:`${color}`}}></div>
            <div className="flex justify-center justify-items-center content-center mt-6">
                <p>{color}</p>
            </div>
        </div>
    )
}