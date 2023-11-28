import React from "react";

function Note({note, onDelete, onEdit}){

    return(

        <div className="card my-2 note-container">

            <div className="card-body">

                <h4 className="card-title">{note.title}</h4>
                <p className="card-text">{note.content}</p>
                <button className="btn btn-custom-green me-3" onClick = {() => onEdit(note)}>Editar</button>
                <button className="btn btn-danger" onClick = {() => onDelete(note.id)}>Eliminar</button>

            </div>

        </div>

    );
}

export default Note;