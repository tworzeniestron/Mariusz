document.getElementById('fb-link').addEventListener('click', () => {
    logClick('Facebook');
});

document.getElementById('phone-link').addEventListener('click', () => {
    logClick('Telefon');
});

document.getElementById('insta-link').addEventListener('click', () => {
    logClick('Instagram');
});

function logClick(source) {
    fetch('http://localhost:3000/log', { 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        source: source,
        timestamp: new Date().toISOString() 
    })
    }).catch(err => console.error('Błąd połączenia z backendem:', err));
}
