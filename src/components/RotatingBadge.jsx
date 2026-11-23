export default function RotatingBadge() {
  return (
    <div className="rotating-stamp-badge" title="Hacina Sawadogo — Ingénieure & Formatrice IA">
      <svg viewBox="0 0 160 160" className="rotating-stamp-svg">
        <defs>
          <path
            id="stampCirclePath"
            d="M 80, 80 m -56, 0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0"
            fill="none"
          />
        </defs>
        <text className="stamp-text">
          <textPath href="#stampCirclePath" xlinkHref="#stampCirclePath" startOffset="0%">
            ✦ HACINA SAWADOGO ✦ INGENIEURE & IA DIGITAL
          </textPath>
        </text>
      </svg>
      <div className="stamp-center-icon">
        <span>✦</span>
      </div>
    </div>
  );
}
