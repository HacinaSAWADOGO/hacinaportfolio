import { useState, useRef } from "react";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 14,
  scale = 1.035,
  onClick,
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    if (window.matchMedia("(hover: none)").matches) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) translateZ(14px) scale3d(${scale}, ${scale}, ${scale})`
    );

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlareStyle({
      opacity: 0.22,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 63, 154, 0.55), transparent 65%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)"
    );
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transformStyle,
        transition: transformStyle
          ? "transform 0.1s ease-out"
          : "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
      <div
        className="tilt-card-glare"
        style={{
          ...glareStyle,
          transition: "opacity 0.35s ease",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
