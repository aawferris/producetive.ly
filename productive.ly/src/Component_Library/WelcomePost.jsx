import React, { useState } from 'react';
import axios from 'axios'

function WelcomePost() {
  const [name, setName] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      name,
    }
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/user`
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        }
      }
    )
  }

  // setInterval((handleRefresh) => {
  //   function handleRefresh() {
  //     return window.location.href
  //   }
  //   handleRefresh()
  // }, 1000);onSubmit={setInterval}

  return (
    <div className='welcome-container'>
      <form onSubmit={handleSubmit} >
        <label htmlFor='name'>Hello, </label>
        <input
          className="name-input"
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  )
}

export default WelcomePost