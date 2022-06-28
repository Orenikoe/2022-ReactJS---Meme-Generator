// import memesData from "../memes-data"
import React from "react";


export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

const [allMemes, setAllMemes] = React.useState([]);
console.log(allMemes)


    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
        console.log(allMemes)
    }, [])





function renderMeme() {
    
        const memeIndex = Math.floor(Math.random() * 100) + 1;
        const url = allMemes[memeIndex].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
       
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
console.log(meme)
    }



    

    
    return (
        <main>
        <div className="form">
            <input 
           name="topText"
                type="text"
                placeholder="Top text"
                className="form--input"
                value={meme.topText}
                onChange={handleChange}

            />
            <input 
            name="bottomText"
                type="text"
                placeholder="Bottom text"
                className="form--input"
                value={meme.bottomText}
                onChange={handleChange}
                
            />
            <button 
                className="form--button"
                onClick={renderMeme}
               

            >
                Get a new meme image 🖼
            </button>
            <div className="img-wrapper">
               
            <img alt="" src={meme.randomImage} className="meme-image"></img>
            <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </div>
    </main>  
    )
  }