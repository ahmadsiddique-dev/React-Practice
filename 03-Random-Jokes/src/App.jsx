import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState({punchline : "Click generate to get joke", setup : "Click to see joke."});

  const handleClick = async () => {
    try {
      const newjoke = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      console.log(newjoke);
      if (newjoke) {
        setJoke({...joke, punchline : newjoke.data.punchline, setup : newjoke.data.setup});
      }
    } catch (error) {
      setJoke("Sorry joke isn't availabel right now!");
    }
  };
  return (
    <>
      <center>
        <div className="flex flex-col gap-12">
          <h1 className="font-bold">Random Jokes Genreator</h1>
          <div>
            <button onClick={handleClick}>Generete joke!</button>
          </div>
          <div>
            <div className="flex justify-start items-center gap-2">
              <h3 className="font-semibold text-xl">Punchline :</h3>
              <div>
                <p>{joke.punchline}</p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-2">
              <h3 className="font-semibold text-xl">Setup :</h3>
              <div>
                <p>{joke.setup}</p>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
