import { jsx as _jsx } from "react/jsx-runtime";
export function Word({ text, active, correct, incorrect }) {
    return (_jsx("span", { className: `char 
        ${active ? "active" : ""} 
        ${correct ? "correct" : ""} 
        ${incorrect ? "incorrect" : ""}
      `, "aria-label": `${text}${active ? " (current)" : ""}`, children: text }));
}
