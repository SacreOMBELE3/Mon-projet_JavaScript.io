document.addEventListener("mousemove", (e) => {
    const card = document.querySelector(".glass-card");

    requestAnimationFrame(() => {
        const x = (window.innerWidth / 2 - e.clientX) / 20;
        const y = (window.innerHeight / 2 - e.clientY) / 20;

        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
});