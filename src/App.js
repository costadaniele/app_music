import {useState, useEffect} from 'react';
import Player from './components/Player';


function App() {
  const [songs] = useState ([
    {
      title: "Dark Red",
      artist: "Steve Lacy",
      img_src: "./image/stevelacy-darkred.jpg",
      src: "./audio/stevelacy-darkred.mp3"
    },
      {
        title: "Wait a Minute!",
        artist: "Willow",
        img_src: "./image/willow-waitaminute.jpg",
        src:"./audio/waitaminute-willow.mp3"
      },
      {
        title: "Ombrim",
        artist: "ROSA NEON",
        img_src: "./image/ombrim-rosaneon.jpg",
        src:"./audio/ROSANEON-Ombrim.mp3"
      }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex }
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
