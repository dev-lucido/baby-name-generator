(function() {
    // 1. Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        #bng-container { position: fixed; bottom: 20px; right: 20px; z-index: 99999; font-family: sans-serif; }
        #bng-button { background: #ff6b6b; color: white; border: none; padding: 15px 20px; border-radius: 50px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.3); font-weight: bold; transition: transform 0.2s; }
        #bng-button:hover { transform: scale(1.05); }
        #bng-window { display: none; position: absolute; bottom: 70px; right: 0; width: 350px; height: 500px; background: white; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); overflow: hidden; }
        #bng-window.visible { display: block; }
    `;
    document.head.appendChild(style);

    // 2. Create Elements
    const container = document.createElement('div');
    container.id = 'bng-container';
    
    container.innerHTML = `
        <button id="bng-button">👶 Name Generator</button>
        <div id="bng-window">
            <iframe src="https://dev-lucido.github.io/baby-name-generator/" width="100%" height="100%" frameborder="0"></iframe>
        </div>
    `;
    document.body.appendChild(container);

    // 3. Add Logic
    const button = document.getElementById('bng-button');
    const window = document.getElementById('bng-window');

    button.addEventListener('click', () => {
        window.classList.toggle('visible');
    });
})();
