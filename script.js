const images = document.querySelectorAll('.video-item');
let currentIndex = 0; // Start with the first image

function updateImages() {
  images.forEach((img, index) => {
    if (index === (currentIndex - 1 + images.length) % images.length) {
      // Move the previous image to the left
      img.style.transform = 'translate(-150%, -50%) scale(1)';
      img.style.zIndex = 1;
    } else if (index === currentIndex) {
      // Center the current image
      img.style.transform = 'translate(-50%, -50%) scale(1.5)';
      img.style.zIndex = 10;
    } else if (index === (currentIndex + 1) % images.length) {
      // Move the next image to the right
      img.style.transform = 'translate(50%, -50%) scale(1)';
      img.style.zIndex = 1;
    } else {
      // Move all other images off-screen
      img.style.transform = 'translate(200%, -50%) scale(1)';
      img.style.zIndex = 0;
    }
  });

  // Update currentIndex to loop through images
  currentIndex = (currentIndex + 1) % images.length;
}

// Start the animation
setInterval(updateImages, 3000);
updateImages(); // Initial setup
