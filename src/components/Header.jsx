import {React, useState} from 'react'
 
 
export default function Header({addColor,removeColor}){

    const [isDark, setisDark] = useState(true)

    const themeButton = () => {
        return <button>CLick</button>
    }
 
    return (
        <header>
            <div className="w-full ">
                <div className="w-full h-10 border-2 border-cyan-300">
                    <button>CLICK</button>
                </div>
                <div className="w-screen flex flex-col align-center">
                    <h3 className="text-white">Color Palette Generator</h3>
                    <div className="w-full flex justify-center justify-between justify-items-center content-center mt-6 mb-4">
                        <button className="bg-gray-500 text-white p-2 rounded-md" onClick={addColor}>Add Color</button>
                        <button className="bg-gray-500 text-white p-2 rounded-md" onClick={removeColor}>Remove Color</button>
                    </div>
                </div>     
            </div>
        </header>
    )
}