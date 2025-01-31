// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .content-section');
    
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
    
    handleTimelineAnimations();
}

// Adding scroll event listener
document.addEventListener('scroll', handleScrollAnimations);
// Initial check for elements in viewport
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

function handleTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
            item.classList.add('visible');
        }
    });
} 
