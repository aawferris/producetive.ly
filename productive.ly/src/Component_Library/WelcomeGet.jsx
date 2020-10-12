import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Welcome from './Welcome'


function WelcomeGet() {
  const [name, setName] = useState([])

  useEffect(() => {
    const getIndex = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/user`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      console.log(response.data.records[0].fields.name);
      setName(response.data.records[0].fields.name)
    }
    getIndex()
  }, [])

  return (
    <div className='welcome-get'>
      <Welcome
        name={name}
      />
    </div>
  )
}

export default WelcomeGet