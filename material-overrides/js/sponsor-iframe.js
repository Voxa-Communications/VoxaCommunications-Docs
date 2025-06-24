// Detect current theme and update iframe src
function updateSponsorsIframe() {
    const iframe = document.getElementById('sponsors-iframe');
    if (iframe) {
        const isDark = document.body.getAttribute('data-md-color-scheme') === 'slate';
        const theme = isDark ? 'dark' : 'light';
        iframe.src = `https://voxacommunications-website.pages.dev/embed/sponsors?theme=${theme}`;
    }
}

// Update on page load
document.addEventListener('DOMContentLoaded', updateSponsorsIframe);

// Update when theme changes
const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-md-color-scheme') {
            updateSponsorsIframe();
        }
    });
});
observer.observe(document.body, { attributes: true, attributeFilter: ['data-md-color-scheme'] });