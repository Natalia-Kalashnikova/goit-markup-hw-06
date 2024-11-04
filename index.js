const sectionHeroButton = document.querySelector('.section-hero-button');
const burgerMenuButton = document.querySelector('.burger-btn');
const modalBackdrop = document.querySelector('.backdrop');
const mobileNavBackdrop = document.querySelector('.backdrop-mobile');

sectionHeroButton.addEventListener('click', () => toggleModalVisibility(modalBackdrop));
burgerMenuButton.addEventListener('click', () => toggleModalVisibility(mobileNavBackdrop));

modalBackdrop.addEventListener('click', handleBackdropClick);
mobileNavBackdrop.addEventListener('click', handleBackdropClick);

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  toggleModalVisibility(modalBackdrop); 
});

function toggleModalVisibility(element) {
  element.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll', element.classList.contains('is-open'));
}

function handleBackdropClick(event) {

  if (event.target === modalBackdrop || event.target === mobileNavBackdrop) {
    toggleModalVisibility(event.currentTarget);
  }

    const closeButton = event.target.closest('.modal-btn, .mobile-btn, .modal-button');
  if (closeButton) {
    event.preventDefault(); 
    toggleModalVisibility(event.currentTarget);
  }
}
