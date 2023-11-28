import React, { useState, useEffect } from 'react';
import Notelist from './componentes/NoteList';
import NoteEditor from './componentes/NoteEditor';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [notes, setNotes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [editarNota, setEditarNota ] = useState(null);

  // Cargar notas de localStorage al iniciar la aplicación
  useEffect(() => {
    const savedNotes = localStorage.getItem('misNotas');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Función para guardar notas en localStorage
  const saveNotes = (updatedNotes) => {
    localStorage.setItem('misNotas', JSON.stringify(updatedNotes));
  };

  const handleSaveNote = (newNote) => {
    let updatedNotes;
    if (newNote.id) {
      // Actualizar una nota existente
      updatedNotes = notes.map(note => note.id === newNote.id ? newNote : note);
    } else {
      // Agregar una nueva nota
      const id = Date.now();
      updatedNotes = [...notes, { ...newNote, id }];
    }
    setNotes(updatedNotes);
    saveNotes(updatedNotes); // Guardar después de actualizar
    setEditarNota(null);

  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    saveNotes(updatedNotes); // Guardar después de eliminar
  };

  const handleEditNote = (note) => {
    setEditarNota(note);
  };  

  const filteredNotes = notes.filter(note => 

    note.title.toLowerCase().includes(busqueda.toLowerCase()) ||
    note.content.toLowerCase().includes(busqueda.toLowerCase())

  );

  return (
    <div className="container mt-5">
      <h1 className="text-center my-4">Aplicación de Notas</h1>
      <div className="mb-4">
        <h5 htmlFor="noteTitle" className="form-label">Buscar</h5>
        <input
          type="text"
          className="form-control custom-textContainer-bg"
          placeholder="Buscar nota..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <h5 htmlFor="noteTitle" className="form-label">Crear Nota</h5>
      
      <NoteEditor onSave={handleSaveNote} onEdit={handleEditNote} editarNota={editarNota}/>

      <h5 htmlFor="noteTitle" className="form-label">Lista de Notas</h5>

      <Notelist notes={filteredNotes} onDelete={handleDeleteNote} onEdit={handleEditNote}/>

    </div>
  );
}

export default App;
