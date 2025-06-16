// Simple particles background for hero section
const canvas = document.getElementById('hero-bg');
const ctx = canvas.getContext('2d');
let particles = [];
let width, height;

function init() {
    resizeCanvas();
    particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1
        });
    }
    animate();
}

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

function animate() {
    ctx.fillStyle = 'rgba(13,13,13,0.5)';
    ctx.fillRect(0, 0, width, height);
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00e1ff';
        ctx.fill();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);
init();

// GSAP animations on scroll
if (typeof gsap !== 'undefined') {
    gsap.utils.toArray('.service-card, .case-card').forEach(el => {
        gsap.from(el, {
            opacity: 0,
            y: 30,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%'
            }
        });
    });
}
