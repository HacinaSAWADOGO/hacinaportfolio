import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
      active: false,
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("resize", handleResize);
    const parent = canvas.parentElement;
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    const colors = [
      "rgba(245, 43, 138, ",   // vibrant pink
      "rgba(255, 63, 154, ",   // bright rose
      "rgba(255, 120, 185, ",  // medium pink
      "rgba(255, 185, 215, ",  // soft pastel
      "rgba(255, 215, 0, ",    // warm gold accent
    ];

    const particleCount = Math.min(Math.floor((width * height) / 12000), 65);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size: Math.random() * 5 + 2,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        sinOffset: Math.random() * Math.PI * 2,
        sinSpeed: 0.03 + Math.random() * 0.03,
        isStar: Math.random() > 0.65,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.04,
      });
    }

    const drawStar = (cx, cy, spikes, outerRadius, innerRadius, rot) => {
      let rotOffset = (Math.PI / 2) * 3 + rot;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rotOffset) * outerRadius;
        y = cy + Math.sin(rotOffset) * outerRadius;
        ctx.lineTo(x, y);
        rotOffset += step;

        x = cx + Math.cos(rotOffset) * innerRadius;
        y = cy + Math.sin(rotOffset) * innerRadius;
        ctx.lineTo(x, y);
        rotOffset += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    };

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    let step = 0;
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      step += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow (LERP)
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      // Draw dynamic mouse glow orb
      if (mouse.active) {
        const glowRadius = 220;
        const radialGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        );
        radialGradient.addColorStop(0, "rgba(255, 63, 154, 0.18)");
        radialGradient.addColorStop(0.5, "rgba(245, 43, 138, 0.06)");
        radialGradient.addColorStop(1, "rgba(245, 43, 138, 0)");
        ctx.fillStyle = radialGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Active fluid wave floating
        p.x += p.speedX + Math.sin(step * p.sinSpeed + p.sinOffset) * 0.8;
        p.y += p.speedY + Math.cos(step * p.sinSpeed + p.sinOffset) * 0.8;
        p.rotation += p.rotSpeed;

        // Wrap around boundaries
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y < -30) p.y = height + 30;
        if (p.y > height + 30) p.y = -30;

        // Interactive mouse repulsion & orbital pull
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            // Repulsion + slight tangential swirl
            p.x -= Math.cos(angle) * force * 5 - Math.sin(angle) * force * 2;
            p.y -= Math.sin(angle) * force * 5 + Math.cos(angle) * force * 2;
          }
        }

        // Particle rendering (Star or Orb)
        const currentAlpha = Math.min(
          1,
          Math.max(0.15, p.alpha + Math.sin(step * 0.04 + p.sinOffset) * 0.2)
        );

        ctx.fillStyle = `${p.colorBase}${currentAlpha})`;
        ctx.shadowColor = "rgba(245, 43, 138, 0.6)";
        ctx.shadowBlur = 12;

        if (p.isStar) {
          drawStar(p.x, p.y, 4, p.size * 1.5, p.size * 0.6, p.rotation);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;

        // Dynamic Constellation lines between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist2 / 100) * 0.22;
            ctx.strokeStyle = `rgba(245, 43, 138, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-interactive-canvas"
      aria-hidden="true"
    />
  );
}
