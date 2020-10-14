import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style Library/AppGrid.css";

import Advice from "./Component_Library/Advice";
import BreakButton from "./Component_Library/BreakButton";
import Clock from "./Component_Library/Clock";
import Countdown from "./Component_Library/Countdown";
import Notes from "./Component_Library/Notes";
import NotesPost from "./Component_Library/NotesPost";
import Tasks from "./Component_Library/Tasks";
import WelcomePost from "./Component_Library/WelcomePost";
import Welcome from "./Component_Library/Welcome";

function App() {
  // BACKGROUND GET
  const [image, setImage] = useState("");
  useEffect(() => {
    const getApi = async () => {
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=nature&image_type=photo&orientation=horizontal`;
      const response = await axios.get(url);
      console.log(response.data.hits);
      const imageArr = response.data.hits;
      const largeImage =
        imageArr[Math.floor(Math.random() * imageArr.length)].largeImageURL;
      console.log(largeImage);
      setImage(largeImage);
    };
    getApi();
  }, []);

  let backgroundStyle = {
    backgroundImage: `url(${image})`,
    position: `absolute`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    minHeight: `100vh`,
    minWidth: `100vw`,
    zIndex: `-1`,
  };

  //WELCOME GET
  const [name, setName] = useState([]);
  useEffect(() => {
    const getIndex = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/user`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data.records[0].fields.name);
      setName(response.data.records[0].fields.name);
    };
    getIndex();
  }, []);

  // NOTES GET
  const [note, setNote] = useState([]);
  const [subject, setSubject] = useState([]);

  useEffect(() => {
    const getIndex = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/notes`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setNote(response.data.records[0].fields.note);
      setSubject(response.data.records[0].fields.subject);
    };
    getIndex();
  }, []);

  return (
    <div className="app">
      <div className="layout" style={backgroundStyle}>
        <header>Productive.ly</header>
        {/* <nav>Nav</nav> */}
        <article>
          <div className="main-welcome">
            <Welcome name={name} />
            <WelcomePost />
          </div>
        </article>
        <section>
          <div className="clock">
            <Clock />
          </div>
          <div className="main-countdown">
            <Countdown />
          </div>
          <div className="main-break">
            <BreakButton />
          </div>
        </section>
        <div id="notes">
          <Notes note={note} subject={subject} />
          <NotesPost />
        </div>
        <div id="tasks">
          <Tasks />
        </div>
        <footer>
          <div className="main-advice">
            <Advice />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
