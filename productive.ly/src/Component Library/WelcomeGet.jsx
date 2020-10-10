import React, { useEffect, useState } from 'react'
import axios from 'axios'
const base = 'appcOGu210QwlpPrS'
const key = 'key2RkJg1LGnTwi0H'


function WelcomeGet() {
  const [name, setName] = useState([])

  useEffect(() => {
    const getIndex = async () => {
      const airtableURL = `https://api.airtable.com/v0/${base}/user`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${key}`
        }
      })
      console.log(response.data.records[0].fields.name);
      setName(response.data.records[0].fields.name)
    }
    getIndex()
  }, [])

  return (
    <div className='welcome-get'>
      <p>Get Name: {setName.name}</p>
    </div>
  )
}

export default WelcomeGet