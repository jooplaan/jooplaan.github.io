// Identify the toggle switches
const toggleDarkModeSwitch = document.querySelector('#checkbox-dark-mode');
// const toggleImageDisplay = document.querySelector('#checkbox-hide-images');

// Function to switch dark mode
function switchDarkMode(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Function to switch image display
function switchImageDisplay(e) {
    if (e.target.checked) {
        localStorage.setItem('image_display', 'hide');
        document.documentElement.setAttribute('data-image-display', 'hide');
        hideImages();
    } else {
        localStorage.setItem('image_display', 'show');
        document.documentElement.setAttribute('data-image-display', 'show');
        showImages();
    }
}

// Add event listeners for the toggle switches
toggleDarkModeSwitch.addEventListener('change', switchDarkMode, false);
// toggleImageDisplay.addEventListener('change', switchImageDisplay, false);

// Function to detect color scheme and apply it on page load
function detectColorScheme() {
    let theme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    toggleDarkModeSwitch.checked = theme === 'dark';
}

// Function to detect image display setting and apply it on page load
function detectImageDisplay() {
    let imageDisplay = localStorage.getItem('image_display') || 'show';
    document.documentElement.setAttribute('data-image-display', imageDisplay);
    toggleImageDisplay.checked = imageDisplay === 'hide';
    if (imageDisplay === 'hide') {
        hideImages();
    } else {
        showImages();
    }
}

// Hide images and display alt text
const originalImages = [];
function hideImages() {
    document.querySelectorAll('img').forEach(function(img, index) {
        if (!originalImages[index]) {
            originalImages[index] = {
                src: img.src,
                alt: img.alt,
                width: img.naturalWidth,
                height: img.naturalHeight,
                display: getComputedStyle(img).display // Capture the display style of the image
            };
        }
        let altText = img.getAttribute('alt');
        let width = img.width;
        let height = img.height;

        let altTextElement = document.createElement('div');
        altTextElement.className = 'alt-text';
        altTextElement.innerText = altText;
        altTextElement.style.width = width + 'px';
        altTextElement.style.height = height + 'px';
        altTextElement.style.display = getComputedStyle(img).display; // Set the display style

        img.parentNode.replaceChild(altTextElement, img);
    });
}

// Show images and remove alt text
function showImages() {
    document.querySelectorAll('.alt-text').forEach(function(altTextElement, index) {
        let imgData = originalImages[index];
        let img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.width = imgData.width;
        img.height = imgData.height;
        img.style.display = imgData.display; // Restore the display style

        altTextElement.parentNode.replaceChild(img, altTextElement);
    });
}

// Run functions on page load
document.addEventListener('DOMContentLoaded', (event) => {
    detectColorScheme();
    // detectImageDisplay();
});
