// script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const interet = document.getElementById('interet').value;
  const message = document.getElementById('message').value;

  // Simuler l'envoi (dans un vrai site, tu utiliserais un backend ou EmailJS)
  document.getElementById('formMessage').textContent = 
    `Merci ${nom} ! Votre demande concernant "${interet === 'fruits' ? 'Fruits Transformés' : interet === 'poulets' ? 'Poulets de Chair' : 'Les deux'}" a bien été envoyée. Notre équipe commerciale vous contactera sous 24h.`;

  // Réinitialiser le formulaire
  this.reset();
});
