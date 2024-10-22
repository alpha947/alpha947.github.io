// const toggleButton = document.getElementById('toggle-navbar');
// const bodyElement = document.querySelector('body');

// toggleButton.addEventListener('click', function () {
//     // Si la classe auto-hide est présente, on la retire, sinon on l'ajoute
//     bodyElement.classList.toggle('auto-hide');
// });

const navbar = document.querySelector('.navbar');
const toggleNavButton = document.getElementById('toggle-nav-btn');

// Variables pour détecter les swipes
let touchStartX = 0;
let touchEndX = 0;

// Fonction pour détecter le swipe
function handleSwipe() {
    if (touchEndX < touchStartX) {
        // Swipe vers la gauche, cacher la navbar
        navbar.classList.remove('show');
        navbar.classList.add('hide');
    }

    if (touchEndX > touchStartX) {
        // Swipe vers la droite, montrer la navbar
        navbar.classList.remove('hide');
        navbar.classList.add('show');
    }
}

// Écouteur pour capturer le début du touch (glisser)
document.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

// Écouteur pour capturer la fin du touch (glisser)
document.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

// Gestion du bouton poussoir pour activer/désactiver la disparition automatique
toggleNavButton.addEventListener('click', function () {
    if (navbar.classList.contains('hide')) {
        navbar.classList.remove('hide');
        navbar.classList.add('show');
        toggleNavButton.textContent = 'Désactiver la disparition automatique';
    } else {
        navbar.classList.remove('show');
        navbar.classList.add('hide');
        toggleNavButton.textContent = 'Activer la disparition automatique';
    }
});
