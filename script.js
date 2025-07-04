document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    sections.forEach(section => {
        observer.observe(section);
    });

    // Jump animation
    const heroImage = document.querySelector('#hero img');
    heroImage.addEventListener('click', () => {
        heroImage.classList.add('jump');
        heroImage.addEventListener('animationend', () => {
            heroImage.classList.remove('jump');
        }, { once: true });
    });
});
