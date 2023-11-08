import React, { useState } from "react";
import "./App.css";
import RadioBtn from "./components/RadioBtn";
import { baseDeck, expeditionDeck } from "./const/decks";

function App() {
  const [players, setPlayers] = useState(1);
  const [battleNumber, setBattleNumber] = useState("battle1");
  const [tempDeck, setTempDeck] = useState(baseDeck.playerCount[2]);
  const [battleDeck, setBattleDeck] = useState<string[]>([]);
  const [renderCard, setRenderCard] = useState<boolean>(false);
  const [cardIdx, setCardIdx] = useState<number>(0);

  function onPlayerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newPlayers = parseInt(e.target.value);
    setPlayers(newPlayers);
    deckChange(newPlayers, battleNumber);
  }

  function onBattleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newBattle = e.target.value;
    setBattleNumber(newBattle);
    deckChange(players, newBattle);
  }

  function deckChange(players: number, battle: string) {
    let newDeck;
    if (battle === "battle1") {
      newDeck =
        baseDeck.playerCount[players as keyof typeof baseDeck.playerCount];
    } else {
      const battleDeck = expeditionDeck[battle as keyof typeof expeditionDeck];
      newDeck =
        battleDeck.playerCount[players as keyof typeof battleDeck.playerCount];
    }
    setTempDeck(newDeck);
  }

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function startButtonHandler() {
    let newDeck: string[] = [];
    for (const tier in tempDeck) {
      const temp = shuffleArray(tempDeck[tier as keyof typeof tempDeck]);
      newDeck = [...newDeck, ...temp];
    }
    setBattleDeck(newDeck);
    setRenderCard(true)
  }

  return (
    <div className="App">
      <RadioBtn
        options={[1, 2, 3, 4]}
        defaultValue={2}
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
      <button onClick={startButtonHandler}>{renderCard? "Generate new deck" : "Create a deck"}</button>
      {renderCard && <h1>{battleDeck[cardIdx]}</h1>}
    </div>
  );
}

export default App;
