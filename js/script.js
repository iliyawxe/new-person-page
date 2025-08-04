  const links = document.querySelectorAll('.custom-tabs .nav-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      moveUnderline(link);
    });
  });
  window.addEventListener('load', () => {
    const activeLink = document.querySelector('.custom-tabs .nav-link.active');
    moveUnderline(activeLink);
  });
  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.inner-tab');
    const pages = document.querySelectorAll('.inner-page');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        pages.forEach(p => {
          if (p.id === targetId) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      });
    });
  });