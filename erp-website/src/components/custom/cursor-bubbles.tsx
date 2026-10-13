'use client';

import { useEffect, useRef } from 'react';

export function CursorBubbles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const mediaQuery = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    );
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const maxBubbles = 20;
    let lastCreatedAt = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastCreatedAt < 50 || !container) return;
      lastCreatedAt = now;

      while (container.childElementCount >= maxBubbles) {
        container.firstElementChild?.remove();
      }

      const bubbleEl = document.createElement('div');
      bubbleEl.className = 'cursor-bubble';
      bubbleEl.dataset.bubbleId = String(idRef.current++);
      bubbleEl.style.left = `${e.clientX}px`;
      bubbleEl.style.top = `${e.clientY}px`;
      container.appendChild(bubbleEl);

      const timer = setTimeout(() => {
        bubbleEl.remove();
        timers.delete(timer);
      }, 1000);
      timers.add(timer);
    };

    const handlePreferenceChange = () => {
      if (!mediaQuery.matches) {
        container?.replaceChildren();
      }
    };

    handlePreferenceChange();
    mediaQuery.addEventListener('change', handlePreferenceChange);
    if (!mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener('change', handlePreferenceChange);
      };
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handlePreferenceChange);
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
      container?.replaceChildren();
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
