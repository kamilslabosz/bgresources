import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
function RadioBtn(props) {
    return (_jsxs(_Fragment, { children: [_jsx("header", { className: "App-header", children: props.label }), _jsx("div", { onChange: props.handler, children: props.options.map(function (option) {
                    return (_jsx("input", { defaultChecked: option === props.defaultValue ? true : false, type: "radio", value: option, name: props.label }, option));
                }) })] }));
}
export default RadioBtn;
