document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Play the confirmation sound immediately upon clicking the send button
    const confirmationSound = document.getElementById('confirmationSound');
    confirmationSound.play();

    // Display a confirmation message
    const confirmationMessage = document.querySelector('.confirmation-message');
    confirmationMessage.style.display = 'block';

    // Create sparkles
    createSparkles();

    // Clear the form after submission
    setTimeout(function() {
        document.getElementById('messageForm').reset();
        confirmationMessage.style.display = 'none';
    }, 3000);
});

function createSparkles() {
    const sparkleContainer = document.getElementById('sparkles');
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${Math.random() * window.innerWidth}px`;
        sparkle.style.top = `${Math.random() * window.innerHeight}px`;
        sparkleContainer.appendChild(sparkle);

        // Remove sparkles after animation
        setTimeout(() => {
            sparkle.remove();
        }, 600);
    }
}
