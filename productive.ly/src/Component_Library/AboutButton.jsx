import React from 'react';
import { Link } from 'react-router-dom'

function AboutButton(props) {
  return (
    <div>
      <Link to='/About'>
        <button>About</button>
      </Link>
    </div>
  );
}

export default AboutButton;