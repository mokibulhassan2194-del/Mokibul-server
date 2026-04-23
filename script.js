const wrapper = document.getElementById('mainContainer');

// Scroll hone par video play/pause karne ke liye
if (wrapper) {
    wrapper.addEventListener('scroll', () => {
        const vids = document.querySelectorAll('video');
        vids.forEach(v => {
            const rect = v.getBoundingClientRect();
            // Agar video screen ke beech mein hai (halka margin ke saath)
            if (rect.top >= -100 && rect.top <= 100) {
                v.play().catch(() => {});
            } else {
                v.pause();
            }
        });
    }, { passive: true });
}

// Click karne par play/pause
function togglePlay(video) {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Like button toggle karne ke liye (Lal dil ke liye)
function toggleLike(element) {
    const icon = element.querySelector('.icon');
    icon.classList.toggle('liked'); 
}
