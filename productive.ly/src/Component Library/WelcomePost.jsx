import React, { useState } from 'react';
import axios from 'axios'

function WelcomePost(props) {
  const [name, setName] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      name,
    }
    const airtableURL = `https://api.airtable.com/v0/${base}/user`
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        }
      }
    )
  }


  return (
    <div className='welcome-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Post</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default WelcomePost