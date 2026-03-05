(function() {
    // 1. Find where to put the generator
    const scriptTag = document.getElementById('baby-name-gen-script');
    const containerId = scriptTag.getAttribute('data-container') || 'baby-name-app';
    const container = document.getElementById(containerId);

    if (container) {
        // 2. Create the IFrame dynamically
        const iframe = document.createElement('iframe');
        iframe.src = "https://dev-lucido.github.io/baby-name-generator/";
        iframe.style.width = "100%";
        iframe.style.height = "700px"; // Adjust based on your app's height
        iframe.style.border = "none";
        iframe.style.borderRadius = "12px";
        iframe.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        
        // 3. Inject it into the client's page
        container.appendChild(iframe);
    } else {
        console.error("Baby Name Generator: Container #" + containerId + " not found.");
    }
})();
