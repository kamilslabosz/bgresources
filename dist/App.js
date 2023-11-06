import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
function App() {
    var _a = useState(2), players = _a[0], setPlayers = _a[1];
    function onPlayerChange(e) {
        console.log(e.target.value);
        setPlayers(parseInt(e.target.value));
    }
    return (_jsxs("div", { className: "App", children: [_jsx("header", { className: "App-header", children: "Player Count" }), _jsxs("div", { onChange: onPlayerChange, children: [_jsx("input", { type: "radio", value: 1, name: "players", checked: players === 1 }), _jsx("input", { type: "radio", value: 2, name: "players", checked: players === 2 }), _jsx("input", { type: "radio", value: 3, name: "players", checked: players === 3 }), _jsx("input", { type: "radio", value: 4, name: "players", checked: players === 4 })] })] }));
}
export default App;
