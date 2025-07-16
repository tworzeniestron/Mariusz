document.addEventListener('DOMContentLoaded', () => {
  const fbLink = document.getElementById('fb-link');
  const instaLink = document.getElementById('insta-link');
  const phoneLink = document.getElementById('phone-link');
  const emailLink = document.getElementById('email-link');

  if (fbLink) fbLink.addEventListener('click', () => logClick('Facebook'));
  if (instaLink) instaLink.addEventListener('click', () => logClick('Instagram'));
  if (phoneLink) phoneLink.addEventListener('click', () => logClick('Telefon'));
  if (emailLink) emailLink.addEventListener('click', () => logClick('Mail'));
});

function logClick(source) {
  fetch('log.php', {
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
