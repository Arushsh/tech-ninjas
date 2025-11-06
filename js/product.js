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

    // Size Chart Modal
    const sizeChartBtn = document.getElementById('sizeChartBtn');
    const sizeChartModal = document.getElementById('sizeChartModal');
    const closeSizeChart = document.getElementById('closeSizeChart');

    function openSizeChart() {
      sizeChartModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeSizeChartModal() {
      sizeChartModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    sizeChartBtn.addEventListener('click', openSizeChart);
    closeSizeChart.addEventListener('click', closeSizeChartModal);
    sizeChartModal.addEventListener('click', (e) => {
      if (e.target === sizeChartModal) {
        closeSizeChartModal();
      }
    });

    // Quantity Controls
    const quantityInput = document.querySelector('.quantity-input');
    const quantityBtns = document.querySelectorAll('.quantity-btn');

    quantityBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (btn.textContent === '+') {
          quantityInput.value = currentValue + 1;
        } else if (btn.textContent === '−' && currentValue > 1) {
          quantityInput.value = currentValue - 1;
        }
      });
    });

    // Thumbnail Images
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');

    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const img = thumb.querySelector('img');
        mainImage.src = img.src;
      });
    });