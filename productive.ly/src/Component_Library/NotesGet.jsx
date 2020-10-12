import React, { useEffect, useState } from 'react'
import axios from 'axios'


function NotesGet() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const getIndex = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/notes`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      console.log(response.data.records)
      setNotes(response.data.records)
    }
    getIndex()
  }, [])

  return (
    <div className='notes-get'>
      {/* <Notes
        name={name}
      /> */}
    </div>
  )
}

export default NotesGet