import React, { useState } from "react";
import RadioBtn from "./RadioBtn";
import { baseDeck, expeditionDeck } from "../const/decks";
import classes from "./AeonsEndDeckPage.module.css";
import AECard from "./AECard";

function AeonsEndDeckPage() {
  const [players, setPlayers] = useState<number>(2);
  const [battleNumber, setBattleNumber] = useState<number>(1);
  const [tempDeck, setTempDeck] = useState(baseDeck.playerCount[2]);
  const [battleDeck, setBattleDeck] = useState<string[]>([]);
  const [renderCard, setRenderCard] = useState<boolean>(false);
  const [cardIdx, setCardIdx] = useState<number>(0);

  function onPlayerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newPlayers = parseInt(e.target.value);
    const newBattleNumber = battleNumber;
    setPlayers(newPlayers);
    deckChange(newPlayers, newBattleNumber);
  }

  function onBattleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newBattle = parseInt(e.target.value);
    setBattleNumber(newBattle);
    deckChange(players, newBattle);
  }

  function deckChange(players: number, battle: number) {
    let newDeck;
    if (battle === 1) {
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
    setCardIdx(0);
    setRenderCard(true);
  }

  function handleCardChange(direction: number) {
    const newIdx = cardIdx + direction;
    setCardIdx(newIdx);
  }

  return (
    <div>
      <RadioBtn
        options={[1, 2, 3, 4]}
        defaultValue={2}
        btnState={players}
        label="Player Count"
        handler={onPlayerChange}
      ></RadioBtn>
      <RadioBtn
        options={[1, 2, 3, 4]}
        defaultValue={1}
        btnState={battleNumber}
        label="Expedition Battle Number"
        handler={onBattleChange}
      ></RadioBtn>
      <button className={classes.btn} onClick={startButtonHandler}>
        {renderCard ? "Generate new deck" : "Create a deck"}
      </button>
      {renderCard && (
        <AECard
          battleDeck={battleDeck}
          cardIdx={cardIdx}
          handleCardChange={handleCardChange}
        ></AECard>
      )}
    </div>
  );
}

export default AeonsEndDeckPage;
