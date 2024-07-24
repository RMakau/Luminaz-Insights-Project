document.addEventListener('DOMContentLoaded', function() {
    const chatBtn = document.getElementById('chat-btn');
    const chatBox = document.getElementById('chat-box');
    const closeChatBtn = document.getElementById('close-chat');
    const sendChatBtn = document.getElementById('send-chat');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle chat box visibility
    chatBtn.addEventListener('click', function() {
        chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
    });

    // Close chat box
    closeChatBtn.addEventListener('click', function() {
        chatBox.style.display = 'none';
    });

    // Send chat message
    sendChatBtn.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
        }
    });

    // Optional: Handle form submission and display a success message
    const
