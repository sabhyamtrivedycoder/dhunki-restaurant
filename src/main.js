// Dhunki Restaurant - Client Application Logic
import { menuCategories, menuItems } from './menuData.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initMenuPage();
  initGalleryFilter();
  initLightbox();
  initReservationForm();
  initBanquetForm();
});

// Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileMenuDrawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const isOpen = drawer.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });
  }
}

// Menu Page Rendering, Category Filter, and Real-Time Search
function initMenuPage() {
  const menuGrid = document.getElementById('menuGrid');
  const categoryContainer = document.getElementById('categoryTabs');
  const searchInput = document.getElementById('menuSearchInput');

  if (!menuGrid) return;

  let activeCategory = 'all';
  let searchTerm = '';

  // Render Category Tabs
  if (categoryContainer) {
    categoryContainer.innerHTML = menuCategories.map(cat => `
      <button class="category-tab-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
        ${cat.name}
      </button>
    `).join('');

    categoryContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.category-tab-btn');
      if (!btn) return;

      document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderItems();
    });
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      renderItems();
    });
  }

  function renderItems() {
    const filtered = menuItems.filter(item => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = !searchTerm || 
        item.name.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-card); border: 1px solid var(--border-light); border-radius: 4px;">
          <p style="font-size: 16px; color: var(--accent-gold-light); margin-bottom: 8px;">No dishes found matching "${searchTerm}"</p>
          <p style="font-size: 13px; color: var(--text-muted);">Try searching for another dish or choose a category above.</p>
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = filtered.map(item => `
      <div class="menu-item-card ${item.highlight ? 'highlight' : ''}">
        <div class="menu-item-top">
          <div class="menu-item-title-wrap">
            <span class="diet-indicator ${item.type}" title="${item.type}"></span>
            <h3 class="menu-item-name">${item.name}</h3>
          </div>
          <div class="menu-item-price">${item.price}</div>
        </div>
        <p class="menu-item-desc">${item.description}</p>
      </div>
    `).join('');
  }

  // Initial render
  renderItems();
}

// Gallery Filtering
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-tab-btn');
  const items = document.querySelectorAll('.gallery-item');

  if (filterBtns.length === 0 || items.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-type') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Lightbox Modal for Menu Scans & Gallery Photos
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');

  if (!modal || !modalImg) return;

  document.querySelectorAll('[data-lightbox-src]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const src = trigger.getAttribute('data-lightbox-src');
      const caption = trigger.getAttribute('data-lightbox-caption') || '';
      modalImg.src = src;
      if (modalCaption) modalCaption.textContent = caption;
      modal.classList.add('active');
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    modalImg.src = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Reservation Form Submission
function initReservationForm() {
  const form = document.getElementById('reservationForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('resName')?.value || '';
    const phone = document.getElementById('resPhone')?.value || '';
    const guests = document.getElementById('resGuests')?.value || '2';
    const date = document.getElementById('resDate')?.value || '';
    const time = document.getElementById('resTime')?.value || '';
    const occasion = document.getElementById('resOccasion')?.value || 'Dining';
    const notes = document.getElementById('resNotes')?.value || '';

    const message = `Hello Dhunki Restaurant! I would like to book a table:%0A- Name: ${encodeURIComponent(name)}%0A- Phone: ${encodeURIComponent(phone)}%0A- Guests: ${encodeURIComponent(guests)}%0A- Date: ${encodeURIComponent(date)}%0A- Time: ${encodeURIComponent(time)}%0A- Occasion: ${encodeURIComponent(occasion)}${notes ? `%0A- Special Request: ${encodeURIComponent(notes)}` : ''}`;

    // Open WhatsApp directly with the restaurant primary number: 6207858727
    const whatsappUrl = `https://wa.me/916207858727?text=${message}`;
    window.open(whatsappUrl, '_blank');

    alert(`Thank you, ${name}! Your booking details have been forwarded to Dhunki Restaurant via WhatsApp. You can also call us directly at 6207858727 or 9123401594.`);
    form.reset();
  });
}

// Banquet Inquiry Form
function initBanquetForm() {
  const form = document.getElementById('banquetForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bqName')?.value || '';
    const phone = document.getElementById('bqPhone')?.value || '';
    const eventType = document.getElementById('bqType')?.value || 'Celebration';
    const guests = document.getElementById('bqGuests')?.value || '50';
    const date = document.getElementById('bqDate')?.value || '';
    const details = document.getElementById('bqDetails')?.value || '';

    const message = `Hello Dhunki Restaurant! I am inquiring about booking your Banquet & Celebration Hall:%0A- Host Name: ${encodeURIComponent(name)}%0A- Contact Phone: ${encodeURIComponent(phone)}%0A- Event Type: ${encodeURIComponent(eventType)}%0A- Expected Guests: ${encodeURIComponent(guests)}%0A- Target Date: ${encodeURIComponent(date)}${details ? `%0A- Requirements: ${encodeURIComponent(details)}` : ''}`;

    const whatsappUrl = `https://wa.me/916207858727?text=${message}`;
    window.open(whatsappUrl, '_blank');

    alert(`Thank you, ${name}! Your banquet event inquiry has been sent to Dhunki Restaurant management. We will contact you immediately at ${phone}.`);
    form.reset();
  });
}
