(function() {
    // Look for the specific ID the client added to their page
    const container = document.getElementById('baby-name-generator-root');

    if (container) {
        // Create the iframe
        const iframe = document.createElement('iframe');
        iframe.src = "https://dev-lucido.github.io/baby-name-generator/";
        
        // Styling to make it fit the container perfectly
        iframe.style.width = "100%";
        iframe.style.height = "600px"; // You can adjust this height
        iframe.style.border = "none";
        iframe.style.borderRadius = "8px";
        
        // Inject the iframe into their div
        container.appendChild(iframe);
    } else {
        console.error("Error: Could not find <div id='baby-name-generator-root'> on this page.");
    }
})();
