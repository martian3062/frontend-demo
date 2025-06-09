
document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const body = document.body;
    const scrollPercent = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const gradientStart = `rgb(${172 + scrollPercent / 2}, ${124 + scrollPercent / 3}, ${143 + scrollPercent / 4})`;
    const gradientEnd = `#ff5c5c`;
    body.style.background = `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`;
});
