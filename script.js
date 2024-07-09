const urlMap = new Map();
let counter = 1;

function generateTinyUrl() {
    const originalUrl = document.getElementById('original-url').value;
    if (originalUrl.trim() === "") {
        alert("Please enter a valid URL.");
        return;
    }

    const tinyUrl = `http://tiny.url/${counter}`;
    urlMap.set(tinyUrl, originalUrl);
    counter++;

    const tinyUrlElement = document.getElementById('tiny-url');
    tinyUrlElement.innerHTML = `Tiny URL: <a href="#" onclick="redirect('${tinyUrl}')">${tinyUrl}</a>`;
    document.getElementById('original-url').value = "";
}

function redirect(tinyUrl) {
    const originalUrl = urlMap.get(tinyUrl);
    if (originalUrl) {
        alert(`Redirecting to: ${originalUrl}`);
        setTimeout(() => {
            window.open(originalUrl, '_blank');
        }, 2000); // 2 seconds delay
    } else {
        alert("URL not found!");
    }
}
