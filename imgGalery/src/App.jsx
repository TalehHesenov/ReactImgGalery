import { useState } from 'react'
import './App.css'
import images from './images'

function App() {

  const [selectImg,setSelectImg]= useState(images[0])
  

  return (
    <div className='container'>

    <div className="homeImgContainer">
      <img src={selectImg} alt="homeImg" />
    </div>

    <div className="imgContainer">
      
      {images.map((img,index)=>(
        <div className="imgDiv">
        <img key={index} src={img} alt="nemu" onClick={()=>{setSelectImg(img)}} />
        </div>
      ))}
      
    </div>
  
    </div>
  )
}

export default App
