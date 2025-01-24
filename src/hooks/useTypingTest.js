import { useState, useEffect, useCallback } from "react";
const TIMER_DURATION = 60; // 60 seconds typing test
export function useTypingTest(text) {
    const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [stats, setStats] = useState({
        wpm: 0,
        accuracy: 0,
        correctChars: 0,
        incorrectChars: 0,
        totalChars: 0,
    });
    // Calculate WPM and accuracy
    const calculateStats = useCallback(() => {
        // Calculate time spent typing (in minutes)
        const timeSpent = (TIMER_DURATION - timeLeft) / 60;
        // Only calculate WPM if some time has passed and there are correct characters
        if (timeSpent > 0 && stats.correctChars > 0) {
            // Calculate WPM: (correct characters / 5) / minutes
            // Using 5 as average word length
            const wordsTyped = stats.correctChars / 5;
            const wpm = Math.round(wordsTyped / timeSpent);
            // Calculate accuracy
            const accuracy = Math.round((stats.correctChars / stats.totalChars) * 100);
            setStats((prev) => ({
                ...prev,
                wpm,
                accuracy: isNaN(accuracy) ? 0 : accuracy,
            }));
        }
    }, [timeLeft, stats.correctChars, stats.totalChars]);
    // Timer effect
    useEffect(() => {
        let interval;
        if (timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
                calculateStats();
            }, 1000);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [timeLeft, calculateStats]);
    // Reset when text changes
    useEffect(() => {
        setCurrentIndex(0);
        setInputValue("");
    }, [text]);
    const handleInput = (value) => {
        if (timeLeft > 0) {
            const currentChar = text[currentIndex];
            const inputChar = value[value.length - 1];
            // Only process input if there's a change
            if (value.length !== inputValue.length) {
                if (inputChar === currentChar) {
                    // Correct character
                    setStats((prev) => ({
                        ...prev,
                        correctChars: prev.correctChars + 1,
                        totalChars: prev.totalChars + 1,
                    }));
                    setCurrentIndex((prev) => prev + 1);
                }
                else if (value.length > inputValue.length) {
                    // Incorrect character
                    setStats((prev) => ({
                        ...prev,
                        incorrectChars: prev.incorrectChars + 1,
                        totalChars: prev.totalChars + 1,
                    }));
                }
                // Calculate stats immediately after updating characters
                calculateStats();
            }
            setInputValue(value);
        }
    };
    const resetTest = () => {
        setTimeLeft(TIMER_DURATION);
        setCurrentIndex(0);
        setInputValue("");
        setStats({
            wpm: 0,
            accuracy: 0,
            correctChars: 0,
            incorrectChars: 0,
            totalChars: 0,
        });
    };
    return {
        timeLeft,
        currentIndex,
        inputValue,
        stats,
        handleInput,
        resetTest,
    };
}
