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
  const imageContainer = document.getElementById('zoomable-image');

  imageContainer.addEventListener('click', function (event) {
    // Om man klickar på bilden, toggla zoom
    if (event.target.tagName === 'IMG') {
      imageContainer.classList.toggle('zoomed');
    } else {
      // Om man klickar utanför bilden, ta bort zoom
      imageContainer.classList.remove('zoomed');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const zoomContainer = document.getElementById('zoomable-image');
  const title = document.getElementById('zoom-title');

  // Uppdatera titeln beroende på skärmstorlek
  function updateTitle() {
    if (window.innerWidth <= 768) {
      title.textContent = 'Tap to zoom';
    } else {
      title.textContent = 'Zooming image on hover';
    }
  }

  updateTitle(); // Kör vid sidladdning
  window.addEventListener('resize', updateTitle); // Uppdatera vid fönsterstorlek ändring

  // Lägg till tap-funktionalitet för mobil
  zoomContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      zoomContainer.classList.toggle('zoomed');
    } else {
      zoomContainer.classList.remove('zoomed');
    }
  });
});
