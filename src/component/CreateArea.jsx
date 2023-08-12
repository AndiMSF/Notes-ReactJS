import React, { useState } from "react";

function CreateArea(props) {

  const [input, setInput] = useState({title:"",content: ""});

  function handleInput(event){
    const {name, value} = event.target
    
    setInput((prevValue)=>{ 
      if(name === "title"){
        return {title: value, content:prevValue.content}
      } else if (name === "content"){
        return {content:value, title:prevValue.title}
      }
    })
  }

  return (
    <div>
      <form>
        <input onChange={handleInput} name="title" placeholder="Title" value={input.title} />
        <textarea onChange={handleInput} name="content" placeholder="Take a note..." value={input.content} rows="3" />
        <button onClick={(event)=>{
          props.onClicked(input) 
          event.preventDefault()
          }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
