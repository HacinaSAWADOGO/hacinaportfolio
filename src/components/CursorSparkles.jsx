import { useEffect, useRef } from "react";

export default function CursorSparkles() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop devices with hover capability
    if (typeof window === "undefined" || window.matchMedia("(hover: none)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = [];
    const colors = ["#f52b8a", "#ff3f9a", "#ff9fcb", "#ffe1ed", "#ffffff", "#ffd700"];

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let lastEmit = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target;
      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".service-card") ||
        target.closest(".project-card") ||
        target.closest(".filter") ||
        target.closest(".tool-pill");

      if (trailRef.current) {
        if (isInteractive) {
          trailRef.current.classList.add("cursor-interactive");
        } else {
          trailRef.current.classList.remove("cursor-interactive");
        }
      }

      const now = performance.now();
      if (now - lastEmit > 22) {
        lastEmit = now;
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 8,
          y: mouseY + (Math.random() - 0.5) * 8,
          size: Math.random() * 4 + 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 1.6,
          vy: (Math.random() - 0.5) * 1.6 + 0.4,
          alpha: 1,
          decay: 0.025 + Math.random() * 0.02,
          isStar: Math.random() > 0.45,
        });
      }
    };

    const handleClick = (e) => {
      for (let i = 0; i < 16; i++) {
        const angle = (Math.PI * 2 * i) / 16 + Math.random() * 0.2;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 5 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: 0.02 + Math.random() * 0.015,
          isStar: Math.random() > 0.4,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      trailX += (mouseX - trailX) * 0.22;
      trailY += (mouseY - trailY) * 0.22;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;

        if (p.isStar) {
          ctx.font = `${Math.floor(p.size * 2.2)}px sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("✦", p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-canvas-sparkles" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
      <div ref={trailRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
