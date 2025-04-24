// Mouse Follower
class MouseFollower {
    constructor() {
        this.follower = document.getElementById('mouse-follower');
        this.createFollowerContent();
        this.init();
    }

    createFollowerContent() {
        this.follower.innerHTML = `
            <div class="follower-content">
                <div class="follower-glow"></div>
                <div class="follower-border"></div>
                <div class="follower-core"></div>
            </div>
        `;
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.follower.style.left = `${e.clientX}px`;
            this.follower.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mouseleave', () => {
            this.follower.style.display = 'none';
        });

        document.addEventListener('mouseenter', () => {
            this.follower.style.display = 'block';
        });
    }
}
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  

// Terminal
class Terminal {
    constructor() {
        this.messages = [
            "Initializing system protocols...",
            "Welcome to my digital engineering realm.",
            "Processing quantum algorithms...",
            "All systems operational.",
            "Ready to engineer tomorrow's solutions.",
            "Scanning for digital anomalies...",
            "Integrating machine learning modules...",
            "Cybernetic interface online."
        ];
        this.terminal = document.querySelector('.terminal-content');
        this.textElement = document.querySelector('.terminal-text');
        this.currentMessage = 0;
        this.currentChar = 0;
        this.init();
    }

    init() {
        this.typeMessage();
    }

    typeMessage() {
        if (this.currentChar < this.messages[this.currentMessage].length) {
            this.textElement.textContent += this.messages[this.currentMessage][this.currentChar];
            this.currentChar++;
            setTimeout(() => this.typeMessage(), 50);
        } else {
            setTimeout(() => this.resetMessage(), 2000);
        }
    }

    resetMessage() {
        this.textElement.textContent = '';
        this.currentChar = 0;
        this.currentMessage = (this.currentMessage + 1) % this.messages.length;
        this.typeMessage();
    }
}

// Particle Background
class ParticleBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.getElementById('particles').appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const numberOfParticles = Math.min(window.innerWidth / 10, 100);
        for (let i = 0; i < numberOfParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: ['rgba(14, 165, 233, 0.5)', 'rgba(139, 92, 246, 0.5)', 
                       'rgba(249, 115, 22, 0.5)', 'rgba(16, 185, 129, 0.5)'][Math.floor(Math.random() * 4)]
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.updateParticles();
        this.drawParticles();
        requestAnimationFrame(() => this.animate());
    }

    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x > this.canvas.width || particle.x < 0) particle.speedX *= -1;
            if (particle.y > this.canvas.height || particle.y < 0) particle.speedY *= -1;
        });
    }

    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
        });
        this.connectParticles();
    }

    connectParticles() {
        const maxDistance = 100;
        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.15;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            });
        });
    }
}

// Binary Background
class BinaryBackground {
    constructor() {
        this.container = document.getElementById('binary-background');
        this.init();
    }

    init() {
        for (let i = 0; i < 15; i++) {
            this.createStream();
        }
    }

    createStream() {
        const stream = document.createElement('div');
        stream.className = 'binary-stream';
        stream.style.left = `${Math.random() * 100}%`;
        stream.style.animationDelay = `${Math.random() * 10}s`;
        stream.style.animationDuration = `${Math.random() * 10 + 15}s`;
        stream.style.position = 'absolute';
        stream.style.top = '-100px';
        stream.style.color = 'rgba(14, 165, 233, 0.1)';
        stream.style.fontFamily = 'Space Mono, monospace';
        stream.style.fontSize = '14px';
        stream.style.animation = `float-down ${Math.random() * 10 + 15}s linear infinite`;
        stream.textContent = this.generateBinary();
        this.container.appendChild(stream);
    }

    generateBinary() {
        const length = Math.floor(Math.random() * 20) + 10;
        return Array(length).fill(0).map(() => Math.round(Math.random())).join('');
    }
}

// Service Section
class ServiceSection {
    constructor() {
        this.services = [
            {
                title: "Game Development",
                description: "Creating immersive gaming experiences with cutting-edge technologies and compelling storytelling.",
                color: "cyan",
                icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <circle cx="17" cy="12" r="2" />
                    <circle cx="13" cy="12" r="2" />
                    <line x1="7" y1="10" x2="7" y2="14" />
                    <line x1="5" y1="12" x2="9" y2="12" />
                </svg>`
            },
            {
                title: "App Development",
                description: "Building high-performance applications that transform ideas into user-friendly digital solutions.",
                color: "purple",
                icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="10" y1="19" x2="14" y2="19" />
                    <rect x="7" y="5" width="10" height="10" rx="1" />
                </svg>`
            },
            {
                title: "Python Development",
                description: "Developing efficient algorithms and systems using Python for data analysis, automation, and more.",
                color: "orange",
                icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                    <path d="M12 2C8.33 2 8 3.33 8 5V8H13V9H5C3.34 9 2 10.34 2 12V15C2 16.66 3.34 18 5 18H7V14C7 12.34 8.34 11 10 11H15C16.66 11 18 9.66 18 8V5C18 3.34 16.66 2 15 2H12Z" />
                    <path d="M12 22C15.67 22 16 20.67 16 19V16H11V15H19C20.66 15 22 13.66 22 12V9C22 7.34 20.66 6 19 6H17V10C17 11.66 15.66 13 14 13H9C7.34 13 6 14.34 6 16V19C6 20.66 7.34 22 9 22H12Z" />
                    <circle cx="9.5" cy="5.5" r="1.5" />
                    <circle cx="14.5" cy="18.5" r="1.5" />
                </svg>`
            },
            {
                title: "Web Development",
                description: "Crafting responsive, dynamic websites with modern frameworks and clean code architecture.",
                color: "green",
                icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                    <path d="M3 9H21" />
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 14L10 16L14 12" />
                </svg>`
            }
        ];
        this.init();
    }

    init() {
        const servicesGrid = document.querySelector('.services-grid');
        if (!servicesGrid) return;

        this.services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = `service-card service-${service.color}`;
            serviceCard.innerHTML = `
                <div class="service-icon ${service.color}">${service.icon}</div>
                <h3 class="service-title text-${service.color === 'cyan' ? 'neon-cyan' : 
                                              service.color === 'purple' ? 'neon-purple' : 
                                              service.color === 'orange' ? 'neon-orange' : 'neon-green'}">${service.title}</h3>
                <p class="service-description">${service.description}</p>
            `;
            servicesGrid.appendChild(serviceCard);
        });

        // Style the service icons
        document.querySelectorAll('.service-icon').forEach(icon => {
            if (icon.classList.contains('cyan')) icon.style.color = 'var(--neon-cyan)';
            if (icon.classList.contains('purple')) icon.style.color = 'var(--neon-purple)';
            if (icon.classList.contains('orange')) icon.style.color = 'var(--neon-orange)';
            if (icon.classList.contains('green')) icon.style.color = 'var(--neon-green)';
        });
    }
}

// Skills Section
class SkillsSection {
    constructor() {
        this.skills = [
            { name: "Python Development", level: 90, color: "orange" },
            { name: "Game Development", level: 85, color: "cyan" },
            { name: "Machine Learning", level: 75, color: "purple" },
            { name: "Web Development", level: 80, color: "green" }
        ];
        
        this.techCategories = [
            {
                title: "Technologies",
                items: ["React", "Unity", "TensorFlow", "Django", "Node.js", "PyTorch"]
            },
            {
                title: "Languages",
                items: ["Python", "JavaScript", "C#", "TypeScript", "SQL", "HTML/CSS"]
            },
            {
                title: "Tools",
                items: ["Git", "Docker", "AWS", "Figma", "VS Code", "Jupyter"]
            }
        ];
        
        this.init();
    }

    init() {
        // Populate skill bars
        const skillBars = document.querySelector('.skill-bars');
        if (skillBars) {
            this.skills.forEach(skill => {
                const skillBar = document.createElement('div');
                skillBar.className = 'skill-bar';
                skillBar.innerHTML = `
                    <div class="skill-info">
                        <span class="skill-name text-${skill.color === 'cyan' ? 'neon-cyan' : 
                                                 skill.color === 'purple' ? 'neon-purple' : 
                                                 skill.color === 'orange' ? 'neon-orange' : 'neon-green'}">${skill.name}</span>
                        <span class="skill-percent">${skill.level}%</span>
                    </div>
                    <div class="skill-progress">
                        <div class="skill-progress-bar ${skill.color}" style="width: ${skill.level}%"></div>
                    </div>
                `;
                skillBars.appendChild(skillBar);
            });
        }

        // Populate tech categories
        const skillsInfo = document.querySelector('.skills-info');
        if (skillsInfo) {
            this.techCategories.forEach(category => {
                const categoryEl = document.createElement('div');
                categoryEl.className = 'skill-category';
                
                let tagsHtml = '';
                category.items.forEach(item => {
                    tagsHtml += `<div class="skill-tag">${item}</div>`;
                });
                
                categoryEl.innerHTML = `
                    <h3>${category.title}</h3>
                    <div class="skill-tags">
                        ${tagsHtml}
                    </div>
                `;
                skillsInfo.appendChild(categoryEl);
            });
        }
    }
}

// Certificates Section
class CertificatesSection {
    constructor() {
        this.certificates = [
            {
                title: "Machine Learning",
                issuer: "Nvidia",
                date: "2025",
                description: "Advanced certification in machine learning algorithms, neural networks, and practical applications in data science projects.",
                color: "purple"
            },
            {
                title: "Full Stack Development",
                issuer: "CodeCraft Institute",
                date: "2024",
                description: "Comprehensive training in modern web development, covering both front-end and back-end technologies including React, Node.js, and database management.",
                color: "cyan"
            },
            {
                title: "Game Design & Development",
                issuer: "Digital Arts University",
                date: "2024",
                description: "Professional certification in game design principles, Unity development, 3D modeling, and game physics implementation.",
                color: "orange"
            },
            {
                title: "Python for Data Science",
                issuer: "DataMinds Institute",
                date: "2023",
                description: "Specialized training in Python programming for data analysis, visualization, and scientific computing using industry-standard libraries.",
                color: "green"
            }
        ];
        this.init();
    }

    init() {
        const certificatesGrid = document.querySelector('.certificates-grid');
        if (!certificatesGrid) return;

        this.certificates.forEach(cert => {
            const certCard = document.createElement('div');
            certCard.className = 'certificate-card';
            
            certCard.innerHTML = `
                <div class="certificate-content">
                    <div class="certificate-front">
                        <h3 class="certificate-title text-${cert.color === 'cyan' ? 'neon-cyan' : 
                                                        cert.color === 'purple' ? 'neon-purple' : 
                                                        cert.color === 'orange' ? 'neon-orange' : 'neon-green'}">${cert.title}</h3>
                        <p class="certificate-issuer">${cert.issuer}</p>
                        <p class="certificate-date">${cert.date}</p>
                        <span class="flip-hint">Click to flip</span>
                    </div>
                    <div class="certificate-back">
                        <p class="certificate-description">${cert.description}</p>
                        <span class="flip-hint">Click to flip</span>
                    </div>
                </div>
            `;
            
            certificatesGrid.appendChild(certCard);
        });
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully!');
            this.form.reset();
        });
    }
}

// Add gears to the background
class GearBackground {
    constructor() {
        this.gearPositions = [
            { size: 100, position: { top: '20%', left: '10%' }, delay: '0.2s', reverse: false },
            { size: 70, position: { top: '70%', left: '5%' }, delay: '0.7s', reverse: true },
            { size: 120, position: { top: '15%', right: '8%' }, delay: '0.3s', reverse: false },
            { size: 50, position: { bottom: '10%', right: '15%' }, delay: '0.5s', reverse: true }
        ];
        this.init();
    }

    init() {
        const heroSection = document.getElementById('home');
        if (!heroSection) return;

        this.gearPositions.forEach(gear => {
            const gearElement = document.createElement('div');
            gearElement.className = 'gear';
            gearElement.style.width = `${gear.size}px`;
            gearElement.style.height = `${gear.size}px`;
            
            // Set position
            if (gear.position.top) gearElement.style.top = gear.position.top;
            if (gear.position.left) gearElement.style.left = gear.position.left;
            if (gear.position.right) gearElement.style.right = gear.position.right;
            if (gear.position.bottom) gearElement.style.bottom = gear.position.bottom;
            
            gearElement.style.position = 'absolute';
            gearElement.style.opacity = '0.1';
            gearElement.style.zIndex = '-1';
            
            // Create SVG gear
            gearElement.innerHTML = `
                <svg width="100%" height="100%" viewBox="0 0 120 120" style="animation: ${gear.reverse ? 'spin 15s linear reverse infinite' : 'spin 15s linear infinite'}; animation-delay: ${gear.delay};">
                    <path fill="none" stroke="var(--neon-cyan)" stroke-width="6" d="M60,30 L60,10 M60,110 L60,90 M30,60 L10,60 M110,60 L90,60 M39.6,39.6 L25.9,25.9 M94.1,94.1 L80.4,80.4 M39.6,80.4 L25.9,94.1 M94.1,25.9 L80.4,39.6" />
                    <circle cx="60" cy="60" r="30" fill="none" stroke="var(--neon-cyan)" stroke-width="6" />
                    <circle cx="60" cy="60" r="15" fill="none" stroke="var(--neon-cyan)" stroke-width="4" />
                    <circle cx="60" cy="60" r="5" fill="var(--neon-cyan)" />
                </svg>
            `;
            
            heroSection.appendChild(gearElement);
        });
    }
}

// Float down animation for binary
document.head.insertAdjacentHTML('beforeend', `
    <style>
    @keyframes float-down {
        from { transform: translateY(-100vh); }
        to { transform: translateY(100vh); }
    }
    </style>
`);

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MouseFollower();
    new Terminal();
    new ParticleBackground();
    new BinaryBackground();
    new ServiceSection();
    new SkillsSection();
    new CertificatesSection();
    new ContactForm();
    new GearBackground();

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu functionality
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
                navLinks.style.padding = '1rem';
                navLinks.style.backdropFilter = 'blur(8px)';
            } else {
                navLinks.style.display = '';
            }
        });
    }
});