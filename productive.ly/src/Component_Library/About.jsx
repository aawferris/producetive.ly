import React from 'react'
import '../Style_Library/AboutStyle.css'

function About() {
  return (
    <div id='layout'>
      <header id='as-header'>
        <h1>About Us</h1>
        <h2>Our Story</h2>
      </header>
      <nav></nav>
      <div id="photo">
        <img src='./twyla.jpg' alt='business-y twyla' height='400px' width='auto'/>
      </div>
      <article id='as-article'>
        <p className="p-art"> 
          Born inside of a volcanic eruption during an earthquake in Papua New Guinea,
          our founder, Twyla Thwarp, was not only struck with flying rock, but also an idea.
          This idea would become the mega conglomerate everyone knows and loves today: <strong>Starcrutch</strong>;  
          The revolutionary first organization to combine rehabilitation therapy and coffee.  Forty-six and a half years
          and twelve step-sibilings later, Twyla and Starcrutch offer the world's foremost proudctivity 
          Chrome browser extension: <strong>Productive.ly</strong>.
        </p>
        <p className="p-art">With our proprietary blend of codes and routes,
        we are able to offer a high-quality, hand-crafted app made from the finest
          naturally sourced React and JavaScript ingredients from artisnal hands.</p>
        <p className="p-art">
          During the second age of the Thundegren blockade, the Schwartzenälfen were nigh to take the Ford of Nederkroos. 
          It was then that a yound shieldmaiden, named Twyla entered the scene for the first time to smite all of the Schwartzenälfen with her magicks.
          Unfortunately, whilst running towards her rival, König Feuraschen, she tripped and broke her leg.  It was then that she first wielded crutches. 
           <strong> It would not be the last.</strong>  
        </p>
        <p className="p-art">
          During her recuperation, she suddenly awoke one morning ere the breaking of the dawn to find herself with an unquenchable thirst.  The thirts, driving her towards
           the point of maddness saw her rise from her bedding, crustch under arm and forge a path towards the cafeteria. While in the cafetaria, she happened upon a young man
           adorned in a light linen gown named Gary.  Gary introduced Twyla to tha ambrosia of the gods; coffee.  This fateful happenstance would render the the 
           rehabilitation world in twain.  Twyla began working on a secret fomrula to combine rehabilitation therapy and her new found love for the sultry liquid.
           In 1992, nearly fifty years later, her cleft passion would result in the founding of Starcrutch and would teach patients how to drink cofffee AS THEY WERE BEING 
           REHABILITATED.
        </p>
      </article>
      <section>
      </section>
      <footer></footer>
    </div>
  )
}

export default About