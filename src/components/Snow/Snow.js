import React, { Component } from 'react';

class Snow extends Component {
  constructor(props) {
    super(props);

    this.maxParticles = 25;
    this.particles = [];
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    this.w = this.canvas.width = window.innerWidth;
    this.h = this.canvas.height = window.innerHeight;
    this.angle = 0;

    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        r: Math.random() * 2.5 + 1,
        d: Math.random() * this.maxParticles,
      });
    }

    this.ctx = this.canvas.getContext('2d');
    setInterval(this.draw, 30);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.ctx.fillStyle = 'rgba(255,255,255,0.8)';
    this.ctx.beginPath();

    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.particles[i];
      this.ctx.moveTo(p.x, p.y);
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }

    this.ctx.fill();

    this.update();
  }

  update() {
    this.angle += 0.01;

    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.particles[i];

      p.y += Math.cos(this.angle + p.d) + 1 + p.r / 2;
      p.x += Math.sin(this.angle) * 2;


      if (p.x > this.w + 7 || p.x < -7 || p.y > this.h) {
        if (i % 3 > 0) {
          this.particles[i] = { x: Math.random() * this.w, y: -10, r: p.r, d: p.d };
        } else {
          if (Math.sin(this.angle) > 0) {
            this.particles[i] = { x: -7, y: Math.random() * this.h, r: p.r, d: p.d };
          } else {
            this.particles[i] = { x: this.w + 7, y: Math.random() * this.h, r: p.r, d: p.d };
          }
        }
      }
    }
  }

  render() {
    return (
      <canvas ref={(c) => { this.canvas = c; }} />
    );
  }
}

export default Snow;
