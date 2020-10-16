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
  // BACKGROUND IMAGE GET
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

  // RENDERS AND FORMATS BACKGROUND
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

  //WELCOME NAME GET
  const [name, setName] = useState('');
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    const getIndex = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/user?sort%5B0%5D%5Bfield%5D=created_at&
      sort%5B0%5D%5Bdirection%5D=desc`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setName(response.data.records[response.data.records.length -1].fields.name);
    };
    getIndex();
  }, [refresh]);

  // USER NOTES GET
  const [note, setNote] = useState([]);
  const [subject, setSubject] = useState([]);

  useEffect(() => {
    const getIndex = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/notes?sort%5B0%5D%5Bfield%5D=created_at&
      sort%5B0%5D%5Bdirection%5D=desc
      `;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setNote(response.data.records[response.data.records.length -1].fields.note);
      setSubject(response.data.records[response.data.records.length -1].fields.subject);
    };
    getIndex();
  }, [refresh]);

  // SHOW MORE BUTTONS & STYLE
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
      {/* This is where the background image appends */}
        <div className="layout" style={backgroundStyle}> 
        <header id="hp-header">
        </header>
          <nav>
          </nav>
          <article>
          <div className="main-welcome">
            {/* This set refresh handles auto-refreshing the page to make the data from airtable render */}
            <Welcome name={name} /><WelcomePost refresh={refresh} setRefresh={setRefresh}/>
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
          {/* This button renders the show function for notes*/}
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
                <NotesPost refresh={refresh} setRefresh={setRefresh}/>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        <div id="tasks">
          {/* This button renders the show function for tasks*/}
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