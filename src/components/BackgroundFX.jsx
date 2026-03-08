import { useEffect } from 'react';

export default function BackgroundFX() {
  useEffect(() => {
    const handleMove = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return (
    <div className="background-fx" aria-hidden="true">
      <div className="bg-blob blob-a" />
      <div className="bg-blob blob-b" />
      <div className="bg-blob blob-c" />
      <div className="grid-overlay" />
      <div className="pointer-glow" />
    </div>
  );
}
