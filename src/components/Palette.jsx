import {React, useEffect, useState} from 'react'
import { generateColors } from '../utils/lib'
import ColorCard from './ColorCard'
 
 
export default function Palette({count,colors}){
  
    return (
      <div className="w-2/3 flex flex-col">

          <div className="w-full h-96 grid xl:grid-cols-5 sm:grid-cols-2 mt-6">
              {
                  colors.map((color,i)=>(
                    <ColorCard color={color}/>
                  ))
              }
                
          </div>
      </div>
    )
}