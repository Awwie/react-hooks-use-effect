//without the 2nd argu of [], we'd run into an infinite loop:
//render -> useEffect -> setImages -> render -> useEffect -> setImages -> render -> etc...

import React, { useState, useEffect } from "react";

function DogPics() {
  const [images, setImages] = useState([]); //initial render of empty obj

  //If we write a component that updates state from inside the useEffect callback, we'll see an issue without using the [] as 2nd argu.
  //infinite loop can happen without it
  useEffect(() => {
    console.log("DogPic useEffect called");
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log("DogPic Fetch setState");
        console.log(data.message)
        setImages(data.message); // this means setter Fn has set "images" to be the new obj
      });
  }, []); // empty brackets mean this will run on first render only

  console.log("DocPic component rendering");

  //images being the new obj needs to be mapped to render the array of images to the page
  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} />
      ))}
    </div>
  );
}

export default DogPics;
