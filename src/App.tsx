import React, { useState } from "react";
import "./App.css";
import RadioBtn from "./components/RadioBtn";

function App() {
  const [players, setPlayers] = useState(2);
  const [battleNumber, setBattleNumber] = useState(1);

  function onPlayerChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayers(parseInt(e.target.value));
  }

  function onBattleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBattleNumber(parseInt(e.target.value));
  }

  return (
    <div className="App">
      <RadioBtn
        options={[1, 2, 3, 4]}
        defaultValue={2}
        currentValue={players}
        label="Player Count"
        handler={onPlayerChange}
      ></RadioBtn>
      <RadioBtn
        options={[1, 2, 3, 4]}
        defaultValue={1}
        currentValue={battleNumber}
        label="Battle Number"
        handler={onBattleChange}
      ></RadioBtn>
    </div>
  );
}

export default App;
