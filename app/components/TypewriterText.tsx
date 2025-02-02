import React, { useEffect, useState } from 'react';

export function TypewriterText({
  text,
  onComplete,
}: {
  text: string;
  onComplete?: () => void;
}) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <span className="inline-block max-w-[inherit] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
      <span className="inline-block whitespace-normal break-normal">
        {displayText}
      </span>
    </span>
  );
}
