import memesData from "../memes-data"
import React from "react";


export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

const [allMemeImages] = React.useState(memesData);




function renderMeme() {
    
        const memeIndex = Math.floor(Math.random() * 100) + 1;
        const url = allMemeImages[memeIndex].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
       
    }



    

    
    return (
        <main>
        <div className="form">
            <input 
           
                type="text"
                placeholder="Top text"
                className="form--input"
            />
            <input 
            
                type="text"
                placeholder="Bottom text"
                className="form--input"
            />
            <button 
                className="form--button"
                onClick={renderMeme}
               

            >
                Get a new meme image 🖼
            </button>
            <div className="img-wrapper">
               
            <img alt="" src={meme.randomImage} className="meme-image"></img>
            
            </div>
            
        </div>
    </main>  
    )
  }