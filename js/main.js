/**
 * MIHIR VERMA — AI/ML ENGINEER & PYTHON BACKEND PORTFOLIO ENGINE
 * View Routing, Theme Controller, Interactive Projects Accordion, 
 * Terminal Emulator, ML Pipeline Workstation & Contact Actions
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouting();
  initAccordion();
  initTerminal();
  initScreenshotsFilter();
  initContactActions();
  initMobileMenu();
});

/* ==========================================================================
   1. THEME CONTROLLER
   ========================================================================== */
function initTheme() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const currentTheme = localStorage.getItem('mihir-theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('mihir-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (!themeBtn) return;
  themeBtn.innerHTML = theme === 'dark' 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
}

/* ==========================================================================
   2. VIEW ROUTER & NAVIGATION
   ========================================================================== */
function initRouting() {
  const navLinks = document.querySelectorAll('[data-route]');
  const views = document.querySelectorAll('.view-section');

  function switchView(routeId) {
    const targetView = document.getElementById(`view-${routeId}`);
    if (!targetView) return;

    views.forEach(v => v.classList.remove('active-view'));
    targetView.classList.add('active-view');

    navLinks.forEach(link => {
      if (link.getAttribute('data-route') === routeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', `#${routeId}`);

    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.remove('open');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      switchView(route);
    });
  });

  const hash = window.location.hash.replace('#', '') || 'work';
  const initialRoute = document.getElementById(`view-${hash}`) ? hash : 'work';
  switchView(initialRoute);

  window.addEventListener('popstate', () => {
    const currentHash = window.location.hash.replace('#', '') || 'work';
    switchView(currentHash);
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
}

/* ==========================================================================
   3. HORIZONTAL ACCORDION CONTROLLER
   ========================================================================== */
function initAccordion() {
  const cards = document.querySelectorAll('.accordion-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

/* ==========================================================================
   4. INTERACTIVE TERMINAL EMULATOR
   ========================================================================== */
function initTerminal() {
  const input = document.getElementById('terminalInput');
  const log = document.getElementById('terminalLog');
  const projectItems = document.querySelectorAll('.terminal-project-item');
  const actionChips = document.querySelectorAll('.chip-btn');

  if (!input || !log) return;

  const COMMANDS = {
    'help': `Available Commands:
  • open [model]     -> Inspect pipeline (e.g. 'open asthma', 'open summarizer', 'open vision')
  • list             -> Show all production ML/Backend systems
  • tags             -> List core tech stack & frameworks
  • run              -> Run automated pipeline test & latency benchmark
  • clear            -> Clear terminal log`,
    'list': `Active AI/ML & Backend Systems:
  [1] Asthma Predictor  · Random Forest + Flask REST API   · Accuracy: 94.2%
  [2] Meeting AI        · Whisper + Diarization + PDF Gen  · Latency: <1.2s
  [3] Vision Analytics  · Deep CNN + OpenCV Realtime       · 60 FPS
  [4] Smart Inhaler     · IoT Telemetry + Python Edge      · Production`,
    'tags': `Engineering Stack:
  #Python #ScikitLearn #TensorFlow #PyTorch #Flask #Django #FastAPI #PostgreSQL #Docker #OpenCV`,
    'next': `Switching to next pipeline: Meeting Summarizer AI (NLP + Diarization)`,
    'run': `> Running test suite on active ML pipeline...
  ✓ Feature matrix engineered (18 features / 0.04s)
  ✓ Random Forest inference latency: 12ms (p99)
  ✓ REST API endpoint /api/v1/predict: 200 OK
  System health: 100% OPERATIONAL.`
  };

  function executeCommand(cmd) {
    const cleanCmd = cmd.trim().toLowerCase();
    let response = '';

    if (cleanCmd.startsWith('open')) {
      const target = cleanCmd.replace('open', '').trim();
      response = `> Initializing neural pipeline for [${target || 'asthma'}]...\n  Loading weights into memory...\n  Model inference endpoint ready on port :8000.`;
      
      projectItems.forEach(item => {
        if (item.getAttribute('data-project').toLowerCase().includes(target)) {
          projectItems.forEach(p => p.classList.remove('active'));
          item.classList.add('active');
        }
      });
    } else if (cleanCmd === 'clear') {
      log.innerText = '';
      return;
    } else if (COMMANDS[cleanCmd]) {
      response = COMMANDS[cleanCmd];
    } else if (cleanCmd !== '') {
      response = `Command not recognized: "${cmd}". Type 'help' for available commands.`;
    }

    if (response) {
      log.innerText = `> ${cmd}\n${response}`;
    }
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      input.value = '';
      executeCommand(val);
    }
  });

  actionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        input.value = cmd;
        executeCommand(cmd);
      }
    });
  });

  projectItems.forEach(item => {
    item.addEventListener('click', () => {
      projectItems.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      const name = item.getAttribute('data-project');
      executeCommand(`open ${name}`);
    });
  });
}

/* ==========================================================================
   5. SCREENSHOTS FILTER & PAGINATION
   ========================================================================== */
function initScreenshotsFilter() {
  const tabs = document.querySelectorAll('.tab-filter-btn');
  const items = document.querySelectorAll('.screenshot-item-card');
  const pageBtns = document.querySelectorAll('.page-num-btn');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');

      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  pageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pageBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showToast(`Page ${btn.innerText.trim()} loaded`);
    });
  });
}

/* ==========================================================================
   6. CONTACT ACTIONS & TOAST
   ========================================================================== */
function initContactActions() {
  const emailCards = document.querySelectorAll('.copy-email-btn');
  const form = document.getElementById('contactForm');

  emailCards.forEach(card => {
    card.addEventListener('click', () => {
      const email = card.getAttribute('data-email') || 'mihirverma.dev@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.innerText = 'Transmitting...';
        setTimeout(() => {
          submitBtn.innerText = 'Message Dispatched ✓';
          showToast('Thank you! Mihir will respond within 24 hours.');
          form.reset();
          setTimeout(() => {
            submitBtn.innerText = 'Send Message';
          }, 3000);
        }, 800);
      }
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}
