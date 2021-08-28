import React, {useState} from 'react'

export default function Textform(props) {

    // Code for converting text to Upper case
    const onClickChange = () =>{
        console.log('The button was clicked '  + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to Uppercase', 'success')
    }

    const onWriteChange = (event) =>{
        console.log('On change as clicked')
        setText(event.target.value);
    }

    // Code for converting text to Lower case
    const handleOnChange = () =>{
        console.log('The button was clicked '  + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to Lowercase', 'success')
    }

    // Code for clearing the text
    const onClear = () =>{
        console.log('The button was clicked '  + text);
        let newText = '';
        setText(newText);
        props.showAlert('Text was cleared', 'success')
    }

   

    const [text, setText] = useState("");



    // Writing code for enabling dark mode in our present website
    const [myStyle, setMyStyle] =  useState({
        color:'black',
        backgroundColor:'white', 
        // border:'2px solid green'
    });

    const [btnMode, setbtnMode] = useState( 'Enable dark Mode');

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtnMode('Enable light mode')
        }
        else{
            setMyStyle(
                {
                    color:'black',
                    backgroundColor:'white'
                } )
                setbtnMode('Enable dark Mode');
        }

    }

    return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'white'}`} style={{backgroundColor: props.mode==='dark'?'blue':'white'}} >
        <h1>{props.heading} </h1>
        <div className="container" style={{backgroundColor: props.mode==='dark'?'blue':'white'}}>
            <textarea className={`text-${props.mode==='light'?'dark':'white'}`} name="textarea" id="textArea" value={text} onChange={onWriteChange} style={{backgroundColor: props.mode==='dark'?'blue':'white'}} cols="100" rows="12"></textarea>
        </div>
        <button className="btn btn-primary mx-3"   onClick={onClickChange} >Convert to UC</button>
        <button className="btn btn-primary mx-2" onClick={handleOnChange}>Convert to LC</button>
        <button className="btn btn-primary mx-2" onClick={onClear}>Clear Text</button>
        <button className="btn btn-primary mx-5"  onClick={toggleStyle}>Enable dark Mode</button>

        <h1>Your text summary</h1>
        <p>Your text contains {text.split(" ").length} words and {(text.length)} characters </p>
        <p> <b> Your text will take {0.004*text.split(" ").length} minutes read </b></p>

        <h2>Your text preview</h2>
        <p>{text.length>0?text:"Please enter some text in textbox for preview"}</p>
        </div>
        </>
    )
}
