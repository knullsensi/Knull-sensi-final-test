document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // Loading Animation
    // ======================
    const loadingAnimation = () => {
        setTimeout(function() {
            document.querySelector('.loading-animation').style.opacity = '0';
            setTimeout(function() {
                document.querySelector('.loading-animation').style.display = 'none';
            }, 500);
        }, 2000);
    };

    // ======================
    // Theme Toggle Functionality
    // ======================
    const themeToggle = () => {
        const themeSwitch = document.getElementById('theme-switch');
        const body = document.body;
        
        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme') || 
                          (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
        
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            themeSwitch.checked = true;
        }
        
        themeSwitch.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
            }
            updateHeaderBackground();
        });
    };

    // ======================
    // Tab Functionality
    // ======================
    const tabSystem = () => {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    };

    // ======================
    // Header Scroll Effect
    // ======================
    const headerScrollEffect = () => {
        const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            updateHeaderBackground();
        });
    };

    const updateHeaderBackground = () => {
        const header = document.querySelector('.header');
        const body = document.body;
        if (window.scrollY > 50) {
            header.style.background = body.classList.contains('light-theme') ? 
                'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)';
            header.style.boxShadow = '0 5px 20px rgba(255, 0, 0, 0.2)';
        } else {
            header.style.background = body.classList.contains('light-theme') ? 
                'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)';
            header.style.boxShadow = 'none';
        }
    };

    // ======================
    // Button Hover Effects
    // ======================
    const buttonEffects = () => {
        // Download buttons
        const downloadButtons = document.querySelectorAll('.download-btn');
        downloadButtons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });

        // Purchase button
        const purchaseBtn = document.querySelector('.purchase-btn');
        if (purchaseBtn) {
            purchaseBtn.addEventListener('mouseenter', function() {
                this.style.background = 'linear-gradient(to right, #ff0000, #ff3333)';
            });
            
            purchaseBtn.addEventListener('mouseleave', function() {
                this.style.background = 'var(--primary)';
            });
        }
    };

    // ======================
    // Contact Link Effect
    // ======================
    const contactLinkEffect = () => {
        const contactLink = document.querySelector('.contact-link');
        if (contactLink) {
            contactLink.addEventListener('mouseenter', function() {
                this.querySelector('.contact-effect').style.transform = 'translateY(0)';
                this.querySelector('.contact-text').style.color = '#000';
            });
            
            contactLink.addEventListener('mouseleave', function() {
                this.querySelector('.contact-effect').style.transform = 'translateY(100%)';
                this.querySelector('.contact-text').style.color = '#fff';
            });
        }
    };

    // ======================
    // Banner Animations
    // ======================
    const bannerAnimations = () => {
        const sensiImage = document.querySelector('.sensi-image img');
        if (sensiImage) {
            // Random glow effect
            setInterval(() => {
                sensiImage.style.filter = `drop-shadow(0 0 ${15 + Math.random() * 10}px rgba(255, 0, 0, ${0.4 + Math.random() * 0.3}))`;
            }, 3000);

            // Particle effect
            createParticles();
        }
    };

    const createParticles = () => {
        const banner = document.querySelector('.banner');
        if (!banner) return;

        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random properties
            const size = Math.random() * 5 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;
            const opacity = Math.random() * 0.5 + 0.1;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.opacity = opacity;
            particle.style.backgroundColor = `rgba(255, ${Math.random() * 100}, ${Math.random() * 100}, ${opacity})`;
            
            banner.appendChild(particle);
        }
    };

    // ======================
    // Initialize All Functions
    // ======================
    const init = () => {
        loadingAnimation();
        themeToggle();
        tabSystem();
        headerScrollEffect();
        buttonEffects();
        contactLinkEffect();
        bannerAnimations();
        updateHeaderBackground(); // Initial call to set correct header background
    };

    init();
});

// Add CSS for particles dynamically
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .particle {
            position: absolute;
            background-color: rgba(255, 0, 0, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: floatParticle linear infinite;
            z-index: 1;
        }
        
        @keyframes floatParticle {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                transform: translateY(-100vh) translateX(20vw);
                opacity: 0;
            }
        }
    </style>
`);
/*// Music Player Functionality
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bgMusic');
    const toggleBtn = document.getElementById('musicToggle');
    const musicStatus = document.querySelector('.music-status');
    
    // Try to autoplay when page loads
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Autoplay started
            toggleBtn.classList.add('playing');
        })
        .catch(error => {
            // Autoplay was prevented
            toggleBtn.classList.remove('playing');
            musicStatus.textContent = 'Click to play';
        });
    }
    
    // Toggle play/pause
    toggleBtn.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            toggleBtn.classList.add('playing');
            musicStatus.textContent = 'Now Playing';
        } else {
            music.pause();
            toggleBtn.classList.remove('playing');
            musicStatus.textContent = 'Paused';
        }
    });
    
    // Change icon based on playback
    music.addEventListener('play', function() {
        toggleBtn.classList.add('playing');
        musicStatus.textContent = 'Now Playing';
    });
    
    music.addEventListener('pause', function() {
        toggleBtn.classList.remove('playing');
        musicStatus.textContent = 'Paused';
    });
});*/
