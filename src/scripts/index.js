/* import '../styles/main.scss'; */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.nav .menu'); // Huvudmenyn
  const dropdowns = document.querySelectorAll('.dropdown');

  // Toggle den aktiva klassen vid klick på HB meny
  menuToggle.addEventListener('click', (e) => {
    const isOpen = nav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
    e.stopPropagation();
  });

  // Stänger HB menyn vid klick utanför
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Dropdown för Portfolio Items
  dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('click', (e) => {
      dropdownMenu.classList.toggle('show');
    });

    // Stänger dropdown vid klick utanför
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  });
});

// Byt tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.offsetHeight; // Tvingar ommålning

  // Uppdatera knappens text
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }

  // Spara temat i LocalStorage
  localStorage.setItem(
    'theme',
    body.classList.contains('dark-mode') ? 'dark' : 'light'
  );
});

// Kolla användarens sparade inställning
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️ Light Mode';
}

document.addEventListener('DOMContentLoaded', function () {
  var phoneNumber = '+393454171570';
  var phoneLink = document.getElementById('phone-link');

  // Uppdatera href-attributet till tel-länk
  phoneLink.setAttribute('href', 'tel:' + phoneNumber);

  // Uppdatera synlig text
  phoneLink.textContent = '📞 ' + phoneNumber + ' (Italy)';
});

getComputedStyle(document.querySelector('.nav')).height;
