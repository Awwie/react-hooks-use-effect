//useEffect will run our side effect function every time the component re-renders.render -> useEffect -> setState -> re-render -> useEffect

import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";


function App() {
  
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

   //reset the count variable back to 0 after 5 sec
   useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  // useEffect(() => {
  //   //side effect fn
  //   console.log("App useEffect (Count) called");
  // }, [count]); //run when count variable has changed

  //updates the chrome tab name based on the user input field
  useEffect(() => {
    document.title = text;
  }, [text]);

  console.log("App component rendering");

  function handleClick() {
    setCount((count) => count + 1)
  }

  function handleText(e) {
    setText(e.target.value)
  }

  

  return (
    <div>
      <button onClick={handleClick} >I've been clicked {count} times</button>
      <input 
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={handleText}
      />
      <DogPics />


    </div>
    
  )
}

export default App;
