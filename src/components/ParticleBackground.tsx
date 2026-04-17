"use client";
import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let particles: Array<{
      x: number; y: number; size: number;
      opacity: number; opacitySpeed: number;
      vx: number; vy: number; twinkle: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const init = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          opacitySpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    };
    init();
    window.addEventListener('resize', init);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.twinkle += 0.02;
        p.opacity += p.opacitySpeed;
        if (p.opacity > 0.7 || p.opacity < 0.05) p.opacitySpeed *= -1;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const twinkleOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.twinkle));

        // Draw 4-point star shape for larger particles, dot for smaller
        if (p.size > 1.0) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.fillStyle = `rgba(255,255,255,${twinkleOpacity})`;
          const s = p.size;
          ctx.beginPath();
          ctx.moveTo(0, -s * 2.5);
          ctx.lineTo(s * 0.4, -s * 0.4);
          ctx.lineTo(s * 2.5, 0);
          ctx.lineTo(s * 0.4, s * 0.4);
          ctx.lineTo(0, s * 2.5);
          ctx.lineTo(-s * 0.4, s * 0.4);
          ctx.lineTo(-s * 2.5, 0);
          ctx.lineTo(-s * 0.4, -s * 0.4);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${twinkleOpacity})`;
          ctx.fill();
        }
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
