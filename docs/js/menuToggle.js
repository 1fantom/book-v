document.addEventListener('DOMContentLoaded', () => {
  const placeholder = document.getElementById('header-placeholder');
  new MutationObserver((_, obs) => {
    const btn = document.getElementById('menu-toggle');
    if (!btn) return;
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    btn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      content.classList.toggle('active');
      const exp = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!exp));
    });
    obs.disconnect();
  }).observe(placeholder, { childList: true });
});
