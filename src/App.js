import "./styles/app.scss";

import { useState, useRef } from "react";
import chillHop from "./data";

import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  //States
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryVisibility, setlibraryVisibility] = useState(false);

  //Ref
  const audioRef = useRef(null);

  return (
    <div className="App">
      <Nav
        libraryVisibility={libraryVisibility}
        setlibraryVisibility={setlibraryVisibility}
      />
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryVisibility={libraryVisibility}
      />
    </div>
  );
}

export default App;
