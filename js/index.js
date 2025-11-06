  const btn = document.getElementById('mobileMenuBtn');
    const closeBtn = document.getElementById('closeMenu');
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');

    function openMenu() {
      menu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
