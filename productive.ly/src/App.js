import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style Library/App.css";

import Advice from "./Component_Library/Advice";
import BreakButton from "./Component_Library/BreakButton";
import Countdown from "./Component_Library/Countdown";
import NotesGet from "./Component_Library/NotesGet";
import NotesPost from "./Component_Library/NotesPost";
import Tasks from "./Component_Library/Tasks";
import WelcomePost from "./Component_Library/WelcomePost";
import WelcomeGet from "./Component_Library/WelcomeGet";

function App() {
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
  };

  return (
    <div className="main-container" style={backgroundStyle}>
      <WelcomeGet />
      <WelcomePost />
      <Countdown />
      <Tasks />
      <NotesGet />
      <NotesPost />
      <BreakButton />
      <Advice />
    </div>
  );
}

export default App;
