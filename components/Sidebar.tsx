import React from "react";

// Definir as props esperadas
type SidebarProps = {
    notes: { id: string; body: string }[];
    currentNote: { id: string };
    setCurrentNoteId: (id: string) => void;
    newNote: () => void;
    deleteNote: (event: React.MouseEvent, noteId: string) => void;
};

export default function Sidebar(props: SidebarProps) {
    const noteElements = props.notes.map((note) => (
        <div key={note.id}>
            <div
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ));

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h2>Notes</h2>
                <button className="new-note" onClick={props.newNote}>
                    New note +
                </button>
            </div>
            {noteElements}
        </section>
    );
}
