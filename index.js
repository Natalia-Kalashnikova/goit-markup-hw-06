const sectionHeroButton = document.querySelector('.section-hero-button');
const burgerMenuButton = document.querySelector('.burger-btn');
const modalBackdrop = document.querySelector('.backdrop');
const mobileNavBackdrop = document.querySelector('.backdrop-mobile');

sectionHeroButton.addEventListener('click', () => toggleModalVisibility(modalBackdrop));
burgerMenuButton.addEventListener('click', () => toggleModalVisibility(mobileNavBackdrop));
modalBackdrop.addEventListener('click', handleBackdropClick);
mobileNavBackdrop.addEventListener('click', handleBackdropClick);

function toggleModalVisibility(element) {
  element.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll', element.classList.contains('is-open'));
}

function handleBackdropClick(event) {
  const closeButton = event.target.closest('.modal-btn, .mobile-btn');
  if (!closeButton) return;

  const backdrop = closeButton.closest('.backdrop, .backdrop-mobile');
  toggleModalVisibility(backdrop);
}