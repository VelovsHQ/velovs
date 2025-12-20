"use client";

import { useEffect, useRef } from "react";

class Node {
  x: number;
  y: number;
  vx: number = (Math.random() - 0.5) * 0.3;
  vy: number = (Math.random() - 0.5) * 0.3;
  radius: number = 0.8;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
  }

  update(width: number, height: number, mouseX: number, mouseY: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist < 200) {
      this.x += dx * 0.01;
      this.y += dy * 0.01;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(197, 160, 89, 4)";
    ctx.fill();
  }
}

export default function GravityWeb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const nodes: Node[] = Array.from({ length: 70 }, () => new Node(width, height));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.update(width, height, mouseX, mouseY);
        a.draw(ctx);

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(197, 160, 89, ${0.15 - dist / 130 * 0.15})`;
            ctx.lineWidth = 0.4; 
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}