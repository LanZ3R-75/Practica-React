import React from "react";
import Note from './Note';

function NoteList({notes, onDelete, onEdit}){

    return(

        <div>
          {notes.length > 0 ? (
            notes.map(note => (
            <Note key={note.id} note={note} onDelete={onDelete} onEdit={onEdit}/>
          ))
        ) : (
          <p className="text-center">No hay notas para mostrar.</p>
        )}
      </div>
    );

}

export default NoteList;