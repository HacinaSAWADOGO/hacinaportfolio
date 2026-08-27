import React from 'react';

/**
 * GlowEffect Component
 * Renders a glowing background sphere with adjustable size, blur, and positioning
 */
export default function GlowEffect({
  color = 'rgba(255, 42, 133, 0.15)',
  size = '300px',
  top,
  left,
  right,
  bottom,
  blur = '120px',
  className = '',
  style = {}
}) {
  const customStyle = {
    width: size,
    height: size,
    backgroundColor: color,
    filter: `blur(${blur})`,
    top: top !== undefined ? top : 'auto',
    left: left !== undefined ? left : 'auto',
    right: right !== undefined ? right : 'auto',
    bottom: bottom !== undefined ? bottom : 'auto',
    ...style
  };

  return (
    <div 
      className={`glow-sphere ${className}`} 
      style={customStyle} 
    />
  );
}
