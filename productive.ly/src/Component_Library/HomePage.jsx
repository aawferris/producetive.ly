import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Advice from "./Advice";
import BreakButton from "./BreakButton";
import Clock from "./Clock";
import Countdown from "./Countdown";
import Notes from "./Notes";
import NotesPost from "./NotesPost";
import Tasks from "./Tasks";
import WelcomePost from "./WelcomePost";
import Welcome from "./Welcome";

function HomePage(props) {  
  // BACKGROUND GET
  const [image, setImage] = useState("");
  
  useEffect(() => {
    const getApi = async () => {
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=nature&image_type=photo&orientation=horizontal`;
      const response = await axios.get(url);
      const imageArr = response.data.hits;
      const largeImage =
        imageArr[Math.floor(Math.random() * imageArr.length)].largeImageURL;
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

  // SHOW MORE STYLE
  const [showMoreTasks, setShowMoreTasks] = useState(false);
  const [showMoreNotes, setShowMoreNotes] = useState(false);
  let showStyle = {
    color: "#ffffffbb",
    background: "transparent",
    border: "none",
    fontSize: "18px",
    textShadow: "2px 2px 4px black",
  };

  //WEATHER GET (in Progress)
  // const [weather, setWeather] = useState("");
  // useEffect(() => {
  //   const getIndex = async () => {
  //     const weatherURL = `https://api.openweathermap.org/data/2.5/weather?zip=29582,us&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`;
  //     const response = await axios.get(weatherURL);
  //     // console.log(response.data);
  //     setWeather(response);
  //   };
  //   getIndex();
  // }, []);

  return (
      <div className="app">
        <div className="layout" style={backgroundStyle}>
        <header id="hp-header">
        </header>
          <nav>
          </nav>
          <article>
            <div className="main-welcome">
            <Welcome name={name}/><WelcomePost />
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
            <button
              style={showStyle}
              id="button-show"
              onClick={() => setShowMoreNotes(!showMoreNotes)}
            >
              {showMoreNotes ? "Notes" : "Notes"}
            </button>
            {showMoreNotes ? (
              <div className="show-more" id="show-task">
                <Notes note={note} subject={subject} />
                <NotesPost />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div id="tasks">
            <button
              style={showStyle}
              id="button-show"
              onClick={() => setShowMoreTasks(!showMoreTasks)}
            >
              {showMoreTasks ? "Tasks" : "Tasks"}
            </button>
            {showMoreTasks ? (
              <div className="show-more" id="show-task">
                <Tasks />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <footer id='hp-footer'>
            <div className="main-advice">
              <Advice />
            </div>
          </footer>
        </div>
    </div>
  );
}

export default HomePage;