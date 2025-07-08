document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation (if you add navigation links later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more complex JavaScript here for:
    // - Parallax effects on the gradient background
    // - Interactive elements that reveal more on hover/click
    // - A "read more" button for project descriptions if they get too long
    // - Dynamic loading of content
});