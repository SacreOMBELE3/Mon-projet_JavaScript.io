document.addEventListener("DOMContentLoaded", () => {

    // 🎯 CURSOR EFFECT
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", e => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // 📊 SKILL ANIMATION
    const bars = document.querySelectorAll(".bar div");

    bars.forEach(bar => {
        const width = bar.dataset.width;

        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });

    // 🚀 SCROLL REVEAL
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("active");
            }
        });
    });

    reveals.forEach(r => observer.observe(r));

    // 🔘 BUTTON EFFECT
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", () => {
        btn.innerText = "Téléchargement...";
        setTimeout(() => {
            btn.innerText = "Téléchargé ✔";
        }, 1500);
    });

});