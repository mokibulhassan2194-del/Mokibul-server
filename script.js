const wrapper = document.getElementById('mainContainer');
if (wrapper) {
    wrapper.addEventListener('scroll', () => {
        const vids = document.querySelectorAll('video');
        vids.forEach(v => {
            const rect = v.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                v.play().catch(() => {});
            } else {
                v.pause();
            }
        });
    }, { passive: true });
}

