import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was click" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Upper case was click" +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase!", "success");
  };
  const handleClearClick = () => {
    // console.log("Upper case was click" +text);
    let newText = '';
    setText(newText);
    props.showAlert("text cleared!", "success");
  };
  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   setText("next text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#022140'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="myBox" className="form-label"></label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="12"
          style={{backgroundColor: props.mode==='light'?'white':'#495057', color: props.mode==='dark'?'white':'#022140'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert To Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Remove extra space
      </button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#022140'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in the above box to preview it here."}</p>
    </div>
    </>
  );
}
