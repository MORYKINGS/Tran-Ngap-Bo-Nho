// Updated script.js file with Shooting Stars and Floating Bubbles effects

const messages = [
  "Nhớ nhớ nhớ em!"
];

function generateRandomNotifications() {
  const notificationCount = 100; // Total number of notifications to display

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification'; // Assign a CSS class for styling

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>💖 Tràn ngập yêu thương 💖</span>
        </div>
        <p>${randomMessage}</p>
      `;

      // Position the notification randomly on the screen
      const x = Math.random() * (window.innerWidth - 240); // Ensure it fits within the screen width
      const y = Math.random() * (window.innerHeight - 160); // Ensure it fits within the screen height
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      // Add the notification to the document body
      document.body.appendChild(notification);
    }, i * 200); // Delay each notification slightly for a staggered effect
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification'); // Find the closest notification element
  notification.style.display = 'none'; // Hide the notification
}

function createGlitterEffect() {
  const glitterContainer = document.createElement('div');
  glitterContainer.className = 'glitter-container'; // Assign a CSS class for styling
  document.body.appendChild(glitterContainer); // Add the glitter container to the document

  for (let i = 0; i < 100; i++) {
    const glitter = document.createElement('div');
    glitter.className = 'glitter'; // Assign a CSS class for styling
    glitter.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
    glitter.style.animationDelay = Math.random() * 5 + 's'; // Random animation delay for a natural effect
    glitterContainer.appendChild(glitter); // Add the glitter to the container
  }
}

// Create shooting stars effect
function createShootingStar() {
  const star = document.createElement('div');
  star.className = 'shooting-star'; // Assign CSS class
  star.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(star);

  // Remove the star after animation ends
  setTimeout(() => {
    star.remove();
  }, 2000);
}

// Create floating bubbles effect
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble'; // Assign CSS class
  bubble.style.left = Math.random() * window.innerWidth + 'px';
  bubble.style.width = bubble.style.height = Math.random() * 30 + 10 + 'px'; // Random size
  document.body.appendChild(bubble);

  // Remove the bubble after animation ends
  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

// Main initialization function that runs when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Create a footer with encoded text ("Mory đẹp trai")
  var encodedText = '&#77;&#111;&#114;&#121;&#32;&#100;&#101;&#112;&#32;&#116;&#114;&#97;&#105;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText; 
  document.body.appendChild(footer); 

  // Create and include the audio player element
  const audioPlayer = document.createElement('audio');
  audioPlayer.id = 'audioPlayer';
  audioPlayer.src = './TBN.mp3'; // Source of the audio file
  document.body.appendChild(audioPlayer);

  // Create a button to trigger notifications and music
  const playButton = document.createElement('button');
  playButton.id = 'playButton';
  playButton.textContent = 'Nhấn đây nè'; // Button label
  playButton.onclick = () => {
    generateRandomNotifications(); // Trigger notifications
    createGlitterEffect(); // Trigger glitter effect
    audioPlayer.play(); // Play the music
  };
  document.body.appendChild(playButton); // Add the button to the document body

  // Add continuous effects for shooting stars and bubbles
  setInterval(createShootingStar, 1000); // Shooting star every second
  setInterval(createBubble, 500); // Bubble every half-second
});
