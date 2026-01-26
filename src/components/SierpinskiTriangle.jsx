  import React, { useRef, useEffect, useState } from 'react';

  export default function Sierpinski() {
    const canvasRef = useRef(null);
    const [depth, setDepth] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const drawSierpinski = (ctx, x, y, size, depth) => {
      if (depth === 0) {
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.moveTo(x, y + (size * Math.sqrt(3)) / 2);
        ctx.lineTo(x + size, y + (size * Math.sqrt(3)) / 2);
        ctx.lineTo(x + size / 2, y);
        ctx.closePath();
        ctx.fill();
      } else {
        const newSize = size / 2;
        drawSierpinski(ctx, x + newSize / 2, y, newSize, depth - 1);
        drawSierpinski(ctx, x, y + (newSize * Math.sqrt(3)) / 2, newSize, depth - 1);
        drawSierpinski(ctx, x + newSize, y + (newSize * Math.sqrt(3)) / 2, newSize, depth - 1);
      }
    };

    const handleAnimate = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      
      let currentDepth = 0;
      const maxDepth = 5;

      const interval = setInterval(() => {
        setDepth(currentDepth);
        currentDepth++;
        
        if (currentDepth > maxDepth) {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 600);
    };

    // This runs whenever 'depth' changes
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSierpinski(ctx, 25, 25, 350, depth);
    }, [depth]);

    return (
      <div className="sierpinski-container">
        <canvas 
          ref={canvasRef} 
          width="400" 
          height="370" 
          className="sierpinski-canvas"
        />
        <div className="sierpinski-controls">
          <button 
            onClick={handleAnimate} 
            disabled={isAnimating}
            className="play-btn"
          >
            {isAnimating ? '⏸ Playing...' : '▶ Play'}
          </button>
          <div className="depth-display">Depth: {depth}</div>
        </div>

        <style>{`
          .sierpinski-controls {
            display: flex;
            flex-direction: row; /* Force horizontal alignment */
            gap: 2rem;           /* Adds space between button and text */
            align-items: center; /* Keeps them vertically centered with each other */
            justify-content: center; /* Centers the whole group under the canvas */
            width: 100%;
          }
          .sierpinski-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 2rem;
          }
          .sierpinski-canvas {
            border: 2px solid #3b82f6;
            border-radius: 0.375rem;
            max-width: 100%;
            height: auto;
          }
          .play-btn {
            padding: 0.5rem 2rem;
            background-color: #3b82f6;
            color: white;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
            transition: opacity 0.2s;
          }
          .play-btn:disabled { opacity: 0.5; cursor: not-allowed; }
          .depth-display { font-weight: bold; min-width: 100px; }
        `}</style>
      </div>
    );
  }