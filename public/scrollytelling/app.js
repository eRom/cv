/**
 * CV ROMAIN ECARNOT - SCROLLYTELLING DOCUMENTAIRE
 * Direction 3 : Récit long format interactif
 * Zéro dépendance externe - Vanilla JavaScript
 */

(function initScrollytelling() {
  // Respect du paramètre prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Éléments du DOM
  const progressBar = document.getElementById('reading-progress-bar');
  const scrollPercentageEl = document.getElementById('scroll-percentage');
  const trackLineFill = document.getElementById('track-line-fill');
  const trackLinks = document.querySelectorAll('.track-link');
  const metricCounters = document.querySelectorAll('.metric-counter');
  const avcHighlight = document.getElementById('avc-highlight');
  const printBtn = document.getElementById('btn-print-doc');
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  const themeBtnLabel = document.getElementById('theme-btn-label');

  /**
   * 0. Gestion du mode clair / sombre
   */
  function updateThemeUI(theme) {
    if (theme === 'dark') {
      if (themeIconSun) themeIconSun.style.display = 'block';
      if (themeIconMoon) themeIconMoon.style.display = 'none';
      if (themeBtnLabel) themeBtnLabel.textContent = 'Clair';
    } else {
      if (themeIconSun) themeIconSun.style.display = 'none';
      if (themeIconMoon) themeIconMoon.style.display = 'block';
      if (themeBtnLabel) themeBtnLabel.textContent = 'Sombre';
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('romain_scrolly_theme', theme);
    updateThemeUI(theme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  // Initialisation du thème au chargement
  const savedTheme = localStorage.getItem('romain_scrolly_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Raccourci clavier 'T' pour basculer le thème rapidement
  window.addEventListener('keydown', (e) => {
    if ((e.key === 't' || e.key === 'T') && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      toggleTheme();
    }
  });

  // Écoute dynamique du changement de préférence système si aucun choix forcé
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('romain_scrolly_theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /**
   * 1. Mise à jour de la barre de défilement et des indicateurs
   */
  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;
    const percentage = Math.round(scrollFraction * 100);

    // Barre supérieure
    if (progressBar) {
      progressBar.style.width = `${percentage}%`;
    }

    // Indicateur texte latéral
    if (scrollPercentageEl) {
      scrollPercentageEl.textContent = `${percentage}%`;
    }

    // Jauge verticale dans la barre latérale
    if (trackLineFill) {
      trackLineFill.style.height = `${percentage}%`;
    }
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /**
   * 2. Suivi de la section active (IntersectionObserver)
   */
  const sections = document.querySelectorAll('.documentary-section[id]');
  
  const sectionObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -40% 0px',
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        trackLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, sectionObserverOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  /**
   * 3. Animation d'incrémentation des métriques chiffrées (25 ans, 11 LLM, 30+, 4 ans)
   */
  let metricsAnimated = false;

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function animateCounters() {
    if (metricsAnimated) return;
    metricsAnimated = true;

    metricCounters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10);
      if (prefersReducedMotion || target === 0) {
        counter.textContent = String(target);
        return;
      }

      const duration = 1500; // millisecondes
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentVal = Math.floor(easeOutQuad(progress) * target);
        
        counter.textContent = String(currentVal);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = String(target);
        }
      }

      requestAnimationFrame(update);
    });
  }

  const metricsGrid = document.querySelector('.metrics-ticker-grid');
  if (metricsGrid) {
    const metricsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          metricsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    metricsObserver.observe(metricsGrid);
  }

  /**
   * 4. Surlignage progressif de la citation post-AVC
   */
  if (avcHighlight) {
    if (prefersReducedMotion) {
      avcHighlight.classList.add('is-revealed');
    } else {
      const avcObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            avcHighlight.classList.add('is-revealed');
            avcObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });

      avcObserver.observe(avcHighlight);
    }
  }

  /**
   * 5. Action d'impression / export PDF
   */
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  /**
   * 6. Défilement fluide des liens d'ancrage
   */
  trackLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

})();
