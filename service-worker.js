if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registrace úspěšná:', registration);
            })
            .catch(error => {
                console.log('Service Worker registrace neúspěšná:', error);
            });
    });
}

