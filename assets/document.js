document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.selection-container');

    const observerOptions = {
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
        // Animate header on scroll
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = '#000';
            } else {
                header.style.backgroundColor = 'transparent';
            }
        });

        // Fade-in effect for sections
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const menu = document.querySelector(".menu");
        const overlay = document.getElementById("mobile__menu");
        const closeBtn = document.querySelector(".overlay .close");
    
        menu.addEventListener("click", () => {
            overlay.classList.add("overlay--active");
        });
    
        closeBtn.addEventListener("click", () => {
            overlay.classList.remove("overlay--active");
        });
    });
    

