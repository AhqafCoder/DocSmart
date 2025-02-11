document.getElementById('send-btn').addEventListener('click', () => {
    const inputField = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');
    const message = inputField.value.trim();
  
    if (message) {
      const userMessage = document.createElement('div');
      userMessage.className = 'message user-message';
      userMessage.innerHTML = `<p>${message}</p>`;
      chatWindow.appendChild(userMessage);
  
      // Simulate bot response
      const botMessage = document.createElement('div');
      botMessage.className = 'message bot-message';
      botMessage.innerHTML = `<p>Let me help you with that.</p>`;
      chatWindow.appendChild(botMessage);
  
      chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
      inputField.value = '';
    }
  });
  