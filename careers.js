function applyNow(position) {
    const applyModal = document.getElementById('applyModal');
    const modalContent = document.querySelector('.modal-content');
    modalContent.querySelector('h2').textContent = `Apply for ${position}`;
    applyModal.style.display = 'block';

    // Here you can handle the application process
    // For example, set a hidden input field with the position value
    document.getElementById('position').value = position;
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const applyModal = document.getElementById('applyModal');
    if (event.target === applyModal) {
        applyModal.style.display = 'none';
    }
}

// Close the modal when clicking the close button
function closeModal() {
    document.getElementById('applyModal').style.display = 'none';
}
