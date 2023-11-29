import React from "react";
import anime from 'animejs/lib/anime.es.js'; // Importa Animejs

function Note({ note, onDelete, onEdit }) {

  // Función para manejar la eliminación con animación
  const handleDeleteWithAnimation = () => {
    const uniqueClass = `note-${note.id}`;
    const noteElement = document.querySelector(`.${uniqueClass}`);

    // Animación con Anime.js
    anime({
        targets: noteElement,
        scale: [1, 1.1], 
        opacity: [1, 0],
        duration: 1000,
        easing: 'easeOutSine',
        complete: () => {
          onDelete(note.id);
        },
    });
  };

  return (
    <div className={`card my-2 note-container note-${note.id}`}>
      <div className="card-body">
        <h4 className="card-title">{note.title}</h4>
        <p className="card-text">{note.content}</p>
        <button className="btn btn-custom-green me-3" onClick={() => onEdit(note)}>
          Editar
        </button>
        <button className="btn btn-danger" onClick={handleDeleteWithAnimation}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Note;
