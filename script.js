document.addEventListener("DOMContentLoaded", function () {
    const revealBtn = document.getElementById("revealBtn");
    const hiddenText = document.getElementById("hiddenText");

    // Sound effect
    const clickSound = new Audio("click.mp3"); // Add a click sound file

    revealBtn.addEventListener("click", function () {
        clickSound.play(); // Play the click sound
        revealMessage(hiddenText); // Start typing effect

        // Smooth fade-out effect for the button
        revealBtn.style.transform = "scale(0.8)";
        revealBtn.style.opacity = "0";
        setTimeout(() => {
            revealBtn.style.display = "none";
        }, 500);
    });

    // Typing Effect for Message
    function revealMessage(element) {
        const text = element.innerHTML;
        element.innerHTML = "";
        element.classList.add("show");

        let index = 0;
        const typingEffect = setInterval(() => {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    }
});