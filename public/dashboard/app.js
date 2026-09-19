/**
 * ROMAIN ECARNOT - Console d'Architecte
 * Logique d'interaction Vanilla JS (Navigation, Raccourcis, Timeline, Inspecteur SVG, Recherche, Copie)
 * Zéro dépendance externe.
 * Zéro tiret cadratin ou demi-cadratin.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. GESTION DES ONGLETS & RACCOURCIS CLAVIER (1, 2, 3, 4, 0)
  // --------------------------------------------------------------------------
  const navTabs = document.querySelectorAll('.nav-tab');
  const panels = document.querySelectorAll('.console-panel');

  function switchTab(targetId) {
    // Si targetId est 'all', on affiche toutes les sections
    if (targetId === 'all') {
      panels.forEach(panel => panel.classList.add('active'));
      navTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.target === 'all');
      });
      showToast('Mode complet active : toutes les sections visibles');
      return;
    }

    // Sinon affichage sélectif de la section
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.id === targetId);
    });

    navTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.target === targetId);
    });

    // Remonter en haut de page en douceur
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      switchTab(targetId);
    });
  });

  // --------------------------------------------------------------------------
  // 2. TIMELINE INTERACTIVE & LIAISON BIDIRECTIONNELLE AUX COMPÉTENCES
  // --------------------------------------------------------------------------
  const timelineRows = document.querySelectorAll('.timeline-row');
  const skillBadges = document.querySelectorAll('.skill-badge');

  function clearSkillHighlights() {
    skillBadges.forEach(badge => badge.classList.remove('highlighted'));
  }

  function highlightSkills(skillsList) {
    clearSkillHighlights();
    if (!skillsList) return;
    const skills = skillsList.split(',').map(s => s.trim());
    skills.forEach(skillKey => {
      const matchingBadges = document.querySelectorAll(`.skill-badge[data-skill="${skillKey}"]`);
      matchingBadges.forEach(badge => badge.classList.add('highlighted'));
    });
  }

  timelineRows.forEach(row => {
    // Survol souris
    row.addEventListener('mouseenter', () => {
      const linked = row.dataset.linkedSkills;
      highlightSkills(linked);
    });

    row.addEventListener('mouseleave', () => {
      // Si une autre ligne est active par clic, on garde ses compétences
      const activeRow = document.querySelector('.timeline-row.active-row');
      if (activeRow) {
        highlightSkills(activeRow.dataset.linkedSkills);
      } else {
        clearSkillHighlights();
      }
    });

    // Clic pour verrouiller / basculer
    row.addEventListener('click', () => {
      const wasActive = row.classList.contains('active-row');
      timelineRows.forEach(r => r.classList.remove('active-row'));
      if (!wasActive) {
        row.classList.add('active-row');
        highlightSkills(row.dataset.linkedSkills);
        const org = row.querySelector('.org-name')?.textContent || 'Organisation';
        showToast(`Focus activé sur le parcours : ${org}`);
      } else {
        clearSkillHighlights();
      }
    });
  });

  // Liaison inverse : survol d'un badge de compétence met en avant les lignes du parcours associées
  skillBadges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
      const skillKey = badge.dataset.skill;
      timelineRows.forEach(row => {
        const linked = row.dataset.linkedSkills || '';
        if (linked.split(',').map(s => s.trim()).includes(skillKey)) {
          row.classList.add('active-row');
        } else {
          row.classList.remove('active-row');
        }
      });
    });

    badge.addEventListener('mouseleave', () => {
      timelineRows.forEach(row => row.classList.remove('active-row'));
    });
  });

  // --------------------------------------------------------------------------
  // 3. INSPECTEUR SYSTÈME (MODALE SVG D'ARCHITECTURE TECHNIQUE)
  // --------------------------------------------------------------------------
  const modal = document.getElementById('system-inspector-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalCloseAction = document.getElementById('modal-close-action');
  const inspectBtns = document.querySelectorAll('.btn-inspect');
  const tabCruchot = document.getElementById('tab-insp-cruchot');
  const tabTrinity = document.getElementById('tab-insp-trinity');
  const viewCruchot = document.getElementById('view-insp-cruchot');
  const viewTrinity = document.getElementById('view-insp-trinity');
  const inspectorTitle = document.getElementById('inspector-title');

  function openInspector(system) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // bloque le défilement de fond
    switchInspectorSystem(system || 'cruchot');
  }

  function closeInspector() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function switchInspectorSystem(sys) {
    if (sys === 'trinity') {
      tabTrinity.classList.add('active');
      tabCruchot.classList.remove('active');
      viewTrinity.classList.add('active');
      viewCruchot.classList.remove('active');
      inspectorTitle.textContent = 'Architecture Trinity LifeOS - Orchestration Multi-Agents';
    } else {
      tabCruchot.classList.add('active');
      tabTrinity.classList.remove('active');
      viewCruchot.classList.add('active');
      viewTrinity.classList.remove('active');
      inspectorTitle.textContent = 'Architecture Cruchot - Client IA 100% Local & Sécurisé';
    }
  }

  inspectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sys = btn.dataset.system;
      openInspector(sys);
    });
  });

  tabCruchot?.addEventListener('click', () => switchInspectorSystem('cruchot'));
  tabTrinity?.addEventListener('click', () => switchInspectorSystem('trinity'));

  modalCloseBtn?.addEventListener('click', closeInspector);
  modalCloseAction?.addEventListener('click', closeInspector);

  // Clic sur le fond extérieur pour fermer
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeInspector();
    }
  });

  // --------------------------------------------------------------------------
  // 4. TOAST SYSTÈME & COPIE RAPIDE PRESSE-PAPIERS
  // --------------------------------------------------------------------------
  const toastEl = document.getElementById('sys-toast');
  const toastMsgEl = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl || !toastMsgEl) return;
    toastMsgEl.textContent = message;
    toastEl.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2400);
  }

  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const text = btn.dataset.copy;
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        showToast(`Copié dans le presse-papiers : ${text}`);
      } catch (err) {
        // Fallback si clipboard API non disponible
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copié dans le presse-papiers : ${text}`);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. BARRE DE RECHERCHE & FILTRE EN TEMPS RÉEL
  // --------------------------------------------------------------------------
  const filterInput = document.getElementById('filter-input');
  const clearFilterBtn = document.getElementById('clear-filter');
  const searchableCards = document.querySelectorAll('.console-card, .timeline-row');

  function applyFilter(query) {
    const term = query.trim().toLowerCase();
    if (!term) {
      clearFilterBtn.classList.remove('visible');
      searchableCards.forEach(el => {
        el.style.display = '';
        el.style.opacity = '';
      });
      return;
    }

    clearFilterBtn.classList.add('visible');

    // On bascule automatiquement en vue "Tout afficher" pour permettre une recherche globale
    panels.forEach(p => p.classList.add('active'));
    navTabs.forEach(t => t.classList.toggle('active', t.dataset.target === 'all'));

    let matchesCount = 0;

    searchableCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const tags = (card.dataset.tags || '').toLowerCase();
      const skills = (card.dataset.linkedSkills || '').toLowerCase();

      if (text.includes(term) || tags.includes(term) || skills.includes(term)) {
        card.style.display = '';
        card.style.opacity = '1';
        matchesCount++;
      } else {
        card.style.opacity = '0.2';
      }
    });

    showToast(`Filtre "${term}" : ${matchesCount} element(s) trouve(s)`);
  }

  filterInput?.addEventListener('input', (e) => {
    applyFilter(e.target.value);
  });

  clearFilterBtn?.addEventListener('click', () => {
    if (filterInput) {
      filterInput.value = '';
      applyFilter('');
      filterInput.focus();
    }
  });

  // --------------------------------------------------------------------------
  // 6. GESTION DES RACCOURCIS CLAVIER GLOBAUX (1, 2, 3, 4, 0, /, Echap)
  // --------------------------------------------------------------------------
  window.addEventListener('keydown', (e) => {
    // Si modale ouverte : Echap ferme la modale
    if (e.key === 'Escape') {
      if (modal.classList.contains('open')) {
        closeInspector();
        return;
      }
      if (filterInput && document.activeElement === filterInput) {
        filterInput.value = '';
        applyFilter('');
        filterInput.blur();
        return;
      }
    }

    // Si on est dans le champ de saisie, on n'intercepte pas les chiffres
    if (document.activeElement === filterInput) {
      return;
    }

    // Touche / : focus sur la recherche
    if (e.key === '/') {
      e.preventDefault();
      filterInput?.focus();
      return;
    }

    // Touches 1, 2, 3, 4, 0 pour changer d'onglet
    switch (e.key) {
      case '1':
        e.preventDefault();
        switchTab('panel-overview');
        break;
      case '2':
        e.preventDefault();
        switchTab('panel-evidence');
        break;
      case '3':
        e.preventDefault();
        switchTab('panel-skills');
        break;
      case '4':
        e.preventDefault();
        switchTab('panel-history');
        break;
      case '0':
        e.preventDefault();
        switchTab('all');
        break;
    }
  });

  // --------------------------------------------------------------------------
  // 7. BOUTON IMPRESSION / EXPORT PDF
  // --------------------------------------------------------------------------
  const printBtn = document.getElementById('btn-print');
  printBtn?.addEventListener('click', () => {
    window.print();
  });
});
