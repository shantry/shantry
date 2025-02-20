function applyBookmarkletEffects() {
    function shakeScreen() {
        let intensity = 10;
        let interval = setInterval(() => {
            document.body.style.transform = `translate(${Math.random() * intensity - intensity / 2}px, ${Math.random() * intensity - intensity / 2}px) rotate(${Math.random() * 5 - 2.5}deg)`;
        }, 50);
        setTimeout(() => {
            clearInterval(interval);
            document.body.style.transform = "";
        }, 2000);
    }

    function removeRandomElements() {
        document.querySelectorAll("*").forEach(el => {
            if (Math.random() > 0.7) {
                let offsetX = (Math.random() - 0.5) * 500;
                let offsetY = (Math.random() - 0.5) * 500;
                let rotation = Math.random() * 360;
                el.style.transition = "transform 2s ease-out, opacity 2s ease-out";
                el.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg) scale(0)`;
                el.style.opacity = "0";
                setTimeout(() => el.remove(), 2000);
            }
        });
    }

    function explosionEffect() {
        let explosion = document.createElement("div");
        explosion.style.position = "fixed";
        explosion.style.top = "50%";
        explosion.style.left = "50%";
        explosion.style.width = "500px";
        explosion.style.height = "500px";
        explosion.style.background = "radial-gradient(circle, red, orange, yellow, transparent)";
        explosion.style.borderRadius = "50%";
        explosion.style.transform = "translate(-50%, -50%) scale(0)";
        explosion.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
        explosion.style.opacity = "1";
        document.body.appendChild(explosion);
        setTimeout(() => {
            explosion.style.transform = "translate(-50%, -50%) scale(3)";
            explosion.style.opacity = "0";
        }, 50);
        setTimeout(() => explosion.remove(), 1000);
    }

    function playExplosionSound() {
        new Audio("https://www.myinstants.com/media/sounds/explosion.mp3").play();
    }

    shakeScreen();
    removeRandomElements();
    explosionEffect();
    playExplosionSound();
}

// Add an event listener for key presses
document.addEventListener('keydown', function(event) {
    // Check if the 'A' key is pressed
    if (event.key === 'a' || event.key === 'A') {
        applyBookmarkletEffects();
    }
});
