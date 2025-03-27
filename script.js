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

document.addEventListener("DOMContentLoaded", function () {
  const responseCheckbox = document.getElementById("response-checkbox");
  const emailSection = document.getElementById("email-section");
  const emailInput = document.getElementById("email");
  const emailSubject = document.getElementById("email-subject");
  const form = document.getElementById("contact-form");

  // Afficher ou cacher le champ email si la case est cochée
  responseCheckbox.addEventListener("change", function () {
    if (this.checked) {
      emailSection.style.display = "block";
      emailInput.required = true;
    } else {
      emailSection.style.display = "none";
      emailInput.required = false;
    }
  });

  // Modifier l'objet du mail avant soumission
  form.addEventListener("submit", function () {
    if (responseCheckbox.checked && emailInput.value) {
      emailSubject.value = "Réponse demandée - " + emailInput.value;
    } else {
      emailSubject.value = "Nouveau message sur ALTA";
    }
  });
});