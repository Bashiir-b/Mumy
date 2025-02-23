document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts");

    function createHeart() {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animation = "fall 4s linear";
        heart.style.fontSize = "2em";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    setInterval(createHeart, 500);
});
