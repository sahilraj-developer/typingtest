import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { Word } from "./word";
import { StatsDisplay } from "./stats";
import { useTypingTest } from "../hooks/useTypingTest";
import { generateRandomText } from "../utils/textGenerator";
import { useState } from "react";

export default function TypingTest() {
  const [text, setText] = useState(generateRandomText("sentences", 3));
  const { timeLeft, currentIndex, inputValue, stats, handleInput, resetTest } = useTypingTest(text);

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

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center" style={{ whiteSpace: 'nowrap' }}>
              <img width="64" height="64" src="https://img.icons8.com/dusk/64/pen.png" alt="pen" className="me-3" />
              <h1 className="display-4 fw-bold text-primary">Typing Speed Test</h1>
            </div>
            <p className="text-muted lead">Improve your typing skills with speed and accuracy</p>
          </div>

          <div className="text-center mb-4">
            <Button variant="outline-dark" className="mx-2" onClick={() => setText(generateRandomText("sentences", 3))}>
              Short Text
            </Button>
            <Button variant="outline-dark" className="mx-2" onClick={() => setText(generateRandomText("paragraphs", 1))}>
              Long Text
            </Button>
          </div>

          <StatsDisplay stats={stats} timeLeft={timeLeft} />

          <Card className="shadow-lg border-0 rounded-3">
            <Card.Body className="p-4">
              <div className="typing-text bg-light p-3 rounded mb-4 text-center" style={{ minHeight: "100px" }}>
                {words.map((word, index) => (
                  <Word key={index} {...word} />
                ))}
              </div>

              <Form.Control
                type="text"
                value={inputValue}
                onChange={(e) => handleInput(e.target.value)}
                disabled={timeLeft === 0}
                placeholder={timeLeft === 0 ? "Test completed" : "Start typing..."}
                className="font-monospace fs-5 text-center shadow-sm"
              />
            </Card.Body>
          </Card>

          <div className="text-center mt-4">
            <Button onClick={handleReset} variant={timeLeft === 0 ? "success" : "outline-success"} size="lg">
              {timeLeft === 0 ? "Try Again" : "Reset"}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
