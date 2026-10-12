document.querySelectorAll('[data-top]').forEach(button => {
  button.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    document.querySelector('h1').focus({preventScroll: true});
  });
});

document.querySelectorAll('[data-menu]').forEach(menu => {
  const button = menu.querySelector('[data-menu-toggle]');
  const panel = menu.querySelector('[data-menu-panel]');
  const label = button.querySelector('[data-menu-label]');

  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    label.textContent = open ? 'Fermer le menu' : 'Ouvrir le menu';
  }

  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('click', event => {
    if (!menu.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
});
