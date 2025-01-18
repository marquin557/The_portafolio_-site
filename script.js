// Show main content after the welcome screen fades out
setTimeout(() => {
    document.querySelector('.welcome-container').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
}, 12000); // After 12 seconds (for slower fade-out)

// Function to show more content (you can expand this)
function showContent() {
    alert('Here you can expand your content!');
}
