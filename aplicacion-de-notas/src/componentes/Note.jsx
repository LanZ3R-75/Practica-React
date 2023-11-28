import React from "react";

//-----
function Note({note, onDelete, onEdit}){

    return(

        <div className="card my-2">

            <div className="card-body">

                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.content}</p>
                <button className="btn btn-primary" onClick = {() => onEdit(note)}>Editar</button>
                <button className="btn btn-danger" onClick = {() => onDelete(note.id)}>Eliminar</button>

            </div>

        </div>

    );//el segundo botom
}

export default Note;