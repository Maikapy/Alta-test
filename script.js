// Fonction pour défiler jusqu'à l'ancre spécifiée
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionButton = item.querySelector('.faq-question');
    questionButton.addEventListener('click', function () {
      // Ferme toutes les autres réponses
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Ouvre/ferme la question courante
      item.classList.toggle('active');
    });
  });
});
document.getElementById('response-checkbox').addEventListener('change', function () {
  var emailSection = document.getElementById('email-section');

  if (this.checked) {
    emailSection.style.display = 'block'; // Affiche la section email
  } else {
    emailSection.style.display = 'none'; // Cache la section email
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  }

  if (isMobileDevice()) {
    // Afficher le site sur mobile
    document.getElementById('mobile-content').style.display = 'block';
  } else {
    // Afficher le message d'avertissement sur PC et empêcher le scroll
    document.getElementById('desktop-warning').style.display = 'flex';
    document.body.classList.add('no-scroll'); // Empêche le scroll
  }
});

document.getElementById('response-checkbox').addEventListener('change', function () {
  const emailField = document.getElementById('email');
  const subjectField = document.getElementById('email-subject');

  if (this.checked) {
    emailField.style.display = 'block';
    emailField.required = true;
  } else {
    emailField.style.display = 'none';
    emailField.required = false;
  }
});

document.getElementById('contact-form').addEventListener('submit', function () {
  const email = document.getElementById('email').value;
  if (document.getElementById('response-checkbox').checked && email) {
    document.getElementById('email-subject').value = `Réponse demandée par ${email}`;
  }
});
