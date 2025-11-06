/*
  Simple mobile menu script.
  
*/

(function(){
  // elements
  const openBtn = document.getElementById('mobileBtn');
  const closeBtn = document.getElementById('menuClose');
  const menuEl = document.getElementById('sideMenu');
  const overlay = document.getElementById('backdrop');

  // helper functions (toggle)
  function showMenu(){
    menuEl.classList.add('open');
    overlay.classList.add('show');
    // prevent background scroll when menu open
    document.body.style.overflow = 'hidden';
    menuEl.setAttribute('aria-hidden', 'false');
  }

  function hideMenu(){
    menuEl.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    menuEl.setAttribute('aria-hidden', 'true');
  }

  // event listeners 
  if(openBtn){
    openBtn.addEventListener('click', showMenu);
  }

  if(closeBtn){
    closeBtn.addEventListener('click', hideMenu);
  }

  // clicking overlay closes menu
  overlay.addEventListener('click', hideMenu);

  // close with Esc key (nice-to-have)
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      hideMenu();
    }
  });

})(); 
