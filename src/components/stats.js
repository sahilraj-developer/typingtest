import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "react-bootstrap";
export function StatsDisplay({ stats, timeLeft }) {
    // Format time as MM:SS
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    return (_jsxs("div", { className: "row g-4 mb-4", children: [_jsx("div", { className: "col-md-4", children: _jsx(Card, { children: _jsxs(Card.Body, { className: "text-center", children: [_jsx("div", { className: "display-6", title: "Words Per Minute", children: stats.wpm }), _jsx("div", { className: "text-muted", children: "WPM" })] }) }) }), _jsx("div", { className: "col-md-4", children: _jsx(Card, { children: _jsxs(Card.Body, { className: "text-center", children: [_jsxs("div", { className: "display-6", title: "Typing Accuracy", children: [stats.accuracy, "%"] }), _jsx("div", { className: "text-muted", children: "Accuracy" })] }) }) }), _jsx("div", { className: "col-md-4", children: _jsx(Card, { children: _jsxs(Card.Body, { className: "text-center", children: [_jsx("div", { className: "display-6", title: "Time Remaining", children: formattedTime }), _jsx("div", { className: "text-muted", children: "Time Left" })] }) }) })] }));
}
