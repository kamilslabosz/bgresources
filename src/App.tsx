import React, { useState } from "react";
import "./App.css";

function App() {
  const [players, setPlayers] = useState(2);

function onPlayerChange(e:React.ChangeEvent<HTMLInputElement>){
  console.log(e.target.value);
  setPlayers(parseInt(e.target.value))
}

  return (
    <div className="App">
      <header className="App-header">Player Count</header>
      <div onChange={onPlayerChange}>
        <input
          type="radio"
          value={1}
          name="players"
          checked={players === 1}
        ></input>
        <input
          type="radio"
          value={2}
          name="players"
          checked={players === 2}
        ></input>
        <input
          type="radio"
          value={3}
          name="players"
          checked={players === 3}
        ></input>
        <input
          type="radio"
          value={4}
          name="players"
          checked={players === 4}
        ></input>
      </div>
    </div>
  );
}

export default App;
