import React from "react";

function Note({note, onDelete}){

    return(

        <div className="card my-2">

            <div className="card-body">

                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.content}</p>
                <button className="btn btn-danger" onClick = {() => onDelete(note.id)}>Eliminar</button>

            </div>

        </div>

    );

}

export default Note;