import React, {useState} from 'react'

export default function TextForm(props){
    // UPPERCASE BUTTON FUNCTION
    const handleUpClick = () => {
      let newText = text.toUpperCase()
      setText(newText)
    }
    // LOWERCASE BUTTON FUNCTION
    const handleDownClick = () => {
      let newText = text.toLowerCase()
      setText(newText)
    }
    const handleClear = () =>{
      setText('')
    }
  

  const handleOnChange = (event) => {
    setText(event.target.value)
    setHistory([...history, event.target.value]);
    setCurrentIndex(history.length);
  }
  
  const [text, setText] = useState('')

  // const CopyTextButton = () => {
  //   const [text, setText] = useState('');
    
  //   const handleTextChange = (event) => {
  //     setText(event.target.value);
  //   };


    // COPY BUTTON FUNCTION
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
    };

    // CLEAR BUTTON FUNCTION
    const handleClearSpacesClick = () => {
      const trimmedText = text.replace(/\s+/g, ' ');
      setText(trimmedText);
      setHistory([...history, trimmedText]);
      setCurrentIndex(history.length);
    };

    const [history, setHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);


    // UNDO BUTTON FUNCTION
    const handleUndoClick = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setText(history[currentIndex - 1]);
      }
    };

    // REDO BUTTON FUNCTION
    const handleRedoClick = () => {
      if (currentIndex < history.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setText(history[currentIndex + 1]);
      }
    };

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="container mb-3">
            <textarea value={text} onChange={handleOnChange} id="myBox" cols="30" rows="10" className="form-control"></textarea>
            <button className='btn btn-primary mt-3' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mt-3 ml-2' onClick={handleDownClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mt-3 ml-2' onClick={handleCopyClick}>Copy Text</button>
            <button className='btn btn-primary mt-3 ml-2' onClick={handleClearSpacesClick}>Clear Extra Spaces</button>
            <button className='btn btn-success mt-3 ml-2' onClick={handleUndoClick} disabled={currentIndex === 0}>Undo</button>
            <button className="btn btn-info mt-3 ml-2"onClick={handleRedoClick}disabled={currentIndex === history.length - 1}>Redo</button>
            <button className='btn btn-danger mt-3 ml-2' onClick={handleClear}>Clear</button>
        </div>
    </div>
    <div className="container lowerContainer">
      <h1>Your Summery</h1>
      <p>total words: <b>{text.split(' ').filter((element)=>{return element.length !== 0}).length}</b>, & total characters: <b>{text.length}</b></p>
      <p>{text.split(' ').filter((element)=>{return element.length}).length * 0.004} minutes to read this</p>
      <h2>Preview</h2>
      <p><i>{text}</i></p>
    </div>
    </>
  );
} 