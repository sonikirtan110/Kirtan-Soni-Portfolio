// Typing Animation
  const typingElement = document.getElementById('typingText');
  const roles = ['Data Engineer', 'Data Analyst', 'ML Engineer'];
  let currentRoleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function typeAnimation() {
    const currentRole = roles[currentRoleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, currentCharIndex - 1);
      currentCharIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, currentCharIndex + 1);
      currentCharIndex++;
    }

    if (!isDeleting && currentCharIndex === currentRole.length) {
      setTimeout(() => { isDeleting = true; }, 1500);
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeAnimation, speed);
  }

  typeAnimation();

  // Theme toggle
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeOrder = ['light', 'dark', 'skyblue', 'purple'];
  const themeIcons = {
    light: 'fas fa-moon',
    dark: 'fas fa-sun',
    skyblue: 'fas fa-cloud',
    purple: 'fas fa-palette'
  };

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    themeIcon.className = themeIcons[theme] || themeIcons.light;
    themeToggle.title = `Theme: ${theme}`;
    themeToggle.setAttribute('aria-label', `Current theme ${theme}. Click to switch theme`);
  }

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme && themeOrder.includes(savedTheme)) {
    applyTheme(savedTheme);
  } else if (savedTheme === 'dashboard') {
    // Backward compatibility for users with the old theme key in storage.
    applyTheme('skyblue');
  } else {
    applyTheme('skyblue');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') || 'light';
    const currentIndex = themeOrder.indexOf(currentTheme);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    applyTheme(nextTheme);
  });

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile nav
  document.getElementById('hamBtn').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.add('open');
  });
  document.getElementById('mobileClose').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.remove('open');
  });
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('mobileNav').classList.remove('open'));
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // Section reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('section').forEach(s => io.observe(s));

  // Exp tabs
  document.querySelectorAll('.exp-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('tab-' + this.dataset.tab).classList.add('active');
    });
  });
