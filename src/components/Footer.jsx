import {React, useState} from 'react'
 
 
export default function Footer(){
 
    return (
        <div className="flex flex-col justify-items-center content-end mt-24">
            <button className="">Generate Palette</button>
            <div>
                <p>Or just press space to generate new palettes.</p>
            </div>
        </div>
    )
}