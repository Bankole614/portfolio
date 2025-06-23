// src/components/ParticleBackground.tsx
import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  fadeDirection: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  // Configuration
  const isMobile = window.innerWidth < 480;
  const isTablet = window.innerWidth < 768 && window.innerWidth >= 480;
  const PARTICLE_COUNT = isMobile ? 50 : isTablet ? 100 : 200;
  const SPEED = 0.3;
  const RADIUS_MIN = 2;
  const RADIUS_MAX = 2;
  const ALPHA_MIN = 0.1;
  const ALPHA_MAX = 0.5;
  const FADE_SPEED = 0.0005;

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;
    const { width: pw, height: ph } = parent.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = pw * dpr;
    canvas.height = ph * dpr;
    canvas.style.width = `${pw}px`;
    canvas.style.height = `${ph}px`;
    ctx.scale(dpr, dpr);

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = RADIUS_MIN + Math.random() * (RADIUS_MAX - RADIUS_MIN);
      const x = Math.random() * pw;
      const y = Math.random() * ph;
      const angle = Math.random() * 2 * Math.PI;
      const speed = SPEED * (0.5 + Math.random() * 0.5);
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      const alpha = ALPHA_MIN + Math.random() * (ALPHA_MAX - ALPHA_MIN);
      const fadeDirection = Math.random() < 0.5 ? 1 : -1;
      particles.push({ x, y, vx, vy, radius, alpha, fadeDirection });
    }
    particlesRef.current = particles;
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const { width: pw, height: ph } = parent.getBoundingClientRect();

    ctx.clearRect(0, 0, pw, ph);
    const particles = particlesRef.current;
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = pw;
      else if (p.x > pw) p.x = 0;
      if (p.y < 0) p.y = ph;
      else if (p.y > ph) p.y = 0;

      p.alpha += FADE_SPEED * p.fadeDirection;
      if (p.alpha <= ALPHA_MIN) {
        p.alpha = ALPHA_MIN;
        p.fadeDirection = 1;
      } else if (p.alpha >= ALPHA_MAX) {
        p.alpha = ALPHA_MAX;
        p.fadeDirection = -1;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    initCanvas();
    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      initCanvas();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
