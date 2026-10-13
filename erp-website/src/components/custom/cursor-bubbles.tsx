'use client';

import { useEffect, useRef } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
}

export function CursorBubbles() {
  const bubblesRef = useRef<Bubble[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Create a new bubble at cursor position
      const bubble: Bubble = {
        id: idRef.current++,
        x: e.clientX,
        y: e.clientY,
      };

      bubblesRef.current.push(bubble);

      if (containerRef.current) {
        // Create bubble element
        const bubbleEl = document.createElement('div');
        bubbleEl.className = 'cursor-bubble';
        bubbleEl.style.left = `${bubble.x}px`;
        bubbleEl.style.top = `${bubble.y}px`;
        containerRef.current.appendChild(bubbleEl);

        // Remove bubble after animation completes
        setTimeout(() => {
          bubbleEl.remove();
          bubblesRef.current = bubblesRef.current.filter(
            (b) => b.id !== bubble.id
          );
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 9999 }}
    />
  );
}
