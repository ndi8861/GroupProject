const toggleBtn = document.querySelector('.nav-toggleBtn');
const rmenu = document.querySelector('.nav-rmenu');
const lmenu = document.querySelector('.nav-lmenu');

toggleBtn.addEventListener('click', () => {
  rmenu.classList.toggle('active')
  lmenu.classList.toggle('active')
})