import React,{useState} from 'react'

export default function Textform(props) {
    const handleupClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Successfully converted to Uppercase","success");
    }
    const handlelowClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Successfully converted to Lowercase","success");
  }
  const handleclear=()=>{
    let newText="";
    setText(newText)
}
    const handleonChange=(event)=>{
        setText(event.target.value);
    }
    const[text,setText]=useState('Text');
   
  return (
    <div className="container" style={{color:props.mode==='dark'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange ={handleonChange} style={{backgroundColor:props.mode==='light'?'grey':'white',color:props.mode==='dark'?'black':'white'}} id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
  
<button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleclear}>Clear</button>
   
    <div className="container my-3" style={{backgroundColor:props.mode==='light'?'rgb(13 12 66)':'white',backcolor:props.mode==='dark'?'white':'rgb(13 12 66)'}}>
      <h2>Your Text Summary</h2>
      <p><b>Words:</b>{text.split(" ").length},<b>Characters:</b>{text.length}</p>
      <p>{0.008*text.split(" ").length} :-Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
  )
}

