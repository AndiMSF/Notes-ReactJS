import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [arrayNotes, setArrayNotes] = useState([])

  function addNotes(input){
    setArrayNotes((prevItems) => {
      return [...prevItems, input]
    })
  }

  function removeNotes(id) {
    setArrayNotes((prevItems) => {
      return prevItems.filter((notes, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onClicked={addNotes}/>
      {arrayNotes.map((semuaNotes, index) => {
        return <Note key={index} id={index} title={semuaNotes.title} content={semuaNotes.content} onDeleted={removeNotes}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
