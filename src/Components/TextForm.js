    import React, {useState} from 'react'


export default function TextForm(props) {
    const [Text, setText] = useState('');
    let handleUpClick = () =>{
        // console.log("handle up case clicked")
        if(Text.length === 0){
            props.showAlert("Enter text below!", "warning")
        }
        else{
        let newtext = Text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to Upper case!", "success")
        }
    }
    let handleLoClick = () =>{
        // console.log("handle up case clicked")
        // let newtext = Text.toLowerCase()
        if(Text.length === 0){
            props.showAlert("Enter text below!", "warning")
        }
        else{
        setText(Text.toLowerCase())
        props.showAlert("Converted to Lower case!", "success")
        }
    }
    let handleClearClick = () =>{
        // console.log("handle up case clicked")
        if(Text.length === 0){
            props.showAlert("Already Cleared!", "success")
        }
        else
       { let newtext = ""
        setText(newtext)
        props.showAlert("Text cleared!", "success")}

    }
    let handleSenClick = () =>{
        // console.log("handle up case clicked")
        if(Text.length === 0){
            props.showAlert("Enter text below!", "warning")
        }
        else
        {let first = Text.charAt(0)
        let rem = Text.slice(1)
        setText(first.toUpperCase()+rem)
        props.showAlert("Converted to Sentence case!", "success")}

    }
    const handleCopy =() => {
        if(Text.length === 0){
            props.showAlert("Enter text below!", "warning")
        }
        else
       {
       navigator.clipboard.writeText(Text)
       props.showAlert("Copied to Clipboard!", "success")}

    }
    const handleExtraSpaces =() => {
        if(Text.length === 0){
            props.showAlert("Enter text below!", "warning")
        }
        else
       {let newText = Text.split(/[ ]+/)
       setText(newText.join(' '))
       props.showAlert("Extra spaces removed!", "success")}

    }
    const handleOnChange = (event) => {
        // console.log("on changed")
        setText(event.target.value)
    }

    // let trimed = Text.replace(/\s+/g, " ").trim();
  return (
    <>
    <div className="container" style={{color : props.mode=== "dark"? "white":"black"}}>
    <h1>{props.heading}</h1>
    <div>
   <div className="mb-3">
    <textarea className="form-control " value={Text} style={{backgroundColor : props.mode=== "dark"? "#707070":"white", color : props.mode=== "dark"? "white":"black"}} onChange={handleOnChange} id="my-box" rows="8"></textarea>
   </div>
   <button disabled={Text.length===0} className="btn btn-primary my-2" onClick={handleUpClick} >Convert to UpperCase</button>
   <button disabled={Text.length===0} className="btn btn-primary  mx-2" onClick={handleLoClick} >Convert to UpperCase</button>
   <button disabled={Text.length===0} className="btn btn-primary  my-2" onClick={handleSenClick} >Convert to SentenceCase</button>
   <button disabled={Text.length===0} className="btn btn-primary  mx-2" onClick={handleClearClick} >Clear text</button>
   <button disabled={Text.length===0} className="btn btn-primary  my-2 mx-2" onClick={handleCopy} >Copy text</button>
   <button disabled={Text.length===0} className="btn btn-primary  mx-2" onClick={handleExtraSpaces} >Remove extra spaces</button>
    </div>
    </div>

    <div className="container my-3"  style={{color : props.mode=== "dark"? "white":"black"}} >
        <h3>Your text Summary</h3>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {Text.split("").filter((element)=>{return element!==" "}).length} Character</p>
        <p>Average reading time {0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes</p>
        <h3>Preview</h3>
        <p>{Text.length>0 ? Text: "Nothing to preview!"}</p>
    </div>


    </>
  )
}

