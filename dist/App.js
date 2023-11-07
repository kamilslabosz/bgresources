import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import RadioBtn from "./components/RadioBtn";
function App() {
    var _a = useState(2), players = _a[0], setPlayers = _a[1];
    var _b = useState(1), battleNumber = _b[0], setBattleNumber = _b[1];
    function onPlayerChange(e) {
        setPlayers(parseInt(e.target.value));
    }
    function onBattleChange(e) {
        setBattleNumber(parseInt(e.target.value));
    }
    return (_jsxs("div", { className: "App", children: [_jsx(RadioBtn, { options: [1, 2, 3, 4], defaultValue: 2, currentValue: players, label: "Player Count", handler: onPlayerChange }), _jsx(RadioBtn, { options: [1, 2, 3, 4], defaultValue: 1, currentValue: battleNumber, label: "Battle Number", handler: onBattleChange })] }));
}
export default App;
