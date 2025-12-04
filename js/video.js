const preview = document.getElementById("videoPreview");
const modal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".close-btn");
const video = document.getElementById("productVideo");

// Enhanced modal opening with smooth animation
preview.onclick = function () {
    modal.style.display = "block";
    // Small delay to ensure display is set before animation
    setTimeout(() => {
        modal.style.opacity = "1";
        video.play();
    }, 10);
};

// Enhanced modal closing
function closeModal() {
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }, 300);
}

// Close button click
closeBtn.onclick = closeModal;

// Close modal when clicked outside video
modal.onclick = function (event) {
    if (event.target === modal || event.target.classList.contains('video-modal-overlay')) {
        closeModal();
    }
};

// Keyboard support - ESC to close
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Prevent video container clicks from closing modal
document.querySelector('.video-container').onclick = function (event) {
    event.stopPropagation();
};
