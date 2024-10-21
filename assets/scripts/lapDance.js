function applyAnimations() {
    const animations = ['spin', 'bounce', 'shake', 'flip', 'wiggle', 'pulse'];
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes spin { 0% { transform: rotate(0); } 100% { transform: rotate(360deg); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); } }
        @keyframes flip { 0%, 100% { transform: rotateY(0); } 50% { transform: rotateY(180deg); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(0); } 25% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        body * { animation: 1.5s infinite; }
    `;
    document.head.appendChild(style);
    document.querySelectorAll('*').forEach(el => {
        el.style.animationName = animations[Math.floor(Math.random() * animations.length)];
        el.style.animationDuration = Math.random() * 2 + 0.5 + 's';
        el.style.animationIterationCount = 'infinite';
        el.style.animationTimingFunction = 'ease-in-out';
    });
}

// Add an event listener for key presses
document.addEventListener('keydown', function(event) {
    // Check if the 'A' key is pressed (key code 65)
    if (event.key === 'a' || event.key === 'A') {
        applyAnimations();
    }
});