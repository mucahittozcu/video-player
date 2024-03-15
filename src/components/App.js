"use client"
import { useState } from "react"

const App = () => {
const [video,setVideo] = useState("")

const updateInput = (newVideo) => {
   
   setVideo(newVideo)
}


return (
   <>
     <Menu video={video} updateInput={updateInput} />
     <Video video={video} updateInput={updateInput} />
   </>
 )
}

const Menu = ({ updateInput }) => {
  
   const handleInputChange = (e) => {
      updateInput(e.target.value)
   }
    return (
        <div>
            <h1 className="header">Video Player</h1>
           <form className="form-input">
            <input
               type="radio"
               value="https://www.youtube.com/embed/jqUDipMoMu0?si=iTE5lKtYdK-Gz_Kf"
               name="animal"
               id="animal1"
               onChange={handleInputChange}
               />
               <label for="animal1"> Geyik </label>
               
            <input
               type="radio"
               value="https://www.youtube.com/embed/DvJRFHVkAfM?si=tPYcaE5jJlC728kb"
               name="animal"
               id="animal2"
               onChange={handleInputChange}
               />
               <label for="animal2"> Salyangoz </label>
            <input
               type="radio"
               value="https://www.youtube.com/embed/ZzTNCsyYMIY?si=WLbQtEkjzV0jng05"
               name="animal"
               id="animal3"
               onChange={handleInputChange}
               />
               <label for="animal3"> Kedi </label>
            <input
               type="radio"
               value="https://www.youtube.com/embed/gyt5JYsnVM4?si=64tfD2cIvsa3yZyy"
               name="animal"
               id="animal4"
               onChange={handleInputChange}
               />
               <label for="animal4"> Örümcek </label>
           </form>
        </div>
      )
}

const Video = ({ video }) => {
 return (
   <div className="video">
      
   <iframe
       src={video}
       width={550}
       height={350}
       title="YouTube video player"
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen
       />
   
   </div>
 )
}

export default App
