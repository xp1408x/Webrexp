export const heroParticles = () => {
  const canvas = document.createElement('canvas');
  const heroAnimation = document.getElementById('hero-animation');
  if (heroAnimation) {
    heroAnimation.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const particles: Particle[] = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.02;
      }
      draw() {
        if (ctx) {
          ctx.fillStyle = '#007BFF';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function handleParticles() {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.1) {
          particles.splice(i, 1);
          i--;
        }
      }
    }

    function createParticle(e: MouseEvent | { x: number; y: number }) {
      if (particles.length < 100) {
        let x, y;
        if (e instanceof MouseEvent) {
          x = e.clientX;
          y = e.clientY;
        } else {
          x = e.x;
          y = e.y;
        }
        for (let i = 0; i < 5; i++) {
          particles.push(new Particle(x, y));
        }
      }
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
      }
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', createParticle);
    setInterval(() => createParticle({ x: Math.random() * canvas.width, y: Math.random() * canvas.height }), 200);

    resizeCanvas();
    animate();
  }
};
