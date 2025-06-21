document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const submenuId = button.getAttribute('aria-controls');
      const submenu = document.getElementById(submenuId);

      // Закрываем все подменю и сбрасываем все кнопки
      document.querySelectorAll('.submenu').forEach(sm => sm.classList.remove('show'));
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('active');
      });

      // Если текущее было закрыто — открываем его
      if (!expanded) {
        submenu.classList.add('show');
        button.setAttribute('aria-expanded', 'true');
        button.classList.add('active');
      }
    });
  });
});
