/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"

export default function Sidebar(props) {

    // notes array being mapped into elements which will display into the sidebar
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div

                // changes the style color dynamically when clicked on each note item 
                className={`title ${note.id === props.currentNote.id ? "selected-note" : ""
                    }`}
                // set the note id and changing the content of the note specifically and promptly displaying the content correctly
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button
                    className="delete-btn"
                    onClick={() => props.deleteNote(note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
