import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setVisible(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      className={`scroll-progress-btn ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Retour en haut"
      title="Retour en haut"
    >
      <svg className="scroll-progress-svg" width="48" height="48" viewBox="0 0 48 48">
        <circle
          className="scroll-track"
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          strokeWidth="3.5"
        />
        <circle
          className="scroll-bar"
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          strokeWidth="3.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <span className="scroll-arrow" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}
