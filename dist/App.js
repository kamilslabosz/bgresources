import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import RadioBtn from "./components/RadioBtn";
import { baseDeck, expeditionDeck } from "./const/decks";
function App() {
    var _a = useState(1), players = _a[0], setPlayers = _a[1];
    var _b = useState("tier1"), battleNumber = _b[0], setBattleNumber = _b[1];
    var _c = useState(baseDeck.playerCount[1]), currentDeck = _c[0], setCurrentDeck = _c[1];
    function onPlayerChange(e) {
        var newPlayers = parseInt(e.target.value);
        setPlayers(newPlayers);
        deckChange(newPlayers, battleNumber);
    }
    function onBattleChange(e) {
        var newBattle = e.target.value;
        setBattleNumber(newBattle);
        deckChange(players, newBattle);
    }
    function deckChange(players, battle) {
        var newDeck;
        if (battle === "battle1") {
            newDeck =
                baseDeck.playerCount[players];
            setCurrentDeck(newDeck);
        }
        else {
            var battleDeck = expeditionDeck[battle];
            newDeck =
                battleDeck.playerCount[players];
            setCurrentDeck(newDeck);
        }
    }
    return (_jsxs("div", { className: "App", children: [_jsx(RadioBtn, { options: [1, 2, 3, 4], defaultValue: 1, btnState: players, label: "Player Count", handler: onPlayerChange }), _jsx(RadioBtn, { options: ["battle1", "battle2", "battle3", "battle4"], defaultValue: "battle1", btnState: battleNumber, label: "Expedition Battle Number", handler: onBattleChange })] }));
}
export default App;
