// Simple fadeInUp animation trigger on page load
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fadeInUp');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});
