// JavaScript to change the background gradient on scroll
document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const body = document.body;

    // Calculate the scroll position as a percentage of the total page height
    const scrollPercent = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // Change background gradient based on scroll position
    const gradientStart = `rgb(${172 + scrollPercent / 2}, ${124 + scrollPercent / 3}, ${143 + scrollPercent / 4})`;
    const gradientEnd = `#ff5c5c`;

    // Apply the new background gradient
    body.style.background = `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`;
});
