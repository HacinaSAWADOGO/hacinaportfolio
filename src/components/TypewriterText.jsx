import { useState, useEffect } from "react";

export default function TypewriterText({
  words = [],
  delay = 200,
  speed = 70,
  pauseTime = 2200,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted || !words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          // Pause when word complete
          setCurrentSpeed(pauseTime);
          setIsDeleting(true);
        } else {
          setCurrentSpeed(speed + Math.random() * 25);
        }
      } else {
        // Deleting backward
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setCurrentSpeed(400);
        } else {
          setCurrentSpeed(30);
        }
      }
    }, currentSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, currentSpeed, hasStarted, words, speed, pauseTime]);

  return (
    <span className="typewriter-text-wrapper">
      <span className="typewriter-text">{displayText}</span>
      <span className="typewriter-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
