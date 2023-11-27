import React, {useState, useRef} from "react";

function NoteEditor({ onSave }){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const titleRef = useRef(null);

    const handleSubmit = (e) => {

       e.preventDefault();
       onSave({ title, content});
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
                    className="form-control"
                    id="noteTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    ref={titleRef}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="noteContent" className="form-label">Contenido</label>
                <textarea
                className="form-control"
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