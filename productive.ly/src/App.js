import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./Style Library/AppGrid.css";

import Advice from "./Component_Library/Advice";
import BreakButton from "./Component_Library/BreakButton";
import Clock from "./Component_Library/Clock";
import Countdown from "./Component_Library/Countdown";
import Home from "./Component_Library/Home";
import Notes from "./Component_Library/Notes";
import NotesPost from "./Component_Library/NotesPost";
import Tasks from "./Component_Library/Tasks";
import Weather from "./Component_Library/Weather";
import WelcomePost from "./Component_Library/WelcomePost";
import Welcome from "./Component_Library/Welcome";

function App() {
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

  // SHOW MORE
  const [showMoreTasks, setShowMoreTasks] = useState(false);
  const [showMoreNotes, setShowMoreNotes] = useState(false);

  // SHOW MORE STYLE
  let showStyle = {
    color: "#ffffffbb",
  };

  //WEATHER GET
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const getIndex = async () => {
      const weatherURL = `api.openweathermap.org/data/2.5/weather?zip=29582,us&appid=${process.env.REACT_APP_WEATHER_KEY}`;
      const response = await axios.get(weatherURL);
      console.log(response);
      setWeather(response);
    };
    getIndex();
  }, []);

  return (
    <div className="app">
      <div className="layout" style={backgroundStyle}>
        <header></header>
        <nav>
          <Route exact path="/">
            <Home />
          </Route>
          <Weather weather={weather} />
        </nav>
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
          <button
            style={showStyle}
            id="button-show"
            onClick={() => setShowMoreNotes(!showMoreNotes)}
          >
            {showMoreNotes ? "Notes" : "Notes"}
          </button>
          {showMoreNotes ? (
            <p className="show-more" id="show-task">
              <Notes note={note} subject={subject} />
              <NotesPost />
            </p>
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
            <p className="show-more" id="show-task">
              <Tasks />
            </p>
          ) : (
            <div></div>
          )}
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
