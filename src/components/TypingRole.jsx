import { useState, useEffect } from "react";

const ROLES = [
  "Formatrice en IA",
  "Ingénieure en informatique",
  "Créatrice de vidéos IA",
  "Développeuse web & portfolios",
];

export default function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentFullText = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setText(currentFullText.slice(0, text.length + 1));
        if (text.length + 1 === currentFullText.length) {
          // Pause when complete word is reached
          setSpeed(2000);
          setIsDeleting(true);
        } else {
          setSpeed(70 + Math.random() * 40);
        }
      } else {
        // Deleting backward
        setText(currentFullText.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setSpeed(450);
        } else {
          setSpeed(35);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, speed]);

  return (
    <span className="typing-role-wrapper">
      <span className="typing-role-text">{text}</span>
      <span className="typing-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
