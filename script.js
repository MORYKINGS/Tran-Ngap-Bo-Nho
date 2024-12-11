// Updated script.js file

const messages = [
  "Nhớ nhớ nhớ em!"
];

function generateRandomNotifications() {
  const notificationCount = 100;

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>Tràn ngập bộ</span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);
    }, i * 200);
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none'; 
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#77;&#111;&#114;&#121;&#32;&#100;&#101;&#112;&#32;&#116;&#114;&#97;&#105;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText; 
  document.body.appendChild(footer); 

  // Automatically include the audio element and setup play functionality
  const audioPlayer = document.createElement('audio');
  audioPlayer.id = 'audioPlayer';
  audioPlayer.src = './TBN.mp3';
  document.body.appendChild(audioPlayer);

  const playButton = document.createElement('button');
  playButton.id = 'playButton';
  playButton.textContent = 'Nhấn đây nè';
  playButton.onclick = () => {
    audioPlayer.play();
    generateRandomNotifications();
  };
  document.body.appendChild(playButton);
});
