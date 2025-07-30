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