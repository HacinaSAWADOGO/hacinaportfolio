import { useState, useEffect, useRef } from "react";

export default function TypewriterText({
  words = [],
  speed = 70,
  pauseTime = 2500,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !words || words.length === 0) return;

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
          setCurrentSpeed(speed + Math.random() * 20);
        }
      } else {
        // Deleting backward
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setCurrentSpeed(350);
        } else {
          setCurrentSpeed(32);
        }
      }
    }, currentSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, currentSpeed, inView, words, speed, pauseTime]);

  return (
    <span ref={containerRef} className="typewriter-text-wrapper">
      <span className="typewriter-text">{displayText || "\u00A0"}</span>
      <span className="typewriter-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
