import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classes from './RadioBtn.module.css';
function RadioBtn(props) {
    return (_jsxs(_Fragment, { children: [_jsx("header", { className: classes.label, children: props.label }), _jsx("div", { onChange: props.handler, children: props.options.map(function (option) {
                    return (_jsxs("label", { className: classes.container, children: [option, _jsx("input", { defaultChecked: option === props.defaultValue ? true : false, type: "radio", value: option, name: props.label }, option), _jsx("span", { className: classes.checkmark })] }));
                }) })] }));
}
export default RadioBtn;
