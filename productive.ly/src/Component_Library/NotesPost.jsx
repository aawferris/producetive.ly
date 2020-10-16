import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Notes(props) {
  const [notes, setNotes] = useState('')
  const [subject, setSubject] = useState('')
  const [note, setNote] = useState('')

  // makes the API POST call
  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      subject,
      note,
    }
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/notes`
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        }
      }
    )
      setNotes(...notes, fields)
      setSubject('')
      setNote('')
      // refreshes the page after it posts
      props.setRefresh(!props.refresh) 
  }

  return (
    <div className='notes-container'>
      <form onSubmit={handleSubmit}>
        <label className='subject' htmlFor='subject'>Subject:</label>
        <input
          className='subject'
          name='subject'
          type='text'
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <label className='note' htmlFor='note'>Note:</label>
        <textarea
          className='note'
          name='note'
          type='textarea'
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
        <button type='submit'>Add Note</button>
      </form>
    </div>
  )
}

export default Notes



// onClick={() => setNotes([...notes, newNote])}