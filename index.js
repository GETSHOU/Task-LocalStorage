import './index.css';

const cookiesButton = document.querySelector('.cookie-consent__button');

cookiesButton.addEventListener('click', (e) => {
    e.preventDefault();

    const { target } = e;
    const cookiesBlock = target.closest('.cookie-consent');

    cookiesBlock.classList.add('hide');

    localStorage.setItem('cookies-state', 'accepted');
});

const cookiesBlock = document.querySelector('.cookie-consent');

if (localStorage.hasOwnProperty('cookies-state')) {
    cookiesBlock.classList.add('hide');
}

