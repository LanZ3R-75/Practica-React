import logo from './logo.svg';
import React, {useState} from 'react';
import Notelist from './componentes/NoteList';
import NoteEditor from './componentes/NoteEditor';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

function App() {
 
  const[notes, setNotes] = useState([]);

  
  const handleSaveNote = (newNote) => {

    if (newNote.id) {

      setNotes(notes.map(note => note.id === newNote.id ? newNote : note));

    } else {

      const id = Date.now();
      setNotes([...notes, { ...newNote, id }]);
    }
    
  };

  const handleDeleteNote = (noteId) => {

    setNotes(notes.filter(note => note.id !== noteId));

  }

  return(

    

    <div className="container mt-5">
      
      <h1 className="text-center my-4">Aplicación de Notas</h1>
      <NoteEditor onSave = {handleSaveNote} />
      <Notelist notes = {notes} onDelete = {handleDeleteNote}/> 

    </div>

  );

}

export default App;
