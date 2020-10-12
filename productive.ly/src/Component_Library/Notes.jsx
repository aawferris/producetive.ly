import React from 'react'
import { useState } from 'react'

function Notes() {
  const [notes, setNotes] = useState('')
  const [subject, setSubject] = useState('')
  const [note, setNote] = useState('')

  // const newNote = {
  //   subject: 'does it work, though?',
  //   note: 'testing 1, 2, 3'
  // }

  const handleSubmit = event => {
    event.preventDefault()
    const submittedNote = {
      subject,
      note,
    }
    setNotes(...notes, submittedNote)
    setSubject('')
    setNote('')
  }

  // I want to make the notes post to the airtable API 
  // I want to make the notes append (with get) to the page

  return (
    <div className='notes-container'>
      <h4>Thought Catcher</h4>
      <p>Notes:</p> {/* This is where I want to append the note data */}
      <form onSubmit={handleSubmit}>
        <label className='subject' htmlFor='subject'>Subject</label>
        <input
          className='subject'
          name='subject'
          type='text'
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <label className='note' htmlFor='note'></label>
        <textarea
          className='note'
          name='note'
          type='textarea'
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
        <button>Add Note</button>
      </form>
      {/* <button onClick={() => setNotes([...notes, newNote])}>Add Note</button>
      {notes.map((note) => ( // to make this map function work, I will have to import the data from the AirTable
        <div>
          <p><strong>{note.subject}</strong></p>
          <p>{note.note}</p>
        </div>
      ))} */}
    </div>
  )
}

export default Notes