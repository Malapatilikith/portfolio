/**
 * MALAPATI LIKITH - PORTFOLIO INTERACTIVITY
 * Clean ES6+ JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initTheme();
  initNavbar();
  initPhotoManager();
  initSkillFilters();
  initClipboard();
  initContactForm();
  initScrollEffects();
});

/* --------------------------------------------------------------------------
   1. Dynamic Typewriter Effect
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const element = document.getElementById('typewriter-text');
  if (!element) return;

  const roles = [
    'Java Full-Stack Developer',
    'Machine Learning Engineer',
    'AI & Data Science ',
    'Deep Learning & Natural Language Processing'
  ];
 
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      element.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      element.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause at completion
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   2. Theme Management (Dark/Light)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('likith_theme');

  // Set initial theme
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // default dark
  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeIcon(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('likith_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'light') {
      themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;
      themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;
      themeToggle.setAttribute('aria-label', 'Switch to light theme');
    }
  }
}

/* --------------------------------------------------------------------------
   3. Navbar & Mobile Menu & ScrollSpy
   -------------------------------------------------------------------------- */
function initNavbar() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.innerHTML = navLinks.classList.contains('active')
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close menu when link is clicked
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (activeLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          links.forEach(l => l.classList.remove('active'));
          activeLink.classList.add('active');
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Profile Photo Management (Upload, Preview & Persistence)
   -------------------------------------------------------------------------- */
function initPhotoManager() {
  const avatarImg = document.getElementById('avatar-img');
  const triggerBtn = document.getElementById('photo-change-trigger');
  const hintBtn = document.getElementById('photo-badge-hint');
  const modal = document.getElementById('photo-modal');
  const modalClose = document.getElementById('modal-close');
  const dropzone = document.getElementById('upload-dropzone');
  const fileInput = document.getElementById('photo-file-input');
  const resetBtn = document.getElementById('reset-photo-btn');
  const successBadge = document.getElementById('photo-status-msg');

  // Check LocalStorage for saved user photo
  const savedPhoto = localStorage.getItem('likith_custom_photo');
  if (savedPhoto && avatarImg) {
    avatarImg.src = savedPhoto;
  } else if (avatarImg) {
    // Check if assets/profile.jpg exists via image probe
    const testImg = new Image();
    testImg.src = 'assets/profile.jpg';
    testImg.onload = () => {
      avatarImg.src = 'assets/profile.jpg';
    };
    testImg.onerror = () => {
      avatarImg.src = 'assets/avatar-placeholder.svg';
    };
  }

  function openModal() {
    if (modal) modal.classList.add('active');
  }

  function closeModal() {
    if (modal) modal.classList.remove('active');
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openModal);
  if (hintBtn) hintBtn.addEventListener('click', openModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Handle File Input selection
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) handleImageFile(file);
    });
  }

  // Handle Dropzone click
  if (dropzone) {
    dropzone.addEventListener('click', () => {
      if (fileInput) fileInput.click();
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        handleImageFile(file);
      }
    });
  }

  function handleImageFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const resultDataUrl = e.target.result;
      if (avatarImg) avatarImg.src = resultDataUrl;
      try {
        localStorage.setItem('likith_custom_photo', resultDataUrl);
      } catch (err) {
        console.warn('Image too large for localStorage, displayed for session only.');
      }
      if (successBadge) {
        successBadge.textContent = 'Photo updated successfully!';
        successBadge.style.display = 'block';
        setTimeout(() => {
          successBadge.style.display = 'none';
          closeModal();
        }, 1200);
      }
    };
    reader.readAsDataURL(file);
  }

  // Reset to default
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('likith_custom_photo');
      if (avatarImg) avatarImg.src = 'assets/avatar-placeholder.svg';
      if (successBadge) {
        successBadge.textContent = 'Photo reset to default avatar!';
        successBadge.style.display = 'block';
        setTimeout(() => {
          successBadge.style.display = 'none';
          closeModal();
        }, 1200);
      }
    });
  }
}

/* --------------------------------------------------------------------------
   5. Interactive Skill Categories Filter
   -------------------------------------------------------------------------- */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-tab-btn');
  const categoryCards = document.querySelectorAll('.skill-category-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      categoryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Copy to Clipboard Utility
   -------------------------------------------------------------------------- */
function initClipboard() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.color = 'var(--accent-tertiary)';
        btn.style.borderColor = 'var(--accent-tertiary)';

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Interactive Contact Form
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('portfolio-contact-form');
  const alertBox = document.getElementById('form-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Format mailto link to open client with prefilled details
      const mailtoUrl = `mailto:likithmalapati@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

      if (alertBox) {
        alertBox.className = 'form-alert success';
        alertBox.textContent = 'Opening your email client to send your message to Likith...';
        alertBox.style.display = 'block';
      }

      window.location.href = mailtoUrl;

      setTimeout(() => {
        contactForm.reset();
        if (alertBox) {
          alertBox.textContent = 'Thank you! Your email client has been launched.';
        }
      }, 1000);
    });
  }
}

/* --------------------------------------------------------------------------
   8. Scroll Effects & Back To Top
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      if (backToTopBtn) backToTopBtn.classList.add('visible');
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
