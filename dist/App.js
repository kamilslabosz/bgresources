var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import RadioBtn from "./components/RadioBtn";
import { baseDeck, expeditionDeck } from "./const/decks";
function App() {
    var _a = useState(2), players = _a[0], setPlayers = _a[1];
    var _b = useState("battle1"), battleNumber = _b[0], setBattleNumber = _b[1];
    var _c = useState(baseDeck.playerCount[2]), tempDeck = _c[0], setTempDeck = _c[1];
    var _d = useState([]), battleDeck = _d[0], setBattleDeck = _d[1];
    var _e = useState(false), renderCard = _e[0], setRenderCard = _e[1];
    var _f = useState(0), cardIdx = _f[0], setCardIdx = _f[1];
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
        }
        else {
            var battleDeck_1 = expeditionDeck[battle];
            newDeck =
                battleDeck_1.playerCount[players];
        }
        setTempDeck(newDeck);
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    function startButtonHandler() {
        var newDeck = [];
        for (var tier in tempDeck) {
            var temp = shuffleArray(tempDeck[tier]);
            newDeck = __spreadArray(__spreadArray([], newDeck, true), temp, true);
        }
        setBattleDeck(newDeck);
        setCardIdx(0);
        setRenderCard(true);
    }
    function handleCardChange(direction) {
        var newIdx = cardIdx + direction;
        setCardIdx(newIdx);
    }
    return (_jsxs("div", { className: "App", children: [_jsx(RadioBtn, { options: [1, 2, 3, 4], defaultValue: 2, btnState: players, label: "Player Count", handler: onPlayerChange }), _jsx(RadioBtn, { options: ["battle1", "battle2", "battle3", "battle4"], defaultValue: "battle1", btnState: battleNumber, label: "Expedition Battle Number", handler: onBattleChange }), _jsx("button", { onClick: startButtonHandler, children: renderCard ? "Generate new deck" : "Create a deck" }), renderCard && (_jsxs("div", { children: [_jsx("h1", { children: battleDeck[cardIdx] }), cardIdx < battleDeck.length ? (_jsx("button", { onClick: function () { return handleCardChange(1); }, children: "Next" })) : (_jsx("h1", { children: "no more cards" })), _jsx("hr", {}), cardIdx !== 0 && (_jsx("button", { onClick: function () { return handleCardChange(-1); }, children: "Previous" }))] }))] }));
}
export default App;
