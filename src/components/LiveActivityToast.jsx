import { useState, useEffect } from "react";

const ACTIVITIES = [
  { icon: "✨", title: "Nouvelle formation IA réservée", time: "Il y a 10 min", location: "Session 9h intensive" },
  { icon: "🎬", title: "Vidéo publicitaire IA finalisée", time: "Il y a 35 min", location: "Format viral 9:16" },
  { icon: "💻", title: "Application web responsive déployée", time: "Il y a 1h", location: "React & CSS moderne" },
  { icon: "🍉", title: "Projet 'Vidéos Fruits' en rendu", time: "Il y a 2h", location: "Motion & IA" },
  { icon: "👤", title: "Vidéo Avatar IA personnalisée", time: "Aujourd'hui", location: "Publicité de marque" },
];

export default function LiveActivityToast() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show after 3s on site
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3200);

    // Interval to cycle through activities
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % ACTIVITIES.length);
        setVisible(true);
      }, 800);
    }, 9500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const current = ACTIVITIES[currentIdx];

  return (
    <div className={`live-activity-toast ${visible ? "show" : ""}`}>
      <div className="activity-icon-glow">{current.icon}</div>
      <div className="activity-info">
        <strong className="activity-title">{current.title}</strong>
        <div className="activity-meta">
          <span>{current.location}</span>
          <span className="meta-dot">•</span>
          <span className="activity-time">{current.time}</span>
        </div>
      </div>
      <button
        type="button"
        className="activity-close"
        onClick={() => setDismissed(true)}
        aria-label="Fermer la notification"
      >
        ×
      </button>
    </div>
  );
}
