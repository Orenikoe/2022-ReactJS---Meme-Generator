import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Meme from './components/Meme.jsx';








export default function App() {

  return (
    <div className='page'>
    <Navbar />
    <Meme  />
    </div >
    
  );
}



// import boxes from './boxes';

// const [squares, setSquares] = React.useState(boxes)


// const styles = {
// backgroundColor: props.darkMode? '#222222' : "#cccccc"
// }
  
// const squareElements = squares.map(square => (
//     <div style={styles} className="box" key={square.id}></div>
// ))