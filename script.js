// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add "visible" class when section is in viewport
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Initial call to add visible class for sections already in viewport
window.dispatchEvent(new Event('scroll'));
