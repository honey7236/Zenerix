document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('ph-list', 'ph-x');
        } else {
            icon.classList.replace('ph-x', 'ph-list');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.querySelector('i').classList.replace('ph-x', 'ph-list');
        });
    });

    // 3. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Number Counter Animation for About Section
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasCounted = false;

    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            stat.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.innerText = target + (stat.nextElementSibling.tagName === 'SPAN' ? '' : '+');
                        }
                    };

                    updateCounter();
                });
            }
        });
    }, { threshold: 0.5 });

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        countObserver.observe(aboutSection);
    }

    // 5. Video Loop with Fade Transition
    const setupVideoLoopWithFade = (videoClass, fadeDuration = 0.8) => {
        const video = document.querySelector(videoClass);
        if (!video) return;

        // Ensure loop attribute is removed
        video.removeAttribute('loop');

        let isFadingOut = false;

        video.addEventListener('timeupdate', () => {
            // Start fading out when the video is close to the end
            if (video.duration && !isFadingOut) {
                if (video.duration - video.currentTime <= fadeDuration) {
                    isFadingOut = true;
                    video.classList.add('video-fade-out');
                }
            }
        });

        video.addEventListener('ended', () => {
            // Once the video ends, reset time and replay
            video.currentTime = 0;
            video.play()
                .then(() => {
                    // Fade back in
                    video.classList.remove('video-fade-out');
                    // Reset fade state for the next replay
                    isFadingOut = false;
                })
                .catch(err => {
                    console.warn("Video replay was interrupted:", err);
                    video.classList.remove('video-fade-out');
                    isFadingOut = false;
                });
        });
    };

    setupVideoLoopWithFade('.hero-video');
    setupVideoLoopWithFade('.about-video-bg');
});
