/**
 * GLOW & GRACE — LUXURY BEAUTY SALON & SPA
 * Unified Vanilla JavaScript Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initNavbar();
  initAccordions();
  initServiceFilters();
  initGalleryLightbox();
  initBookingForm();
  initConfirmationPage();
  initAuthForms();
  initUserDashboard();
  initAdminDashboard();
  initLogoutHandler();
  initContactForm();
  initNewsletter();
});

/* ==========================================================================
   1. Data Storage & Initialization (Demo State)
   ========================================================================== */
function initStorage() {
  // Initial default services
  if (!localStorage.getItem('gg_services')) {
    const defaultServices = [
      {
        id: 'srv-1',
        title: 'Haircut and Styling',
        category: 'Hair Care',
        categoryKey: 'hair',
        price: 65,
        duration: '60 mins',
        image: 'assets/images/service-haircut.webp',
        desc: 'Consultative dry or wet precision cut, wash with botanical oils, and luxury signature blowout.'
      },
      {
        id: 'srv-2',
        title: 'Hair Coloring & Balayage',
        category: 'Hair Care',
        categoryKey: 'hair',
        price: 135,
        duration: '120 mins',
        image: 'assets/images/service-haircolor.webp',
        desc: 'Customized dimensional tone, glossing glaze, and scalp-protecting organic formulations.'
      },
      {
        id: 'srv-3',
        title: 'Hair Spa & Scalp Therapy',
        category: 'Hair Care',
        categoryKey: 'hair',
        price: 85,
        duration: '75 mins',
        image: 'assets/images/service-hairspa.webp',
        desc: 'Intensive restorative hair mask, warm steam infusion, and rejuvenating acupressure scalp massage.'
      },
      {
        id: 'srv-4',
        title: 'Facial Treatments & Peels',
        category: 'Skin & Facial',
        categoryKey: 'skin',
        price: 95,
        duration: '75 mins',
        image: 'assets/images/service-facial.webp',
        desc: 'Gentle fruit-enzyme exfoliation, pore cleansing, lymphatic drainage, and antioxidant mask.'
      },
      {
        id: 'srv-5',
        title: 'Skin Care & Hydration Therapy',
        category: 'Skin & Facial',
        categoryKey: 'skin',
        price: 110,
        duration: '90 mins',
        image: 'assets/images/service-skincare.webp',
        desc: 'Deep dermal infusion, hyaluronic moisture surge, and soothing botanical cool globes.'
      },
      {
        id: 'srv-6',
        title: 'Makeup Services & Glamour',
        category: 'Makeup & Bridal',
        categoryKey: 'makeup',
        price: 80,
        duration: '60 mins',
        image: 'assets/images/service-makeup.webp',
        desc: 'Red carpet or event beauty styling featuring long-wearing luxury vegan pigments and lash accents.'
      },
      {
        id: 'srv-7',
        title: 'Bridal Makeup Artistry',
        category: 'Makeup & Bridal',
        categoryKey: 'makeup',
        price: 220,
        duration: '150 mins',
        image: 'assets/images/service-bridal.webp',
        desc: 'Masterclass bridal glam, skin primer prep, high-definition airbrushing, and complete veil setting.'
      },
      {
        id: 'srv-8',
        title: 'Manicure and Pedicure',
        category: 'Nail Care',
        categoryKey: 'nails',
        price: 60,
        duration: '70 mins',
        image: 'assets/images/service-manicure.webp',
        desc: 'Nourishing rose-water soak, cuticle softening, precision nail shaping, and relaxing hand-arm massage.'
      },
      {
        id: 'srv-9',
        title: 'Nail Art & Gel Extensions',
        category: 'Nail Care',
        categoryKey: 'nails',
        price: 75,
        duration: '80 mins',
        image: 'assets/images/service-nailart.webp',
        desc: 'Handcrafted gold foil details, chrome glazing, minimalist line art, and long-lasting gel overlays.'
      },
      {
        id: 'srv-10',
        title: 'Relaxing Body Massage',
        category: 'Body & Massage',
        categoryKey: 'spa',
        price: 120,
        duration: '90 mins',
        image: 'assets/images/service-massage.webp',
        desc: 'Harmonious Swedish and light deep-tissue bodywork using warmed sweet almond oil.'
      },
      {
        id: 'srv-11',
        title: 'Aromatherapy Sanctuary',
        category: 'Body & Massage',
        categoryKey: 'spa',
        price: 130,
        duration: '90 mins',
        image: 'assets/images/service-aromatherapy.webp',
        desc: 'Sensory journey featuring pure lavender, bergamot, and cedarwood oils tailored to your mood.'
      },
      {
        id: 'srv-12',
        title: 'Body Scrubs & Cocoon Wraps',
        category: 'Body & Massage',
        categoryKey: 'spa',
        price: 115,
        duration: '80 mins',
        image: 'assets/images/service-bodyscrub.webp',
        desc: 'Himalayan salt and wildflower scrub followed by a warm velvet thermal body wrap.'
      }
    ];
    localStorage.setItem('gg_services', JSON.stringify(defaultServices));
  }

  // Initial demo appointments
  if (!localStorage.getItem('gg_appointments')) {
    const defaultAppointments = [
      {
        id: 'GG-84192',
        customerName: 'Camilla Davenport',
        email: 'camilla.d@example.com',
        phone: '9876543210',
        service: 'Facial Treatments & Peels',
        package: 'None',
        staff: 'Priya Sharma (Senior Aesthetician)',
        date: '2026-11-02',
        time: '10:30 AM',
        price: '$95',
        status: 'Confirmed',
        notes: 'Sensitive skin near cheekbones.'
      },
      {
        id: 'GG-73019',
        customerName: 'Aurelia Mendez',
        email: 'aurelia.m@example.com',
        phone: '9123456789',
        service: 'Bridal Makeup Artistry',
        package: 'Bridal Radiance Package',
        staff: 'Sophia Vance (Bridal Specialist)',
        date: '2026-11-08',
        time: '02:00 PM',
        price: '$280',
        status: 'Pending',
        notes: 'Pre-wedding trial session.'
      },
      {
        id: 'GG-61248',
        customerName: 'Seraphina Lin',
        email: 'seraphina.lin@example.com',
        phone: '9988776655',
        service: 'Relaxing Body Massage',
        package: 'Relax & Rejuvenate',
        staff: 'Chloe Laurent (Massage Therapist)',
        date: '2026-10-29',
        time: '03:30 PM',
        price: '$165',
        status: 'Confirmed',
        notes: 'Focus on lower back tension.'
      },
      {
        id: 'GG-50821',
        customerName: 'Camilla Davenport',
        email: 'camilla.d@example.com',
        phone: '9876543210',
        service: 'Haircut and Styling',
        package: 'None',
        staff: 'Elena Rostova (Master Stylist)',
        date: '2026-10-15',
        time: '11:00 AM',
        price: '$65',
        status: 'Completed',
        notes: 'Regular trim and blowout.'
      }
    ];
    localStorage.setItem('gg_appointments', JSON.stringify(defaultAppointments));
  }
}

/* ==========================================================================
   2. Sticky Navigation Bar & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-drawer-backdrop');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  // Sticky navbar shadow and height reduction on scroll
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // Highlight active link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Mobile Drawer Toggle
  function openDrawer() {
    if (mobileDrawer && backdrop) {
      mobileDrawer.classList.add('active');
      backdrop.classList.add('active');
      hamburger?.classList.add('active');
      hamburger?.setAttribute('aria-expanded', 'true');
      document.body.classList.add('drawer-open');
    }
  }

  function closeDrawer() {
    if (mobileDrawer && backdrop) {
      mobileDrawer.classList.remove('active');
      backdrop.classList.remove('active');
      hamburger?.classList.remove('active');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('drawer-open');
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeDrawer();
  });

  backdrop?.addEventListener('click', (e) => {
    e.preventDefault();
    closeDrawer();
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeLightbox();
      closeModal();
    }
  });

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileDrawer && mobileDrawer.classList.contains('active')) {
      if (!mobileDrawer.contains(e.target) && hamburger && !hamburger.contains(e.target)) {
        closeDrawer();
      }
    }
  });

  // Close drawer when any link or button inside drawer is clicked
  const drawerLinks = document.querySelectorAll('.mobile-drawer a, .mobile-drawer button:not(.mobile-drawer-close)');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   3. Service Search & Category Filtering
   ========================================================================== */
function initServiceFilters() {
  const searchInput = document.getElementById('service-search');
  const filterPills = document.querySelectorAll('.filter-pill[data-category]');
  const serviceCards = document.querySelectorAll('.service-card[data-category]');
  const countDisplay = document.getElementById('services-count');
  const emptyState = document.getElementById('services-empty-state');

  if (!serviceCards.length) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function filterCards() {
    let visibleCount = 0;

    serviceCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const title = card.querySelector('.service-card-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.service-card-desc')?.textContent.toLowerCase() || '';

      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch = title.includes(searchTerm) || desc.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countDisplay) {
      countDisplay.textContent = `Showing ${visibleCount} of ${serviceCards.length} services`;
    }

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category') || 'all';
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }
}

/* ==========================================================================
   4. Gallery Category Filtering & Lightbox Modal
   ========================================================================== */
let currentLightboxIndex = 0;
let visibleGalleryItems = [];

function initGalleryLightbox() {
  const galleryPills = document.querySelectorAll('.gallery-pill[data-gallery-category]');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  if (!galleryItems.length) return;

  // Initial visible array
  visibleGalleryItems = Array.from(galleryItems);

  // Category Filtering
  galleryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      galleryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-gallery-category');

      visibleGalleryItems = [];
      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-gallery-category');
        if (cat === 'all' || itemCat === cat) {
          item.style.display = 'block';
          visibleGalleryItems.push(item);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Open Lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const index = visibleGalleryItems.indexOf(item);
      if (index !== -1) {
        openLightboxAt(index);
      }
    });
  });

  function openLightboxAt(index) {
    if (!lightbox || !visibleGalleryItems[index]) return;
    currentLightboxIndex = index;
    const targetItem = visibleGalleryItems[index];
    const imgEl = targetItem.querySelector('img');
    const captionEl = targetItem.querySelector('.gallery-caption');

    if (lightboxImg && imgEl) {
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt || 'Beauty Salon Image';
    }
    if (lightboxCaption && captionEl) {
      lightboxCaption.textContent = captionEl.textContent;
    }
    lightbox.classList.add('active');
    document.body.classList.add('drawer-open');
  }

  function showNextImage() {
    if (!visibleGalleryItems.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % visibleGalleryItems.length;
    openLightboxAt(currentLightboxIndex);
  }

  function showPrevImage() {
    if (!visibleGalleryItems.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
    openLightboxAt(currentLightboxIndex);
  }

  closeBtn?.addEventListener('click', closeLightbox);
  nextBtn?.addEventListener('click', showNextImage);
  prevBtn?.addEventListener('click', showPrevImage);

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    }
  });
}

function closeLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox && lightbox.classList.contains('active')) {
    lightbox.classList.remove('active');
    document.body.classList.remove('drawer-open');
  }
}

/* ==========================================================================
   5. Appointment Booking Form
   ========================================================================== */
function initBookingForm() {
  const bookingForm = document.getElementById('appointment-booking-form');
  if (!bookingForm) return;

  const nameInput = document.getElementById('booking-name');
  const emailInput = document.getElementById('booking-email');
  const phoneInput = document.getElementById('booking-phone');
  const serviceSelect = document.getElementById('booking-service');
  const packageSelect = document.getElementById('booking-package');
  const dateInput = document.getElementById('booking-date');
  const staffSelect = document.getElementById('booking-staff');
  const requestsInput = document.getElementById('booking-requests');
  const slotButtons = document.querySelectorAll('.time-slot-btn');
  const selectedTimeInput = document.getElementById('booking-selected-time');

  // Prevent past dates dynamically
  const today = new Date().toISOString().split('T')[0];
  if (dateInput) {
    dateInput.min = today;
  }

  // Pre-fill service or package from URL parameters (e.g. ?service=Facial&package=Bridal)
  const params = new URLSearchParams(window.location.search);
  const paramService = params.get('service');
  const paramPackage = params.get('package');

  if (paramService && serviceSelect) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.toLowerCase().includes(paramService.toLowerCase())) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (paramPackage && packageSelect) {
    for (let i = 0; i < packageSelect.options.length; i++) {
      if (packageSelect.options[i].text.toLowerCase().includes(paramPackage.toLowerCase())) {
        packageSelect.selectedIndex = i;
        break;
      }
    }
  }

  // Time Slot Selection logic
  slotButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      slotButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (selectedTimeInput) {
        selectedTimeInput.value = btn.getAttribute('data-time') || btn.textContent.trim();
        validateField(selectedTimeInput, 'time-error', !!selectedTimeInput.value);
      }
    });
  });

  // Validation Helpers
  function validateField(inputEl, errorId, isValid) {
    const errorEl = document.getElementById(errorId);
    if (!isValid) {
      inputEl?.classList.add('error');
      if (errorEl) errorEl.classList.add('visible');
      return false;
    } else {
      inputEl?.classList.remove('error');
      if (errorEl) errorEl.classList.remove('visible');
      return true;
    }
  }

  // Real-time blur checks
  nameInput?.addEventListener('blur', () => {
    const valid = /^[a-zA-Z\s]{2,50}$/.test(nameInput.value.trim());
    validateField(nameInput, 'name-error', valid);
  });

  emailInput?.addEventListener('blur', () => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
    validateField(emailInput, 'email-error', valid);
  });

  phoneInput?.addEventListener('blur', () => {
    const valid = /^\d{10}$/.test(phoneInput.value.trim());
    validateField(phoneInput, 'phone-error', valid);
  });

  dateInput?.addEventListener('change', () => {
    const chosen = dateInput.value;
    const valid = chosen && chosen >= today;
    validateField(dateInput, 'date-error', valid);
  });

  serviceSelect?.addEventListener('change', () => {
    validateField(serviceSelect, 'service-error', !!serviceSelect.value);
  });

  // On Submit
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = /^[a-zA-Z\s]{2,50}$/.test(nameInput?.value.trim() || '');
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput?.value.trim() || '');
    const isPhoneValid = /^\d{10}$/.test(phoneInput?.value.trim() || '');
    const isServiceValid = !!serviceSelect?.value;
    const isDateValid = !!dateInput?.value && dateInput.value >= today;
    const isTimeValid = !!selectedTimeInput?.value;

    validateField(nameInput, 'name-error', isNameValid);
    validateField(emailInput, 'email-error', isEmailValid);
    validateField(phoneInput, 'phone-error', isPhoneValid);
    validateField(serviceSelect, 'service-error', isServiceValid);
    validateField(dateInput, 'date-error', isDateValid);
    validateField(selectedTimeInput, 'time-error', isTimeValid);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isServiceValid || !isDateValid || !isTimeValid) {
      showToast('Please correct the highlighted fields before submitting.', 'danger');
      return;
    }

    // Generate unique reference
    const refCode = 'GG-' + Math.floor(10000 + Math.random() * 90000);
    const serviceOption = serviceSelect.options[serviceSelect.selectedIndex]?.text || 'Beauty Service';
    const packageOption = packageSelect?.value ? packageSelect.options[packageSelect.selectedIndex]?.text : 'None';
    const staffOption = staffSelect?.value ? staffSelect.options[staffSelect.selectedIndex]?.text : 'First Available Specialist';

    const newBooking = {
      id: refCode,
      customerName: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      service: serviceOption,
      package: packageOption,
      staff: staffOption,
      date: dateInput.value,
      time: selectedTimeInput.value,
      price: '$95 (Sample Estimated Price)',
      status: 'Confirmed',
      notes: requestsInput?.value.trim() || 'No special requests provided.'
    };

    // Save to appointments
    const stored = JSON.parse(localStorage.getItem('gg_appointments') || '[]');
    stored.unshift(newBooking);
    localStorage.setItem('gg_appointments', JSON.stringify(stored));
    localStorage.setItem('gg_latest_booking', JSON.stringify(newBooking));

    // Redirect to confirmation screen
    window.location.href = `booking-confirmation.html?ref=${refCode}`;
  });
}

/* ==========================================================================
   6. Booking Confirmation Page
   ========================================================================== */
function initConfirmationPage() {
  const summaryBox = document.getElementById('confirmation-summary-details');
  if (!summaryBox) return;

  const params = new URLSearchParams(window.location.search);
  const refCode = params.get('ref');

  let booking = null;
  const stored = JSON.parse(localStorage.getItem('gg_appointments') || '[]');

  if (refCode) {
    booking = stored.find(b => b.id === refCode);
  }
  if (!booking) {
    booking = JSON.parse(localStorage.getItem('gg_latest_booking') || 'null');
  }

  if (booking) {
    document.getElementById('conf-ref-code').textContent = booking.id;
    document.getElementById('conf-name').textContent = booking.customerName;
    document.getElementById('conf-email').textContent = booking.email;
    document.getElementById('conf-phone').textContent = booking.phone;
    document.getElementById('conf-service').textContent = booking.service;
    document.getElementById('conf-package').textContent = booking.package || 'None';
    document.getElementById('conf-date').textContent = booking.date;
    document.getElementById('conf-time').textContent = booking.time;
    document.getElementById('conf-staff').textContent = booking.staff || 'First Available Specialist';
    document.getElementById('conf-notes').textContent = booking.notes || 'None';
  } else {
    document.getElementById('conf-ref-code').textContent = 'GG-DEMO01';
  }

  // Print button
  const printBtn = document.getElementById('print-confirmation-btn');
  printBtn?.addEventListener('click', () => {
    window.print();
  });
}

/* ==========================================================================
   7. Authentication (Login & Registration Demo)
   ========================================================================== */
function initAuthForms() {
  // Password eye toggles
  const toggleBtns = document.querySelectorAll('.password-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const input = btn.previousElementSibling;
      if (input && input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = `
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        `;
      } else if (input) {
        input.type = 'password';
        btn.innerHTML = `
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        `;
      }
    });
  });

  // Demo auto-fill buttons on Login page
  const fillUserBtn = document.getElementById('fill-demo-user');
  const fillAdminBtn = document.getElementById('fill-demo-admin');
  const loginEmail = document.getElementById('login-email');
  const loginPass = document.getElementById('login-password');
  const loginRole = document.getElementById('login-role');

  fillUserBtn?.addEventListener('click', () => {
    if (loginEmail) loginEmail.value = 'client@glowandgrace.com';
    if (loginPass) loginPass.value = 'GlowClient2026';
    if (loginRole) loginRole.value = 'user';
    showToast('Demo Client credentials filled!', 'info');
  });

  fillAdminBtn?.addEventListener('click', () => {
    if (loginEmail) loginEmail.value = 'manager@glowandgrace.com';
    if (loginPass) loginPass.value = 'AdminGrace2026';
    if (loginRole) loginRole.value = 'admin';
    showToast('Demo Admin credentials filled!', 'info');
  });

  // Login submission
  const loginForm = document.getElementById('login-form');
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginEmail?.value.trim();
    const pass = loginPass?.value;
    const role = loginRole?.value || 'user';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please provide a valid email address.', 'danger');
      return;
    }
    if (!pass || pass.length < 6) {
      showToast('Password must be at least 6 characters.', 'danger');
      return;
    }

    // Check registered accounts or derive clean name
    const registeredUsers = JSON.parse(localStorage.getItem('gg_users') || '[]');
    const existing = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    let userName = '';
    let userPhone = '';

    if (existing) {
      userName = existing.name;
      userPhone = existing.phone || '';
    } else if (email === 'client@glowandgrace.com') {
      userName = 'Camilla Davenport';
      userPhone = '9876543210';
    } else if (email === 'manager@glowandgrace.com') {
      userName = 'Sophia Sterling';
      userPhone = '9123456780';
    } else {
      // Derive clean name from email
      const userPart = email.split('@')[0];
      const cleanParts = userPart.split(/[._-]/).filter(Boolean);
      userName = cleanParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
      if (!userName) userName = role === 'admin' ? 'Sophia Sterling' : 'Valued Client';
    }

    const currentUser = {
      name: userName,
      email: email,
      phone: userPhone,
      role: role
    };
    localStorage.setItem('gg_currentUser', JSON.stringify(currentUser));

    showToast(`Welcome back, ${userName}! Logging into ${role === 'admin' ? 'Admin' : 'User'} Portal...`, 'success');

    setTimeout(() => {
      window.location.href = role === 'admin' ? 'admin-dashboard.html' : 'user-dashboard.html';
    }, 800);
  });

  // Registration submission
  const regForm = document.getElementById('register-form');
  regForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name')?.value.trim();
    const email = document.getElementById('reg-email')?.value.trim();
    const phone = document.getElementById('reg-phone')?.value.trim();
    const pass = document.getElementById('reg-password')?.value;
    const confirmPass = document.getElementById('reg-confirm-password')?.value;
    const role = document.getElementById('reg-role')?.value || 'user';

    if (!name || !/^[a-zA-Z\s]{2,50}$/.test(name)) {
      showToast('Please enter a valid full name (letters only).', 'danger');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.', 'danger');
      return;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      showToast('Mobile number must be exactly 10 digits.', 'danger');
      return;
    }
    if (!pass || pass.length < 6) {
      showToast('Password must be at least 6 characters.', 'danger');
      return;
    }
    if (pass !== confirmPass) {
      showToast('Passwords do not match.', 'danger');
      return;
    }

    const newUser = { name, email, phone, role };
    localStorage.setItem('gg_currentUser', JSON.stringify(newUser));

    const registeredUsers = JSON.parse(localStorage.getItem('gg_users') || '[]');
    const idx = registeredUsers.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    if (idx >= 0) {
      registeredUsers[idx] = newUser;
    } else {
      registeredUsers.push(newUser);
    }
    localStorage.setItem('gg_users', JSON.stringify(registeredUsers));

    showToast(`Registration successful! Welcome, ${name}.`, 'success');
    setTimeout(() => {
      window.location.href = role === 'admin' ? 'admin-dashboard.html' : 'user-dashboard.html';
    }, 900);
  });
}

/* ==========================================================================
   8. User Dashboard
   ========================================================================== */
function initUserDashboard() {
  const userDash = document.querySelector('.user-dashboard-view');
  if (!userDash) return;

  // Sidebar toggle on mobile
  const sidebarToggle = document.querySelector('.dashboard-mobile-toggle');
  const sidebar = document.querySelector('.dashboard-sidebar');
  const backdrop = document.querySelector('.dashboard-sidebar-backdrop');
  const closeBtn = document.querySelector('.dashboard-sidebar-close');

  function openSidebar() {
    sidebar?.classList.add('active');
    backdrop?.classList.add('active');
    sidebarToggle?.classList.add('active');
    sidebarToggle?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('sidebar-open');
  }

  function closeSidebar() {
    sidebar?.classList.remove('active');
    backdrop?.classList.remove('active');
    sidebarToggle?.classList.remove('active');
    sidebarToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('sidebar-open');
  }

  sidebarToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (sidebar?.classList.contains('active')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeSidebar();
  });

  backdrop?.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  document.addEventListener('click', (e) => {
    if (sidebar && sidebar.classList.contains('active')) {
      if (!sidebar.contains(e.target) && sidebarToggle && !sidebarToggle.contains(e.target)) {
        closeSidebar();
      }
    }
  });

  // Close sidebar on link click
  const navBtns = document.querySelectorAll('.user-nav-btn');
  const tabPanels = document.querySelectorAll('.dashboard-tab-panel');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabPanels.forEach(panel => {
        panel.style.display = panel.id === targetTab ? 'block' : 'none';
      });

      closeSidebar();
    });
  });

  // Dynamic User Credentials Display
  let currentUser = JSON.parse(localStorage.getItem('gg_currentUser') || 'null');
  if (!currentUser) {
    currentUser = {
      name: 'Camilla Davenport',
      email: 'client@glowandgrace.com',
      phone: '9876543210',
      role: 'user'
    };
    localStorage.setItem('gg_currentUser', JSON.stringify(currentUser));
  }

  function applyUserCredentials(user) {
    if (!user) return;
    const fullName = user.name || (user.email ? user.email.split('@')[0] : 'Valued Guest');
    const firstName = fullName.split(' ')[0] || fullName;
    const initials = fullName.split(' ').filter(Boolean).map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'GG';
    const roleTitle = user.role === 'admin' ? 'Sanctuary Director' : 'Verified VIP Client';

    // 1. Credentials Hero Card Elements (Matching Reference)
    const welcomeNameEl = document.getElementById('credentials-welcome-name');
    if (welcomeNameEl) welcomeNameEl.textContent = fullName;

    const credPillName = document.getElementById('cred-pill-name');
    if (credPillName) credPillName.textContent = fullName;

    const credPillEmail = document.getElementById('cred-pill-email');
    if (credPillEmail) credPillEmail.textContent = user.email || 'client@glowandgrace.com';

    const credPillRole = document.getElementById('cred-pill-role');
    if (credPillRole) credPillRole.textContent = roleTitle;

    // 2. Sidebar Display Name, Tier & Initials
    const displayName = document.getElementById('user-display-name');
    if (displayName) displayName.textContent = fullName;

    const displayTier = document.getElementById('user-display-tier');
    if (displayTier) displayTier.textContent = roleTitle;

    const avatarInitials = document.getElementById('user-avatar-initials');
    if (avatarInitials) avatarInitials.textContent = initials;

    // 3. Profile Tab Form Inputs
    const profileName = document.getElementById('user-profile-name');
    if (profileName) profileName.value = fullName;
    const profileEmail = document.getElementById('user-profile-email');
    if (profileEmail) profileEmail.value = user.email || '';
    const profilePhone = document.getElementById('user-profile-phone');
    if (profilePhone) profilePhone.value = user.phone || '9876543210';
  }

  applyUserCredentials(currentUser);

  // Hook credentials card Account Settings button
  const credSettingsBtn = document.getElementById('cred-settings-btn');
  credSettingsBtn?.addEventListener('click', () => {
    const settingsNavBtn = document.querySelector('.user-nav-btn[data-tab="tab-settings"]');
    if (settingsNavBtn) settingsNavBtn.click();
  });

  // Profile Form Submission to update credentials
  const profileForm = document.getElementById('user-profile-form');
  profileForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const updatedName = document.getElementById('user-profile-name')?.value.trim();
    const updatedEmail = document.getElementById('user-profile-email')?.value.trim();
    const updatedPhone = document.getElementById('user-profile-phone')?.value.trim();

    if (currentUser) {
      if (updatedName) currentUser.name = updatedName;
      if (updatedEmail) currentUser.email = updatedEmail;
      if (updatedPhone) currentUser.phone = updatedPhone;
      localStorage.setItem('gg_currentUser', JSON.stringify(currentUser));
      applyUserCredentials(currentUser);
    }
    showToast('Profile preferences updated!', 'success');
  });

  // Render User Appointments
  renderUserAppointments();

  // Cancel Appointment Confirmation Modal logic
  const cancelModal = document.getElementById('cancel-appointment-modal');
  const confirmCancelBtn = document.getElementById('confirm-cancel-appointment-btn');
  const closeCancelBtn = document.getElementById('close-cancel-modal-btn');
  let appointmentToCancelId = null;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.cancel-user-booking-btn');
    if (btn) {
      appointmentToCancelId = btn.getAttribute('data-id');
      const serviceName = btn.getAttribute('data-service') || 'this service';
      const promptEl = document.getElementById('cancel-modal-service-name');
      if (promptEl) promptEl.textContent = serviceName;
      if (cancelModal) cancelModal.classList.add('active');
    }
  });

  closeCancelBtn?.addEventListener('click', () => {
    cancelModal?.classList.remove('active');
    appointmentToCancelId = null;
  });

  confirmCancelBtn?.addEventListener('click', () => {
    if (appointmentToCancelId) {
      const stored = JSON.parse(localStorage.getItem('gg_appointments') || '[]');
      const target = stored.find(a => a.id === appointmentToCancelId);
      if (target) {
        target.status = 'Cancelled';
        localStorage.setItem('gg_appointments', JSON.stringify(stored));
        showToast(`Appointment ${appointmentToCancelId} has been cancelled.`, 'info');
        renderUserAppointments();
      }
    }
    cancelModal?.classList.remove('active');
    appointmentToCancelId = null;
  });

}

function initLogoutHandler() {
  document.addEventListener('click', (e) => {
    const logoutBtn = e.target.closest('.dashboard-logout-btn');
    if (logoutBtn) {
      e.preventDefault();
      localStorage.removeItem('gg_currentUser');
      localStorage.removeItem('gg_adminLoggedIn');
      showToast('Logged out successfully.', 'info');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 500);
    }
  });
}

function renderUserAppointments() {
  const containers = document.querySelectorAll('#user-appointments-list, #user-all-appointments-list');
  const upcomingContainer = document.getElementById('user-upcoming-list');
  const historyContainer = document.getElementById('user-history-list');

  const stored = JSON.parse(localStorage.getItem('gg_appointments') || '[]');

  if (containers.length) {
    if (stored.length === 0) {
      containers.forEach(c => {
        c.innerHTML = '<tr><td colspan="6" class="text-center" style="padding: 2rem;">No appointments found. <a href="booking.html" class="text-gold" style="font-weight:600;">Book your first session!</a></td></tr>';
      });
      return;
    }

    const html = stored.map(apt => {
      let badgeClass = 'badge-gold';
      if (apt.status === 'Confirmed') badgeClass = 'badge-success';
      if (apt.status === 'Cancelled') badgeClass = 'badge-danger';
      if (apt.status === 'Completed') badgeClass = 'badge-blush';

      const canCancel = (apt.status === 'Confirmed' || apt.status === 'Pending');

      return `
        <tr>
          <td>
            <strong>${apt.id}</strong><br>
            <span style="font-size:0.8rem; color:var(--color-text-light);">${apt.package !== 'None' ? apt.package : 'Individual Treatment'}</span>
          </td>
          <td><strong>${apt.service}</strong></td>
          <td>${apt.staff || 'Assigned Specialist'}</td>
          <td>${apt.date}<br><small style="color:var(--color-text-light);">${apt.time}</small></td>
          <td><span class="badge ${badgeClass}">${apt.status}</span></td>
          <td>
            ${canCancel ? `<button class="btn btn-sm btn-danger cancel-user-booking-btn" data-id="${apt.id}" data-service="${apt.service}">Cancel</button>` : `<span style="font-size:0.85rem; color:var(--color-text-light);">—</span>`}
          </td>
        </tr>
      `;
    }).join('');
    containers.forEach(c => { c.innerHTML = html; });
  }

  // Upcoming
  if (upcomingContainer) {
    const upcoming = stored.filter(a => a.status === 'Confirmed' || a.status === 'Pending');
    upcomingContainer.innerHTML = upcoming.length ? upcoming.map(apt => `
      <div class="user-booking-item">
        <div class="user-booking-item-header">
          <h4 style="margin:0;">${apt.service}</h4>
          <span class="badge badge-success">${apt.status}</span>
        </div>
        <p style="margin:0.5rem 0 0.75rem 0; font-size:0.9rem;">With ${apt.staff} &bull; ${apt.date} at ${apt.time}</p>
        <button class="btn btn-sm btn-danger cancel-user-booking-btn" data-id="${apt.id}" data-service="${apt.service}">Cancel Booking</button>
      </div>
    `).join('') : '<p>No upcoming appointments currently scheduled.</p>';
  }

  // History
  if (historyContainer) {
    const history = stored.filter(a => a.status === 'Completed' || a.status === 'Cancelled');
    historyContainer.innerHTML = history.length ? history.map(apt => `
      <div class="user-booking-item" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
        <div>
          <h5 style="margin:0;">${apt.service} (${apt.id})</h5>
          <span style="font-size:0.85rem; color:var(--color-text-light);">${apt.date} at ${apt.time} &bull; ${apt.staff}</span>
        </div>
        <span class="badge ${apt.status === 'Completed' ? 'badge-blush' : 'badge-danger'}">${apt.status}</span>
      </div>
    `).join('') : '<p>No past appointments recorded yet.</p>';
  }
}

/* ==========================================================================
   9. Admin Dashboard (CRUD for Services, Manage Bookings)
   ========================================================================== */
function initAdminDashboard() {
  const adminDash = document.querySelector('.admin-dashboard-view');
  if (!adminDash) return;

  // Sidebar toggle on mobile
  const sidebarToggle = document.querySelector('.dashboard-mobile-toggle');
  const sidebar = document.querySelector('.dashboard-sidebar');
  const backdrop = document.querySelector('.dashboard-sidebar-backdrop');
  const closeBtn = document.querySelector('.dashboard-sidebar-close');

  function openSidebar() {
    sidebar?.classList.add('active');
    backdrop?.classList.add('active');
    sidebarToggle?.classList.add('active');
    sidebarToggle?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('sidebar-open');
  }

  function closeSidebar() {
    sidebar?.classList.remove('active');
    backdrop?.classList.remove('active');
    sidebarToggle?.classList.remove('active');
    sidebarToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('sidebar-open');
  }

  sidebarToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (sidebar?.classList.contains('active')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeSidebar();
  });

  backdrop?.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  document.addEventListener('click', (e) => {
    if (sidebar && sidebar.classList.contains('active')) {
      if (!sidebar.contains(e.target) && sidebarToggle && !sidebarToggle.contains(e.target)) {
        closeSidebar();
      }
    }
  });

  // Nav tab switching
  const adminNavBtns = document.querySelectorAll('.admin-nav-btn');
  const adminPanels = document.querySelectorAll('.admin-tab-panel');

  adminNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      adminNavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      adminPanels.forEach(panel => {
        panel.style.display = panel.id === targetTab ? 'block' : 'none';
      });

      closeSidebar();
    });
  });

  // Dynamic Admin Credentials Display
  const adminUser = JSON.parse(localStorage.getItem('gg_currentUser') || 'null');
  if (adminUser) {
    const adminName = adminUser.name || 'Sophia Sterling';
    const adminEmail = adminUser.email || 'manager@glowandgrace.com';
    const adminInitials = adminName.split(' ').filter(Boolean).map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'SS';

    const welcomeName = document.getElementById('admin-credentials-welcome-name');
    if (welcomeName) welcomeName.textContent = adminName;
    const pillName = document.getElementById('admin-cred-pill-name');
    if (pillName) pillName.textContent = adminName;
    const pillEmail = document.getElementById('admin-cred-pill-email');
    if (pillEmail) pillEmail.textContent = adminEmail;

    const displayName = document.getElementById('admin-display-name') || document.querySelector('.admin-dashboard-view .dashboard-user-info h4');
    if (displayName) displayName.textContent = adminName;
    const avatarInitials = document.getElementById('admin-avatar-initials') || document.querySelector('.admin-dashboard-view .dashboard-avatar');
    if (avatarInitials) avatarInitials.textContent = adminInitials;
  }

  const adminCredSettingsBtn = document.getElementById('admin-cred-settings-btn');
  adminCredSettingsBtn?.addEventListener('click', () => {
    const settingsNavBtn = document.querySelector('.admin-nav-btn[data-tab="adm-settings"]');
    if (settingsNavBtn) settingsNavBtn.click();
  });

  renderAdminAppointments();
  renderAdminServices();

  // Status Filter for Appointments
  const statusFilterSelect = document.getElementById('admin-status-filter');
  statusFilterSelect?.addEventListener('change', (e) => {
    renderAdminAppointments(e.target.value);
  });

  // Appointment Status Change handler
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('admin-appointment-status-select')) {
      const aptId = e.target.getAttribute('data-id');
      const newStatus = e.target.value;
      const stored = JSON.parse(localStorage.getItem('gg_appointments') || '[]');
      const target = stored.find(a => a.id === aptId);
      if (target) {
        target.status = newStatus;
        localStorage.setItem('gg_appointments', JSON.stringify(stored));
        showToast(`Appointment ${aptId} status updated to "${newStatus}"`, 'success');
        renderAdminAppointments(statusFilterSelect?.value || 'all');
      }
    }
  });

  // Delete Appointment Dialog
  const deleteModal = document.getElementById('admin-delete-modal');
  const confirmDeleteBtn = document.getElementById('confirm-delete-action-btn');
  const closeDeleteBtn = document.getElementById('close-delete-modal-btn');
  let pendingDeleteType = null;
  let pendingDeleteId = null;

  document.addEventListener('click', (e) => {
    const deleteAptBtn = e.target.closest('.admin-delete-apt-btn');
    if (deleteAptBtn) {
      pendingDeleteType = 'appointment';
      pendingDeleteId = deleteAptBtn.getAttribute('data-id');
      const msg = document.getElementById('admin-delete-modal-msg');
      if (msg) msg.textContent = `Are you sure you want to permanently delete appointment record ${pendingDeleteId}?`;
      deleteModal?.classList.add('active');
    }

    const deleteSrvBtn = e.target.closest('.admin-delete-srv-btn');
    if (deleteSrvBtn) {
      pendingDeleteType = 'service';
      pendingDeleteId = deleteSrvBtn.getAttribute('data-id');
      const msg = document.getElementById('admin-delete-modal-msg');
      if (msg) msg.textContent = `Are you sure you want to remove this service from the catalog?`;
      deleteModal?.classList.add('active');
    }
  });

  closeDeleteBtn?.addEventListener('click', () => {
    deleteModal?.classList.remove('active');
    pendingDeleteType = null;
    pendingDeleteId = null;
  });

  confirmDeleteBtn?.addEventListener('click', () => {
    if (pendingDeleteType === 'appointment' && pendingDeleteId) {
      let stored = JSON.parse(localStorage.getItem('gg_appointments') || '[]');
      stored = stored.filter(a => a.id !== pendingDeleteId);
      localStorage.setItem('gg_appointments', JSON.stringify(stored));
      showToast(`Appointment record ${pendingDeleteId} removed.`, 'info');
      renderAdminAppointments(statusFilterSelect?.value || 'all');
    } else if (pendingDeleteType === 'service' && pendingDeleteId) {
      let services = JSON.parse(localStorage.getItem('gg_services') || '[]');
      services = services.filter(s => s.id !== pendingDeleteId);
      localStorage.setItem('gg_services', JSON.stringify(services));
      showToast('Service removed successfully.', 'info');
      renderAdminServices();
    }

    deleteModal?.classList.remove('active');
    pendingDeleteType = null;
    pendingDeleteId = null;
  });

  // Add / Edit Service Modal logic
  const serviceModal = document.getElementById('admin-service-modal');
  const openAddServiceBtn = document.getElementById('admin-add-service-btn');
  const closeServiceModalBtn = document.getElementById('close-service-modal-btn');
  const serviceForm = document.getElementById('admin-service-form');

  openAddServiceBtn?.addEventListener('click', () => {
    document.getElementById('service-modal-title').textContent = 'Add New Luxury Service';
    serviceForm.reset();
    document.getElementById('service-edit-id').value = '';
    serviceModal?.classList.add('active');
  });

  closeServiceModalBtn?.addEventListener('click', () => {
    serviceModal?.classList.remove('active');
  });

  // Edit Service Click
  document.addEventListener('click', (e) => {
    const editBtn = e.target.closest('.admin-edit-srv-btn');
    if (editBtn) {
      const srvId = editBtn.getAttribute('data-id');
      const services = JSON.parse(localStorage.getItem('gg_services') || '[]');
      const srv = services.find(s => s.id === srvId);
      if (srv) {
        document.getElementById('service-modal-title').textContent = 'Edit Service Details';
        document.getElementById('service-edit-id').value = srv.id;
        document.getElementById('srv-form-title').value = srv.title;
        document.getElementById('srv-form-category').value = srv.category;
        document.getElementById('srv-form-price').value = srv.price;
        document.getElementById('srv-form-duration').value = srv.duration;
        document.getElementById('srv-form-desc').value = srv.desc;
        serviceModal?.classList.add('active');
      }
    }
  });

  // Service Form Submission (Create or Update)
  serviceForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('service-edit-id').value;
    const title = document.getElementById('srv-form-title').value.trim();
    const category = document.getElementById('srv-form-category').value;
    const price = parseFloat(document.getElementById('srv-form-price').value) || 75;
    const duration = document.getElementById('srv-form-duration').value.trim() || '60 mins';
    const desc = document.getElementById('srv-form-desc').value.trim();

    if (!title || !desc) {
      showToast('Please fill out the service title and description.', 'danger');
      return;
    }

    let services = JSON.parse(localStorage.getItem('gg_services') || '[]');

    if (editId) {
      // Edit
      const target = services.find(s => s.id === editId);
      if (target) {
        target.title = title;
        target.category = category;
        target.price = price;
        target.duration = duration;
        target.desc = desc;
        showToast(`Service "${title}" updated successfully.`, 'success');
      }
    } else {
      // Add
      const newSrv = {
        id: 'srv-' + Date.now().toString().slice(-4),
        title,
        category,
        categoryKey: category.toLowerCase().includes('hair') ? 'hair' : category.toLowerCase().includes('skin') ? 'skin' : category.toLowerCase().includes('nail') ? 'nails' : 'spa',
        price,
        duration,
        image: 'assets/images/service-facial.webp',
        desc
      };
      services.push(newSrv);
      showToast(`New service "${title}" added to catalog!`, 'success');
    }

    localStorage.setItem('gg_services', JSON.stringify(services));
    serviceModal?.classList.remove('active');
    renderAdminServices();
  });
}

function renderAdminAppointments(filter = 'all') {
  const tableBodies = document.querySelectorAll('#admin-appointments-table-body, #admin-appointments-table-body-2');
  if (!tableBodies.length) return;

  const stored = JSON.parse(localStorage.getItem('gg_appointments') || '[]');
  const filtered = filter === 'all' ? stored : stored.filter(a => a.status.toLowerCase() === filter.toLowerCase());

  if (filtered.length === 0) {
    tableBodies.forEach(tb => {
      tb.innerHTML = '<tr><td colspan="7" class="text-center" style="padding: 2rem;">No matching appointments found.</td></tr>';
    });
    return;
  }

  const html = filtered.map(apt => `
    <tr>
      <td><strong>${apt.id}</strong></td>
      <td>
        <strong>${apt.customerName}</strong><br>
        <small style="color:var(--color-text-light);">${apt.email} | ${apt.phone}</small>
      </td>
      <td>
        ${apt.service}<br>
        <span style="font-size:0.75rem; color:var(--color-gold);">${apt.package !== 'None' ? apt.package : ''}</span>
      </td>
      <td>${apt.date}<br><small style="color:var(--color-text-light);">${apt.time}</small></td>
      <td>${apt.staff || 'Any'}</td>
      <td>
        <select class="form-control admin-appointment-status-select" data-id="${apt.id}" style="padding:0.35rem 0.6rem; font-size:0.85rem; width:130px;">
          <option value="Confirmed" ${apt.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
          <option value="Pending" ${apt.status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="Completed" ${apt.status === 'Completed' ? 'selected' : ''}>Completed</option>
          <option value="Cancelled" ${apt.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
        </select>
      </td>
      <td>
        <button class="btn btn-sm btn-danger admin-delete-apt-btn" data-id="${apt.id}" title="Delete Record">
          &times;
        </button>
      </td>
    </tr>
  `).join('');

  tableBodies.forEach(tb => { tb.innerHTML = html; });
}

function renderAdminServices() {
  const tableBody = document.getElementById('admin-services-table-body');
  if (!tableBody) return;

  const services = JSON.parse(localStorage.getItem('gg_services') || '[]');

  tableBody.innerHTML = services.map(srv => `
    <tr>
      <td><img src="${srv.image}" alt="${srv.title}" style="width:48px; height:48px; border-radius:6px; object-fit:cover;"></td>
      <td><strong>${srv.title}</strong></td>
      <td><span class="badge badge-blush">${srv.category}</span></td>
      <td><strong>$${srv.price}</strong></td>
      <td>${srv.duration}</td>
      <td>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-sm btn-secondary admin-edit-srv-btn" data-id="${srv.id}">Edit</button>
          <button class="btn btn-sm btn-danger admin-delete-srv-btn" data-id="${srv.id}">&times;</button>
        </div>
      </td>
    </tr>
  `).join('');
}

/* ==========================================================================
   10. Accordion Component
   ========================================================================== */
function initAccordions() {
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isActive = item.classList.contains('active');

      // Close sibling accordions in same parent
      const parent = item.closest('.accordion');
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(sibling => {
          sibling.classList.remove('active');
          const siblingContent = sibling.querySelector('.accordion-content');
          if (siblingContent) siblingContent.style.maxHeight = null;
        });
      }

      if (!isActive) {
        item.classList.add('active');
        if (content) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });
}

/* ==========================================================================
   11. Contact Form Validation
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('salon-contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const phone = document.getElementById('contact-phone')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !/^[a-zA-Z\s]{2,50}$/.test(name)) {
      showToast('Please enter your full name (letters only).', 'danger');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.', 'danger');
      return;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      showToast('Please enter a 10-digit mobile number.', 'danger');
      return;
    }
    if (!subject) {
      showToast('Please specify a subject for your enquiry.', 'danger');
      return;
    }
    if (!message || message.length < 10) {
      showToast('Message must be at least 10 characters long.', 'danger');
      return;
    }

    contactForm.reset();
    showToast('Thank you! Your message has been sent to our concierge team.', 'success');
  });
}

/* ==========================================================================
   12. Newsletter Form
   ========================================================================== */
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const email = input?.value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email address.', 'danger');
        return;
      }
      if (input) input.value = '';
      showToast('Thank you for subscribing to the Glow & Grace journal!', 'success');
    });
  });
}

/* ==========================================================================
   13. Global Toast Notifications
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div style="font-size:1.1rem; line-height:1;">
      ${type === 'success' ? '&#10003;' : type === 'danger' ? '&#9888;' : '&#9432;'}
    </div>
    <div style="font-size:0.9rem; font-weight:500;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease-out';
    setTimeout(() => { toast.remove(); }, 300);
  }, 4000);
}

function closeModal() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
}

/* ==========================================================================
   14. Universal 404 Routing for Placeholder & Inner Action Links
   ========================================================================== */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link) {
    const href = link.getAttribute('href');
    if (href === '#' || href === 'javascript:void(0)' || href === '') {
      e.preventDefault();
      window.location.href = '404.html';
    }
  }
});

/* ==========================================================================
   15. Page-Wide Scroll Reveal Animations Suite
   ========================================================================== */
function initScrollReveal() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const targets = document.querySelectorAll(
    '.luxury-card, .service-card, .expert-card, .package-card, .testimonial-card, ' +
    '.gallery-item, .milestone-card, .faq-card, .transformation-showcase-card, ' +
    '.section-intro-header, .form-card, .contact-card, .values-list, .cta-box, ' +
    '.about-preview-images, .about-preview-content'
  );

  if (!targets.length) return;

  targets.forEach((el) => {
    el.classList.add('reveal-item');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach((el) => {
      observer.observe(el);
    });
  } else {
    targets.forEach((el) => {
      el.classList.add('is-revealed');
    });
  }
}

// Auto-run on DOM ready or immediate if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}


