import React from "react";
import Note from './Note';

function NoteList({notes, onDelete}){

    return(

        <div>
          {notes.length > 0 ? (
            notes.map(note => (
            <Note key={note.id} note={note} onDelete={onDelete} />
          ))
        ) : (
          <p className="text-center">No hay notas para mostrar.</p>
        )}
      </div>
    );

}

export default NoteList;