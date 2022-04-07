import logo from './logo.svg';
import Header from './components/Header';
import Palette from './components/Palette';
import { useEffect, useState } from 'react';
import { generateColors } from './utils/lib'
import Footer from './components/Footer';

function App() {

  const [count, setCount] = useState(5)
  const [colors , setColors] = useState(generateColors(count))

  const addColor = () => {
    setColors([...colors,generateColors(1)] )
    console.log(colors);
  }

  const removeColor = () => {
      if(colors.length > 0) {
        let arrayColors = [...colors]
        arrayColors.splice(arrayColors.length -1, 1)
        setColors(arrayColors)
      }
  }

  useEffect(() =>{
    setColors(generateColors(count))
  },[count])


  return (
    <div className="w-100 h-screen">
      <Header addColor={addColor} removeColor={removeColor}/>
      <main className="w-full flex justify-center justify-items-center content-center mt-6">
        <Palette count={count} colors={colors}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
