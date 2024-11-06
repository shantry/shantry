document.addEventListener('mousemove', (e) => {
    const circles = document.querySelectorAll('.blur-circle');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.03;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        
        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
}); 