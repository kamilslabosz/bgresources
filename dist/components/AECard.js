import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from './AECard.module.css';
function AECard(props) {
    return (_jsxs("div", { children: [_jsx("h1", { className: classes.label, children: props.battleDeck[props.cardIdx] }), props.cardIdx < props.battleDeck.length ? (_jsx("button", { className: classes.bigBtn, onClick: function () { return props.handleCardChange(1); }, children: "Next" })) : (_jsx("h1", { className: classes.label, children: "End of deck!" })), props.cardIdx !== 0 && (_jsx("button", { className: classes.smallBtn, onClick: function () { return props.handleCardChange(-1); }, children: "Previous" }))] }));
}
export default AECard;
