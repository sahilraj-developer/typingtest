import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { Word } from "./word";
import { StatsDisplay } from "./stats";
import { useTypingTest } from "../hooks/useTypingTest";
import { generateRandomText } from "../utils/textGenerator";
import { useState } from "react";
export default function TypingTest() {
    const [text, setText] = useState(generateRandomText("sentences", 3));
    const { timeLeft, isActive, currentIndex, inputValue, stats, handleInput, resetTest } = useTypingTest(text);
    const words = text.split("").map((char, index) => ({
        text: char,
        active: index === currentIndex,
        correct: index < currentIndex,
        incorrect: false,
    }));
    const handleReset = () => {
        setText(generateRandomText("sentences", 3));
        resetTest();
    };
    return (_jsx(Container, { className: "py-5", children: _jsx(Row, { className: "justify-content-center", children: _jsxs(Col, { lg: 8, children: [_jsxs("div", { className: "text-center mb-5", children: [_jsxs("div", { className: "d-inline-flex align-items-center", style: { whiteSpace: 'nowrap' }, children: [_jsx("img", { width: "64", height: "64", src: "https://img.icons8.com/dusk/64/pen.png", alt: "pen", className: "me-3" }), _jsx("h1", { className: "display-4 fw-bold text-primary", children: "Typing Speed Test" })] }), _jsx("p", { className: "text-muted lead", children: "Improve your typing skills with speed and accuracy" })] }), _jsxs("div", { className: "text-center mb-4", children: [_jsx(Button, { variant: "outline-dark", className: "mx-2", onClick: () => setText(generateRandomText("sentences", 3)), children: "Short Text" }), _jsx(Button, { variant: "outline-dark", className: "mx-2", onClick: () => setText(generateRandomText("paragraphs", 1)), children: "Long Text" })] }), _jsx(StatsDisplay, { stats: stats, timeLeft: timeLeft }), _jsx(Card, { className: "shadow-lg border-0 rounded-3", children: _jsxs(Card.Body, { className: "p-4", children: [_jsx("div", { className: "typing-text bg-light p-3 rounded mb-4 text-center", style: { minHeight: "100px" }, children: words.map((word, index) => (_jsx(Word, { ...word }, index))) }), _jsx(Form.Control, { type: "text", value: inputValue, onChange: (e) => handleInput(e.target.value), disabled: timeLeft === 0, placeholder: timeLeft === 0 ? "Test completed" : "Start typing...", className: "font-monospace fs-5 text-center shadow-sm" })] }) }), _jsx("div", { className: "text-center mt-4", children: _jsx(Button, { onClick: handleReset, variant: timeLeft === 0 ? "success" : "outline-success", size: "lg", children: timeLeft === 0 ? "Try Again" : "Reset" }) })] }) }) }));
}
