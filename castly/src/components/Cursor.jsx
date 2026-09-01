import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState(''); // 'play', 'view', 'open', ''

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setHoverState(target.getAttribute('data-cursor'));
      }
    };
    const handleMouseOut = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setHoverState('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      id="cursor-dot"
      className={hoverState ? `hover-${hoverState}` : ''}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <span id="cursor-text">{hoverState.toUpperCase()}</span>
    </div>
  );
}
