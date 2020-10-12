import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Notes from './Notes'


function NotesGet() {
  const [note, setNote] = useState([])
  const [subject, setSubject] = useState([])

  useEffect(() => {
    const getIndex = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/notes`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      console.log(response.data.records[0].fields)
      setNote(response.data.records[0].fields.note)
      setSubject(response.data.records[0].fields.subject)
    }
    getIndex()
  }, [])

  return (
    <div className='notes-get'>
      <Notes
        note={note}
        subject={subject}
      />
    </div>
  )
}

export default NotesGet