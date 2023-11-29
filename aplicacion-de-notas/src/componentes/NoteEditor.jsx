import React, {useState, useRef, useEffect} from "react";

function NoteEditor({ onSave, editarNota}){
    
    const [title, setTitle] = useState(editarNota ? editarNota.title : '');
    const [content, setContent] = useState(editarNota ? editarNota.content : '');
    const titleRef = useRef(null);

    //Effect para actualizar los campos de la nota que se esta editando
    useEffect(() => {
        
        setTitle(editarNota ? editarNota.title : '');
        setContent(editarNota ? editarNota.content : '');

    }, [editarNota]);

    //Funcion para manejar el guardado de la nota (el submit)

    const handleSubmit = (e) => {

       e.preventDefault();

       if (!title.trim() || !content.trim()) {
        alert('Por favor, rellena tanto titulo como contenido'); //un alert para gestionar las notas vacias
        return;
      }

       onSave({...editarNota, title, content});
       setTitle('');
       setContent('');
       titleRef.current.focus();

    };

    return (

        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
                <label htmlFor="noteTitle" className="form-label">Título</label>
                <input
                    type="text"
                    className="form-control custom-textContainer-bg"
                    id="noteTitle"
                    placeholder="Titulo..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    ref={titleRef}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="noteContent" className="form-label">Contenido</label>
                <textarea
                placeholder="Contenido de la nota..."
                className="form-control custom-textContainer-bg"
                id="noteContent"
                rows="3"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    );

}

export default NoteEditor;