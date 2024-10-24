import React from 'react'
import { useState } from 'react';


export default function TextForm(props) {
    const [text,setText]=useState("");
    const handleChange=(evt)=>{
        // console.log("Change has made.");
        setText(evt.target.value);
    };
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    };
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    };
    const handleClrClick=()=>{
        setText("");
    };
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea
                    className="form-control"
                    id="myBox"
                    rows={8}
                    value={text}
                    onChange={handleChange}
                />
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClrClick}>Clear Text</button>
        </div>
        <div className='container my-3'>
            <h2>Your Text</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Time Requird to read {text.split(" ").length} words is {text.split(" ").length*0.008} minutes.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    
  )
  
}