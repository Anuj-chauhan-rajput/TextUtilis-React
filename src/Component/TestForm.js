import React, { useState } from 'react'

export default function TestForm(props) {


 const  handleUpClick=()=>{
    // console.log("UpperCase was clicked"+test);
    let newText=test.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case",'Success');
  }
  const handleLowerClick=()=>{
    let newText=test.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case",'Success');

  }
 const  handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text cleared",'Success');

  }
  const handleCopy=()=>{
    var test=document.getElementById("myBox");
    test.select();
    navigator.clipboard.writeText(test.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to clipboard",'Success');


  }

  const handleExtraSpaces=()=>{
    let newText=test.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed",'Success');

  }


  const handleOnChange=(event)=>{
    // console.log("success");
    setText(event.target.value);
  }

  const [test,setText]=useState("");

  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-4">
        <textarea className="form-control" value={test} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={test.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={test.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
        <button disabled={test.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={test.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={test.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    
    </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Test Summary </h1>
      <p>{test.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {test.length} Charcters</p>
      <p>{.008 *test.split(" ").filter((element)=>{return element.length!==0}).length} Minute Read</p>

      <h2>Preview</h2>
      <p>{test.length>0?test:"Nothing to preview"}</p>
    </div>

    </>
  
  )
}
