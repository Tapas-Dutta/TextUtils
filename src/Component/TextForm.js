import React from 'react'
import { useState } from 'react';


export default function TextForm(props) {
    const [text,setText]=useState("Enter your text");
    const handleChange=(evt)=>{
        // console.log("Change has made.");
        setText(evt.target.value);
    };
    const handleClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
  return (
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea
                className="form-control"
                id="myBox"
                rows={8}
                value={text}
                onChange={handleChange}
            />
        </div>
        <button className='btn btn-primary' onClick={handleClick}>Convert to Uppercase</button>
    </div>
  )
  
}



