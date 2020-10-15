import React from 'react'
import '../Style_Library/AboutStyle.css'

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Our Story</h2>
      <p>
        Born inside of a volcanic eruption during an earthquake in Papua New Guinea,
         our founder, Twyla Thwarp, was not only struck with flying rock, but also an idea.
        This idea would become the mega conglomerate everyone knows and loves today: <strong>Starcrutch</strong>;  
        The revolutionary first organization to combine rehabilitation therapy and coffee.  Forty-six and a half years
        and twelve step-sibilings later, Twyla and Starcrutch offer the world's foremost proudctivity 
        Chrome browser extension: <strong>Productive.ly</strong>
      </p>
      <p>With our proprietary blend of codes and routes,
      we are able to offer a high-quality, hand-crafted app made from the finest
        naturally sourced React and JavaScript ingredients from artisnal hands.</p>
      <img src='./twyla.jpg' alt='business-y twyla' height='400px' width='auto'/>
    </div>
  )
}

export default About