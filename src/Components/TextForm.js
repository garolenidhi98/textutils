import React, { useState } from 'react'

const TextForm = (props) => {

    const[text,setText] = useState("");

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleUpClick = () => {
        //  console.log("clicked")
        let newText=text.toUpperCase();
         setText(newText)
        //  props.showAlert("Converted to uppercase!","success");   
    }

    const handleLoClick = () => {
        let newText=text.toLowerCase();
        setText(newText) ;   
        // props.showAlert("Converted to lowercase!","success");
    }

    const handleClearClick = () => {
        //  console.log("clicked")
        let newText='';
         setText(newText) ;    
    }

    const speak = () => {
        //  console.log("clicked")
        let newText=new SpeechSynthesisUtterance();
        newText.text=text;    
        window.speechSynthesis.speak(newText)
    }

    const handleCopy = () => {
      var text =document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    //   props.showAlert("Text has copied!","success") 
    }

    const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        // props.showAlert("Extra space has removed!","success") 
    }

return(
    <>
    <div className="container1" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
       <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} rows="8" value={text} onChange={handleOnChange}></textarea>
       </div>
       <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
       <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
       <button type="submit" className="btn btn-primary mx-2" onClick={speak}>Speak</button>
       <button type="submit" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
       <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container2 my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 *  text.split(" ").length}  Minutes to read the words</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here.."}</p>
    </div>
    </>
)
}

export default TextForm;
