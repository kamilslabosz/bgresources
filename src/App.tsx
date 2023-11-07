import React, { useState } from "react";
import "./App.css";
import RadioBtn from "./components/RadioBtn";
import { baseDeck, expeditionDeck } from "./const/decks";

function App() {
  const [players, setPlayers] = useState(1);
  const [battleNumber, setBattleNumber] = useState("tier1");
  const [currentDeck, setCurrentDeck] = useState(baseDeck.playerCount[1]);

  function onPlayerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newPlayers = parseInt(e.target.value);
    setPlayers(newPlayers);
    deckChange(newPlayers, battleNumber)   
  }

  function onBattleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newBattle = e.target.value
    setBattleNumber(newBattle);
    deckChange(players, newBattle)   
  }

  function deckChange(players: number, battle: string) {
    let newDeck
    if (battle === "battle1") {
      newDeck =
        baseDeck.playerCount[players as keyof typeof baseDeck.playerCount];
      setCurrentDeck(newDeck);
    } else {
      const battleDeck =
        expeditionDeck[battle as keyof typeof expeditionDeck];
      newDeck =
        battleDeck.playerCount[
          players as keyof typeof battleDeck.playerCount
        ];
      setCurrentDeck(newDeck);
    }
  }

  return (
    <div className="App">
      <RadioBtn
        options={[1, 2, 3, 4]}
        defaultValue={1}
        btnState={players}
        label="Player Count"
        handler={onPlayerChange}
      ></RadioBtn>
      <RadioBtn
        options={["battle1", "battle2", "battle3", "battle4"]}
        defaultValue={"battle1"}
        btnState={battleNumber}
        label="Expedition Battle Number"
        handler={onBattleChange}
      ></RadioBtn>
    </div>
  );
}

export default App;
