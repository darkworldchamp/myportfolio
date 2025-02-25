document.addEventListener('DOMContentLoaded', () => {
    const typingEffect = (element, text, speed) => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    const homeText = document.getElementById('typing-text');
    typingEffect(homeText, "Welcome To My Portfolio",40);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to skill and project items
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-item, .project-item').forEach(item => {
        observer.observe(item);
    });
    document.querySelectorAll(".project-item").forEach(item => {
            item.addEventListener("click", function () {
                const link = this.getAttribute("data-link");
                if (link) {
                    window.open(link, "_blank"); // Opens in a new tab
                }
            });
        });
});
